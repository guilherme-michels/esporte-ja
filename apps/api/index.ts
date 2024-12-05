import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";
import { initTRPC } from "@trpc/server";
import { TRPCError } from "@trpc/server";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
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
	console.log("\n=== DEBUG isAuthenticated Middleware ===");
	console.log("Headers recebidos:", ctx.req?.headers);

	const token = ctx.req?.headers.authorization?.split(" ")[1];
	console.log("Token extraído:", token?.substring(0, 20) + "...");

	if (!token) {
		console.log("❌ Token não fornecido");
		throw new TRPCError({
			code: "UNAUTHORIZED",
			message: "Token não fornecido",
		});
	}

	try {
		const decoded = jwt.verify(token, JWT_SECRET) as {
			userId: string;
			email: string;
		};
		console.log("✅ Token decodificado:", decoded);

		const user = await prisma.user.findUnique({
			where: { id: decoded.userId },
		});
		console.log("Usuário encontrado:", user ? "Sim" : "Não");

		if (!user) {
			console.log("❌ Usuário não encontrado no banco");
			throw new TRPCError({
				code: "UNAUTHORIZED",
				message: "Usuário não encontrado",
			});
		}

		ctx.user = {
			userId: decoded.userId,
			email: decoded.email,
		};
		console.log("✅ Contexto atualizado com usuário:", ctx.user);

		return next();
	} catch (error) {
		console.error("❌ Erro na autenticação:", error);
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
				include: {
					companies: true,
				},
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

			const userData = {
				id: user.id,
				name: user.name,
				email: user.email,
				ownedCompanies: [],
				adminCompanies: user.companies || [],
			};

			return {
				user: userData,
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
				{
					expiresIn: "7d",
				},
			);

			return {
				user: {
					id: user.id,
					name: user.name,
					email: user.email,
					ownedCompanies: [],
					adminCompanies: [],
				},
				token,
			};
		}),
});

const bookingRouter = t.router({
	create: publicProcedure
		.input(
			z.object({
				courtId: z.string(),
				userId: z.string(),
				dateTime: z.date(),
				price: z.number(),
			}),
		)
		.mutation(async ({ input }) => {
			const { courtId, userId, dateTime, price } = input;

			// Verifica se já existe agendamento para este horário
			const existingBooking = await prisma.booking.findFirst({
				where: {
					courtId,
					dateTime,
				},
			});

			if (existingBooking) {
				throw new TRPCError({
					code: "CONFLICT",
					message: "Horário já está reservado",
				});
			}

			// Verifica disponibilidade do horário
			const dayOfWeek = dateTime.getDay();
			const time = dateTime.toLocaleTimeString("pt-BR", {
				hour: "2-digit",
				minute: "2-digit",
				hour12: false,
			});

			const availability = await prisma.availability.findFirst({
				where: {
					courtId,
					dayOfWeek,
					startTime: {
						lte: time,
					},
					endTime: {
						gte: time,
					},
				},
			});

			if (!availability) {
				throw new TRPCError({
					code: "BAD_REQUEST",
					message: "Horário indisponível",
				});
			}

			// Cria o agendamento
			const booking = await prisma.booking.create({
				data: {
					courtId,
					userId,
					dateTime,
					price,
				},
				include: {
					court: true,
					user: true,
				},
			});

			return booking;
		}),

	getAvailableSlots: publicProcedure
		.input(
			z.object({
				courtId: z.string(),
				date: z.date(),
			}),
		)
		.query(async ({ input }) => {
			const { courtId, date } = input;
			const dayOfWeek = date.getDay();

			// Busca a quadra e a empresa
			const court = await prisma.court.findUnique({
				where: { id: courtId },
				include: {
					company: {
						include: {
							openingHours: true,
						},
					},
				},
			});

			if (!court) {
				throw new TRPCError({
					code: "NOT_FOUND",
					message: "Quadra não encontrada",
				});
			}

			// Busca o horário de funcionamento do dia
			const openingHours = court.company.openingHours.find(
				(oh) => oh.dayOfWeek === dayOfWeek,
			);

			if (!openingHours) {
				return []; // Empresa fechada neste dia
			}

			// Converte horários de string para Date
			const [openHour, openMinute] = openingHours.opensAt
				.split(":")
				.map(Number);
			const [closeHour, closeMinute] = openingHours.closesAt
				.split(":")
				.map(Number);

			// Busca agendamentos existentes
			const existingBookings = await prisma.booking.findMany({
				where: {
					courtId,
					dateTime: {
						gte: new Date(date.setHours(openHour, openMinute, 0, 0)),
						lt: new Date(date.setHours(closeHour, closeMinute, 0, 0)),
					},
				},
			});

			// Gera slots de 30 em 30 minutos
			const slots = [];
			const startTime = new Date(date);
			startTime.setHours(openHour, openMinute, 0, 0);
			const endTime = new Date(date);
			endTime.setHours(closeHour, closeMinute, 0, 0);

			while (startTime < endTime) {
				const timeString = startTime.toLocaleTimeString("pt-BR", {
					hour: "2-digit",
					minute: "2-digit",
					hour12: false,
				});

				const isBooked = existingBookings.some(
					(booking) =>
						booking.dateTime.toLocaleTimeString("pt-BR", {
							hour: "2-digit",
							minute: "2-digit",
							hour12: false,
						}) === timeString,
				);

				// Verifica se está dentro do horário de pico
				const availability = await prisma.availability.findFirst({
					where: {
						courtId,
						dayOfWeek,
						startTime: {
							lte: timeString,
						},
						endTime: {
							gte: timeString,
						},
					},
				});

				if (!isBooked) {
					slots.push({
						time: timeString,
						isPeakHour: availability?.isPeakHour ?? false,
					});
				}

				startTime.setMinutes(startTime.getMinutes() + 30);
			}

			return slots;
		}),
});

// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const uploadDir = path.join(__dirname, "..", "..", "uploads");
		// Cria o diretório se não existir
		if (!fs.existsSync(uploadDir)) {
			fs.mkdirSync(uploadDir, { recursive: true });
		}
		cb(null, uploadDir);
	},
	filename: (req, file, cb) => {
		// Gera um nome único para o arquivo
		const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
		cb(null, `${uniqueSuffix}-${file.originalname}`);
	},
});

const upload = multer({
	storage,
	limits: {
		fileSize: 5 * 1024 * 1024, // 5MB
	},
	fileFilter: (req, file, cb) => {
		const allowedMimes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

		if (allowedMimes.includes(file.mimetype)) {
			cb(null, true);
		} else {
			cb(new Error("Tipo de arquivo inválido."));
		}
	},
});

// Depois, adicione-o ao router principal
const appRouter = t.router({
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
		updateOpeningHours: publicProcedure
			.input(
				z.object({
					companyId: z.string(),
					openingHours: z.array(
						z.object({
							dayOfWeek: z.number().min(0).max(6),
							opensAt: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
							closesAt: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
						}),
					),
				}),
			)
			.mutation(async ({ input }) => {
				const { companyId, openingHours } = input;

				// Primeiro, remove todos os horários existentes
				await prisma.openingHours.deleteMany({
					where: { companyId },
				});

				// Depois, cria os novos horários
				const createdHours = await Promise.all(
					openingHours.map((hour) =>
						prisma.openingHours.create({
							data: {
								companyId,
								dayOfWeek: hour.dayOfWeek,
								opensAt: hour.opensAt,
								closesAt: hour.closesAt,
							},
						}),
					),
				);

				return createdHours;
			}),
		getOpeningHours: publicProcedure
			.input(z.object({ companyId: z.string() }))
			.query(async ({ input }) => {
				return await prisma.openingHours.findMany({
					where: { companyId: input.companyId },
					orderBy: { dayOfWeek: "asc" },
				});
			}),
		getUserCompanies: protectedProcedure.query(async ({ ctx }) => {
			console.log("\n=== DEBUG getUserCompanies ===");
			console.log("ID do usuário:", ctx.user.userId);

			try {
				// Busca empresas onde o usuário é owner
				const companiesAsOwner = await prisma.company.findMany({
					where: { ownerId: ctx.user.userId },
					include: {
						address: true,
						owner: true,
					},
				});
				console.log("📊 Empresas como owner:", companiesAsOwner);

				// Busca empresas onde o usuário é admin
				const companiesAsAdmin = await prisma.company.findMany({
					where: {
						admins: {
							some: { id: ctx.user.userId },
						},
					},
					include: {
						address: true,
						owner: true,
					},
				});
				console.log("📊 Empresas como admin:", companiesAsAdmin);

				const allCompanies = [...companiesAsOwner, ...companiesAsAdmin];
				console.log("📊 Total de empresas encontradas:", allCompanies.length);

				return allCompanies;
			} catch (error) {
				console.error("\n=== ❌ ERRO DETALHADO getUserCompanies ===");
				console.error("Erro completo:", error);
				throw new TRPCError({
					code: "INTERNAL_SERVER_ERROR",
					message: "Erro ao buscar empresas do usuário",
					cause: error,
				});
			}
		}),
		addAdmin: protectedProcedure
			.input(
				z.object({
					companyId: z.string(),

					email: z.string().email(),
				}),
			)
			.mutation(async ({ ctx, input }) => {
				const company = await prisma.company.findUnique({
					where: { id: input.companyId },
				});

				if (!company || company.ownerId !== ctx.user.userId) {
					throw new TRPCError({
						code: "FORBIDDEN",
						message: "Apenas o proprietário pode adicionar administradores",
					});
				}

				// Busca o usuário pelo email
				const userToAdd = await prisma.user.findUnique({
					where: { email: input.email },
				});

				if (!userToAdd) {
					throw new TRPCError({
						code: "NOT_FOUND",
						message: "Usuário não encontrado com este email",
					});
				}

				// Verifica se já é admin
				const isAlreadyAdmin = await prisma.company.findFirst({
					where: {
						id: input.companyId,
						admins: {
							some: { id: userToAdd.id },
						},
					},
				});

				if (isAlreadyAdmin) {
					throw new TRPCError({
						code: "CONFLICT",
						message: "Este usuário já é administrador",
					});
				}

				return await prisma.company.update({
					where: { id: input.companyId },
					data: {
						admins: {
							connect: { id: userToAdd.id },
						},
					},
					include: {
						admins: true,
					},
				});
			}),
		removeAdmin: protectedProcedure
			.input(
				z.object({
					companyId: z.string(),
					email: z.string().email(),
				}),
			)
			.mutation(async ({ ctx, input }) => {
				const company = await prisma.company.findUnique({
					where: { id: input.companyId },
				});

				if (!company || company.ownerId !== ctx.user.userId) {
					throw new TRPCError({
						code: "FORBIDDEN",
						message: "Apenas o proprietário pode remover administradores",
					});
				}

				// Busca o usu��rio pelo email
				const userToRemove = await prisma.user.findUnique({
					where: { email: input.email },
				});

				if (!userToRemove) {
					throw new TRPCError({
						code: "NOT_FOUND",
						message: "Usuário não encontrado com este email",
					});
				}

				return await prisma.company.update({
					where: { id: input.companyId },
					data: {
						admins: {
							disconnect: { id: userToRemove.id },
						},
					},
					include: {
						admins: true,
					},
				});
			}),
		update: protectedProcedure
			.input(
				z.object({
					id: z.string(),
					name: z.string().optional(),
					address: z.string().optional(),
					phone: z.string().optional(),
					description: z.string().optional(),
					logoImg: z.string().optional(),
				}),
			)
			.mutation(async ({ ctx, input }) => {
				const { id, ...updateData } = input;

				// Verifica se o usuário tem permissão
				const company = await prisma.company.findUnique({
					where: { id },
					include: { admins: true },
				});

				if (!company) {
					throw new TRPCError({
						code: "NOT_FOUND",
						message: "Empresa não encontrada",
					});
				}

				if (
					company.ownerId !== ctx.user.userId &&
					!company.admins.some((admin) => admin.id === ctx.user.userId)
				) {
					throw new TRPCError({
						code: "FORBIDDEN",
						message: "Sem permissão para editar esta empresa",
					});
				}

				return await prisma.company.update({
					where: { id },
					data: updateData,
				});
			}),
		getCourts: protectedProcedure
			.input(
				z.object({
					companyId: z.string(),
				}),
			)
			.query(async ({ ctx, input }) => {
				const { companyId } = input;

				console.log("Buscando quadras para companyId:", companyId);

				const courts = await prisma.court.findMany({
					where: {
						companyId: companyId,
					},
					orderBy: {
						createdAt: "desc",
					},
				});

				console.log("Quadras encontradas:", courts);
				return courts;
			}),
		createCourt: protectedProcedure
			.input(
				z.object({
					companyId: z.string(),
					name: z.string(),
					description: z.string().optional(),
					type: z.string(),
				}),
			)
			.mutation(async ({ ctx, input }) => {
				const { companyId, ...courtData } = input;

				// Verifica permissões
				const company = await prisma.company.findUnique({
					where: { id: companyId },
					include: { admins: true },
				});

				if (
					!company ||
					(company.ownerId !== ctx.user.userId &&
						!company.admins.some((admin) => admin.id === ctx.user.userId))
				) {
					throw new TRPCError({
						code: "FORBIDDEN",
						message: "Sem permissão para adicionar quadras",
					});
				}

				return await prisma.court.create({
					data: {
						...courtData,
						companyId,
					},
				});
			}),
		updateCourt: protectedProcedure
			.input(
				z.object({
					id: z.string(),
					name: z.string().optional(),
					description: z.string().optional(),
					type: z.string().optional(),
				}),
			)
			.mutation(async ({ ctx, input }) => {
				const { id, ...updateData } = input;

				const court = await prisma.court.findUnique({
					where: { id },
					include: { company: { include: { admins: true } } },
				});

				if (!court) {
					throw new TRPCError({
						code: "NOT_FOUND",
						message: "Quadra não encontrada",
					});
				}

				if (
					court.company.ownerId !== ctx.user.userId &&
					!court.company.admins.some((admin) => admin.id === ctx.user.userId)
				) {
					throw new TRPCError({
						code: "FORBIDDEN",
						message: "Sem permissão para editar esta quadra",
					});
				}

				return await prisma.court.update({
					where: { id },
					data: updateData,
				});
			}),
		uploadImage: protectedProcedure
			.input(
				z.object({
					courtId: z.string(),
					file: z.any(),
				}),
			)
			.mutation(async ({ ctx, input }) => {
				try {
					const { courtId, file } = input;

					// Configuração do multer para upload
					const storage = multer.diskStorage({
						destination: "./uploads/",
						filename: (req, file, cb) => {
							const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
							cb(null, `${uniqueSuffix}-${file.originalname}`);
						},
					});

					const upload = multer({ storage });

					// Processar o upload
					const result = await new Promise((resolve, reject) => {
						upload.single("file")(
							{ body: { file } } as any,
							{} as any,
							(err: any) => {
								if (err) reject(err);
								resolve(true);
							},
						);
					});

					const imageUrl = `/uploads/${file.name}`;

					const updatedCourt = await prisma.court.update({
						where: { id: courtId },
						data: { imageUrl },
					});

					return { imageUrl };
				} catch (error) {
					console.error("Erro no upload:", error);
					throw new TRPCError({
						code: "INTERNAL_SERVER_ERROR",
						message: "Erro ao fazer upload da imagem",
						cause: error,
					});
				}
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
	booking: bookingRouter,

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
	createContext: (opts) => {
		console.log("\n=== DEBUG createContext ===");
		console.log("Headers recebidos:", opts.req.headers);
		return { req: opts.req };
	},
});

server.listen(3000, () => {
	console.log("🚀 Servidor TRPC rodando na porta 3000");
});

export type AppRouter = typeof appRouter;
