import { PrismaClient } from "@prisma/client";
import { initTRPC } from "@trpc/server";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
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

const appRouter = t.router({
	// Rotas de Evento
	event: t.router({
		getById: publicProcedure
			.input(z.object({ id: z.string() }))
			.query(async ({ input }) => {
				return await prisma.event.findUnique({ where: { id: input.id } });
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
				return await prisma.company.findUnique({ where: { id: input.id } });
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
						createdAt: 'desc',
					},
				});
		}),
	}),
});

const server = createHTTPServer({
	router: appRouter,
});

server.listen(3000);

console.log("Server is running on http://localhost:3000");

export type AppRouter = typeof appRouter;
