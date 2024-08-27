import {
	PrismaClient,
	SportType,
	EventType,
	NotificationType,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	// Criar uma cidade
	const city = await prisma.city.create({
		data: {
			name: "São Paulo",
			state: "SP",
			country: "Brasil",
		},
	});

	// Criar um endereço
	const address = await prisma.address.create({
		data: {
			street: "Avenida Paulista",
			number: "1000",
			district: "Bela Vista",
			city: "São Paulo",
			state: "SP",
			country: "Brasil",
			postalCode: "01310-100",
		},
	});

	// Criar um usuário
	const user = await prisma.user.create({
		data: {
			name: "João Silva",
			email: "joao@example.com",
			passwordHash: "dsadasddsa",
			avatarUrl: "https://example.com/avatar.jpg",
		},
	});

	// Criar um perfil para o usuário
	const profile = await prisma.profile.create({
		data: {
			userId: user.id,
			bio: "Entusiasta de esportes",
			level: 3,
			matchesPlayed: 10,
			wins: 7,
			losses: 3,
		},
	});

	// Criar uma empresa
	const company = await prisma.company.create({
		data: {
			name: "Esporte Já Ltda",
			slug: "esporte-ja",
			domain: "esporteja.com",
			logoImg: "https://example.com/logo.png",
			ownerId: user.id,
			cityId: city.id,
			addressId: address.id,
			admins: {
				connect: { id: user.id },
			},
		},
	});

	// Criar uma quadra
	const court = await prisma.court.create({
		data: {
			name: "Quadra Principal",
			type: SportType.FOOTBALL,
			description: "Quadra de futebol society",
			companyId: company.id,
		},
	});

	// Criar um evento
	const event = await prisma.event.create({
		data: {
			title: "Torneio de Futebol",
			description: "Torneio anual de futebol society",
			type: EventType.TOURNAMENT,
			date: new Date(),
			companyId: company.id,
			dateTime: new Date(),
			capacity: 20,
			registeredCount: 0,
		},
	});

	// Criar uma participação no evento
	await prisma.profileEventParticipation.create({
		data: {
			profileId: profile.id,
			eventId: event.id,
		},
	});

	// Criar uma reserva
	const booking = await prisma.booking.create({
		data: {
			dateTime: new Date(),
			price: 100.0,
			userId: user.id,
			courtId: court.id,
		},
	});

	// Criar uma notificação
	await prisma.notification.create({
		data: {
			type: NotificationType.INVITE,
			message: "Você foi convidado para um jogo!",
			userId: user.id,
		},
	});

	// Criar um histórico
	await prisma.history.create({
		data: {
			result: "Vitória",
			userId: user.id,
			bookingId: booking.id,
			eventId: event.id,
		},
	});

	// Criar um troféu
	await prisma.trophy.create({
		data: {
			name: "Campeão do Torneio",
			description: "Vencedor do torneio anual",
			date: new Date(),
			profileId: profile.id,
		},
	});

	console.log("Seed concluído com sucesso!");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
