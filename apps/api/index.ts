import { PrismaClient } from "@prisma/client";
import { initTRPC } from "@trpc/server";
import { TRPCError } from "@trpc/server";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import {
	BookingSchema,
	CourtSchema,
	EventSchema,
	NotificationSchema,
	ProfileSchema,
	UserSchema,
} from "./schemas";

const prisma = new PrismaClient();

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

const companyInput = z.object({
	name: z.string().min(1),
	slug: z.string().min(1),
	domain: z.string().optional(),
	logoImg: z.string().optional(),
	ownerId: z.string(),
	cityId: z.string().optional(),
	addressId: z.string().optional(),
});

// Chave secreta para JWT - Em produção, use variáveis de ambiente
const JWT_SECRET = process.env.JWT_SECRET || "sua-chave-secreta";

// Middleware de autenticação
const isAuthenticated = t.middleware(async ({ ctx, next }) => {
	const token = ctx.req?.headers.authorization?.split(" ")[1];

	if (!token) {
		throw new TRPCError({
			code: "UNAUTHORIZED",
			message: "Token não fornecido",
		});
	}

	try {
		const decoded = jwt.verify(token, JWT_SECRET);
		ctx.user = decoded;
		return next();
	} catch (error) {
		throw new TRPCError({
			code: "UNAUTHORIZED",
			message: "Token inválido",
		});
	}
});

// Procedimento protegido que requer autenticação
const protectedProcedure = t.procedure.use(isAuthenticated);

// Primeiro, defina o router de autenticação separadamente
const authRouter = t.router({
	signIn: publicProcedure
		.input(
			z.object({
				email: z.string().email(),
				password: z.string(),
			}),
		)
		.mutation(async ({ input }) => {
			const { email, password } = input;

			const user = await prisma.user.findUnique({
				where: { email },
			});

			if (!user) {
				throw new TRPCError({
					code: "NOT_FOUND",
					message: "Usuário não encontrado",
				});
			}

			const validPassword = await bcrypt.compare(password, user.passwordHash);

			if (!validPassword) {
				throw new TRPCError({
					code: "UNAUTHORIZED",
					message: "Senha incorreta",
				});
			}

			const token = jwt.sign(
				{ userId: user.id, email: user.email },
				JWT_SECRET,
				{ expiresIn: "7d" },
			);

			return {
				user: {
					id: user.id,
					name: user.name,
					email: user.email,
				},
				token,
			};
		}),

	signUp: publicProcedure
		.input(
			z.object({
				name: z.string(),
				email: z.string().email(),
				password: z.string().min(6),
			}),
		)
		.mutation(async ({ input }) => {
			const { name, email, password } = input;

			const existingUser = await prisma.user.findUnique({
				where: { email },
			});

			if (existingUser) {
				throw new TRPCError({
					code: "CONFLICT",
					message: "Email já cadastrado",
				});
			}

			const hashedPassword = await bcrypt.hash(password, 10);

			const user = await prisma.user.create({
				data: {
					name,
					email,
					passwordHash: hashedPassword,
				},
			});

			const token = jwt.sign(
				{ userId: user.id, email: user.email },
				JWT_SECRET,
				{ expiresIn: "7d" },
			);

			return {
				user: {
					id: user.id,
					name: user.name,
					email: user.email,
				},
				token,
			};
		}),
});

// Depois, adicione-o ao router principal
const appRouter = t.router({
	auth: authRouter, // Certifique-se que está adicionando aqui
	// Rotas de Evento
	event: t.router({
		getById: publicProcedure
			.input(z.object({ id: z.string() }))
			.query(async ({ input }) => {
				try {
					const event = await prisma.event.findUnique({
						where: { id: input.id },
						include: {
							company: {
								select: {
									id: true,
									name: true,
								},
							},
							EventRule: true,
							Prize: {
								orderBy: {
									position: "asc",
								},
							},
						},
					});

					if (!event) {
						throw new Error(`Evento não encontrado com ID: ${input.id}`);
					}

					return event;
				} catch (error) {
					console.error("Erro ao buscar evento:", error);
					throw error;
				}
			}),
		create: publicProcedure
			.input(EventSchema.omit({ id: true, createdAt: true }))
			.mutation(async ({ input }) => {
				return await prisma.event.create({ data: input });
			}),
		update: publicProcedure
			.input(EventSchema.partial().extend({ id: z.string() }))
			.mutation(async ({ input }) => {
				const { id, ...data } = input;
				return await prisma.event.update({ where: { id }, data });
			}),
		delete: publicProcedure
			.input(z.object({ id: z.string() }))
			.mutation(async ({ input }) => {
				return await prisma.event.delete({ where: { id: input.id } });
			}),
		getAll: publicProcedure
			.input(
				z.object({
					limit: z.number().min(1).max(100).optional().default(10),
					cursor: z.string().optional(),
				}),
			)
			.query(async ({ input }) => {
				const limit = input.limit;
				const { cursor } = input;

				const events = await prisma.event.findMany({
					take: limit + 1,
					cursor: cursor ? { id: cursor } : undefined,
					orderBy: {
						dateTime: "desc",
					},
				});

				let nextCursor: typeof cursor | undefined = undefined;
				if (events.length > limit) {
					const nextItem = events.pop();
					nextCursor = nextItem?.id;
				}

				return {
					events,
					nextCursor,
				};
			}),
		search: publicProcedure
			.input(
				z.object({
					query: z.string(),
					limit: z.number().min(1).max(100).optional().default(10),
					cursor: z.string().optional(),
				}),
			)
			.query(async ({ input }) => {
				const { query, limit, cursor } = input;
				console.log("Recebida busca de eventos com query:", query); // Log para depuração

				const events = await prisma.event.findMany({
					where: {
						OR: [
							{
								name: {
									contains: query,
									mode: "insensitive",
								},
							},
							{
								description: {
									contains: query,
									mode: "insensitive",
								},
							},
							// Adicione outros campos relevantes para a busca, se necessário
						],
					},
					take: limit + 1,
					cursor: cursor ? { id: cursor } : undefined,
					orderBy: {
						dateTime: "asc", // Ordena por data do evento, ajuste conforme necessário
					},
				});

				let nextCursor: typeof cursor | undefined = undefined;
				if (events.length > limit) {
					const nextItem = events.pop();
					nextCursor = nextItem?.id;
				}

				console.log("Eventos encontrados:", events.length); // Log para depuração

				return {
					events,
					nextCursor,
				};
			}),
	}),

	// Rotas de Usuário
	user: t.router({
		getById: publicProcedure
			.input(z.object({ id: z.string() }))
			.query(async ({ input }) => {
				return await prisma.user.findUnique({ where: { id: input.id } });
			}),
		create: publicProcedure
			.input(UserSchema.omit({ id: true, createdAt: true, updatedAt: true }))
			.mutation(async ({ input }) => {
				return await prisma.user.create({ data: input });
			}),
		update: publicProcedure
			.input(UserSchema.partial().extend({ id: z.string() }))
			.mutation(async ({ input }) => {
				const { id, ...data } = input;
				return await prisma.user.update({ where: { id }, data });
			}),
		delete: publicProcedure
			.input(z.object({ id: z.string() }))
			.mutation(async ({ input }) => {
				return await prisma.user.delete({ where: { id: input.id } });
			}),
	}),

	// Rotas de Empresa
	company: t.router({
		getById: publicProcedure
			.input(z.object({ id: z.string() }))
			.query(async ({ input }) => {
				console.log("Iniciando busca da company com ID:", input.id);

				try {
					const company = await prisma.company.findUnique({
						where: { id: input.id },
						include: {
							address: {
								include: {
									city: true,
								},
							},
							courts: {
								select: {
									id: true,
									name: true,
									type: true,
									description: true,
									imageUrl: true,
									createdAt: true,
									companyId: true,
								},
								orderBy: {
									name: "asc",
								},
							},
						},
					});

					console.log("Resultado da busca:", {
						addressFound: company?.address,
					});

					if (!company) {
						throw new Error(`Company não encontrada com ID: ${input.id}`);
					}

					return company;
				} catch (error) {
					console.error("Erro ao buscar company:", error);
					throw error;
				}
			}),
		create: publicProcedure.input(companyInput).mutation(async ({ input }) => {
			const company = await prisma.company.create({
				data: input,
			});
			return company;
		}),
		getAll: publicProcedure
			.input(
				z
					.object({
						limit: z.number().min(1).max(100).optional().default(10),
						cursor: z.string().optional(),
					})
					.optional(),
			)
			.query(async ({ input }) => {
				const limit = input?.limit ?? 10;
				const cursor = input?.cursor;

				const companies = await prisma.company.findMany({
					take: limit + 1,
					cursor: cursor ? { id: cursor } : undefined,
					orderBy: {
						name: "asc",
					},
				});

				let nextCursor: typeof cursor | undefined = undefined;
				if (companies.length > limit) {
					const nextItem = companies.pop();
					nextCursor = nextItem?.id;
				}

				return {
					companies,
					nextCursor,
				};
			}),
		update: publicProcedure
			.input(
				z.object({
					id: z.string(),
					data: companyInput.partial(),
				}),
			)
			.mutation(async ({ input }) => {
				const { id, data } = input;
				const updatedCompany = await prisma.company.update({
					where: { id },
					data,
				});
				return updatedCompany;
			}),
		delete: publicProcedure.input(z.string()).mutation(async ({ input }) => {
			await prisma.company.delete({
				where: { id: input },
			});
			return { success: true };
		}),
		search: publicProcedure
			.input(
				z.object({
					query: z.string(),
					limit: z.number().min(1).max(100).optional().default(10),
					cursor: z.string().optional(),
				}),
			)
			.query(async ({ input }) => {
				const { query, limit, cursor } = input;
				console.log("Recebida busca com query:", query);

				const companies = await prisma.company.findMany({
					where: {
						name: {
							contains: query,
							mode: "insensitive",
						},
					},
					take: limit + 1,
					cursor: cursor ? { id: cursor } : undefined,
					orderBy: {
						name: "asc",
					},
				});

				let nextCursor: typeof cursor | undefined = undefined;
				if (companies.length > limit) {
					const nextItem = companies.pop();
					nextCursor = nextItem?.id;
				}

				console.log("Empresas encontradas:", companies.length); // Log para depuração

				return {
					companies,
					nextCursor,
				};
			}),
	}),

	// Rotas de Quadra
	court: t.router({
		getById: publicProcedure
			.input(z.object({ id: z.string() }))
			.query(async ({ input }) => {
				return await prisma.court.findUnique({ where: { id: input.id } });
			}),
		create: publicProcedure
			.input(CourtSchema.omit({ id: true, createdAt: true }))
			.mutation(async ({ input }) => {
				return await prisma.court.create({ data: input });
			}),
		update: publicProcedure
			.input(CourtSchema.partial().extend({ id: z.string() }))
			.mutation(async ({ input }) => {
				const { id, ...data } = input;
				return await prisma.court.update({ where: { id }, data });
			}),
		delete: publicProcedure
			.input(z.object({ id: z.string() }))
			.mutation(async ({ input }) => {
				return await prisma.court.delete({ where: { id: input.id } });
			}),
	}),

	// Rotas de Perfil
	profile: t.router({
		getById: publicProcedure
			.input(z.object({ id: z.string() }))
			.query(async ({ input }) => {
				return await prisma.profile.findUnique({ where: { id: input.id } });
			}),
		create: publicProcedure
			.input(ProfileSchema.omit({ id: true }))
			.mutation(async ({ input }) => {
				return await prisma.profile.create({ data: input });
			}),
		update: publicProcedure
			.input(ProfileSchema.partial().extend({ id: z.string() }))
			.mutation(async ({ input }) => {
				const { id, ...data } = input;
				return await prisma.profile.update({ where: { id }, data });
			}),
		delete: publicProcedure
			.input(z.object({ id: z.string() }))
			.mutation(async ({ input }) => {
				return await prisma.profile.delete({ where: { id: input.id } });
			}),
	}),

	// Rotas de Reserva
	booking: t.router({
		getById: publicProcedure
			.input(z.object({ id: z.string() }))
			.query(async ({ input }) => {
				return await prisma.booking.findUnique({ where: { id: input.id } });
			}),
		create: publicProcedure
			.input(BookingSchema.omit({ id: true, createdAt: true }))
			.mutation(async ({ input }) => {
				return await prisma.booking.create({ data: input });
			}),
		update: publicProcedure
			.input(BookingSchema.partial().extend({ id: z.string() }))
			.mutation(async ({ input }) => {
				const { id, ...data } = input;
				return await prisma.booking.update({ where: { id }, data });
			}),
		delete: publicProcedure
			.input(z.object({ id: z.string() }))
			.mutation(async ({ input }) => {
				return await prisma.booking.delete({ where: { id: input.id } });
			}),
	}),

	// Rotas de Notificação
	notification: t.router({
		getById: publicProcedure
			.input(z.object({ id: z.string() }))
			.query(async ({ input }) => {
				return await prisma.notification.findUnique({
					where: { id: input.id },
				});
			}),
		create: publicProcedure
			.input(NotificationSchema.omit({ id: true, createdAt: true }))
			.mutation(async ({ input }) => {
				return await prisma.notification.create({ data: input });
			}),
		update: publicProcedure
			.input(NotificationSchema.partial().extend({ id: z.string() }))
			.mutation(async ({ input }) => {
				const { id, ...data } = input;
				return await prisma.notification.update({ where: { id }, data });
			}),
		delete: publicProcedure
			.input(z.object({ id: z.string() }))
			.mutation(async ({ input }) => {
				return await prisma.notification.delete({ where: { id: input.id } });
			}),
		getAll: publicProcedure
			.input(z.object({ id: z.string() }))
			.query(async ({ input }) => {
				return await prisma.notification.findMany({
					//@ts-ignore
					where: { userId: input.id },
					orderBy: {
						createdAt: "desc",
					},
				});
			}),
	}),

	auth: authRouter,
});

const server = createHTTPServer({
	router: appRouter,
	createContext: () => ({}),
});

server.listen(3000, () => {
	console.log("Server running at http://localhost:3000");
	console.log("Available routers:", Object.keys(appRouter._def.procedures));
	console.log("Auth procedures:", Object.keys(authRouter._def.procedures));
});

export type AppRouter = typeof appRouter;
