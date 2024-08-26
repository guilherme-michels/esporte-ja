import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
	FlatList,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

import { CompanyCard } from "@/components/ui/CompanyCard";
import { EventCard } from "@/components/ui/EventCard";
import { MyCity } from "@/components/ui/MyCity";
import { SportTypeBadge } from "@/components/ui/SportTypeBadge";
import { type Company, type Event, SportTypeSchema } from "@/schemas";
import LocalityOptionsModal from "@/components/modal/locality-options-modal";

const companies: Company[] = [
	{
		id: "1",
		name: "Senhor Padel",
		slug: "empresa-a",
		avatarUrl:
			"https://scontent.fcxj13-1.fna.fbcdn.net/v/t39.30808-6/271790296_477827067023970_4230423309320112495_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=x__kByBpr1YQ7kNvgF8qM9u&_nc_ht=scontent.fcxj13-1.fna&oh=00_AYDAHG1FaGMF9xHEPptY5waPZfYbgIhBkwBsNbYJKS_AyA&oe=66CD72E4",
		cityId: "1",
		createdAt: new Date(),
		updatedAt: new Date(),
		domain: "empresa-a.com",
		ownerId: "1",
	},

	{
		id: "2",
		name: "Arena 08",
		slug: "empresa-a",
		avatarUrl:
			"https://scontent.fcxj13-1.fna.fbcdn.net/v/t39.30808-6/275041833_112047398079581_4432519264775942829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=o9iqd5D8I0gQ7kNvgGt3bp2&_nc_ht=scontent.fcxj13-1.fna&oh=00_AYAjHSyWo5lPXz4H0V4J283Q7eewNhwtBLnHGYb8JA-y-A&oe=66CD87D2",
		cityId: "1",
		createdAt: new Date(),
		updatedAt: new Date(),
		domain: "empresa-a.com",
		ownerId: "1",
	},
];

const events: Event[] = [
	{
		companyId: "1",
		createdAt: new Date(),
		date: new Date(),
		id: "1",
		title: "Torneio de Beach Tennis - Dinápoli",
		dateTime: new Date(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
		type: "TOURNAMENT",
	},
	{
		companyId: "2",
		createdAt: new Date(),
		date: new Date(),
		id: "2",
		title: "Evento A",
		dateTime: new Date(),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
		type: "TOURNAMENT",
	},
];

export default function HomeScreen() {
	const [location, setLocation] = useState("Lajeado, RS");
	const [isLocalityOptionsModalOpened, setIsLocalityOptionsModalOpened] =
		useState(false);
	const router = useRouter();

	const sportTypes = SportTypeSchema.options as string[];
	const [selectedSportType, setSelectedSportType] = useState<string | null>(
		null,
	);

	return (
		<SafeAreaView className="flex-1">
			<View className="size-full bg-white">
				<View className="p-4 flex-row justify-between w-full bg-blue-500">
					<View className="flex-row justify-between items-center gap-1">
						<Ionicons
							name={"navigate-circle-outline"}
							size={16}
							color={"#fff"}
						/>
						<Text className="text-white text-xl">{location}</Text>
					</View>

					<TouchableOpacity
						style={{
							display: "flex",
							flexDirection: "row",
							gap: 2,
							justifyContent: "center",
							alignItems: "center",
						}}
						onPress={() => setIsLocalityOptionsModalOpened(true)}
					>
						<Text className="text-sm font-bold text-white">ALTERAR</Text>
						<Ionicons name={"arrow-forward-outline"} size={16} color={"#fff"} />
					</TouchableOpacity>
				</View>

				<ScrollView className="h-full px-4 mt-6">
					<FlatList
						data={sportTypes}
						keyExtractor={(sportType) => sportType}
						renderItem={({ item: sportType }) => (
							<SportTypeBadge
								sportType={sportType}
								selected={selectedSportType === sportType}
								onPress={() =>
									setSelectedSportType(
										selectedSportType === sportType ? null : sportType,
									)
								}
							/>
						)}
						contentContainerStyle={{ gap: 16 }}
						horizontal
						showsHorizontalScrollIndicator={false}
					/>

					<View className="mt-4">
						<View className="flex-row justify-between w-full mb-2">
							<View className="flex-row justify-between items-center gap-1">
								<Text className="text-base font-extralight">
									Resultados encontrados
								</Text>
							</View>

							<TouchableOpacity
								style={{
									display: "flex",
									flexDirection: "row",
									gap: 2,
									justifyContent: "center",
									alignItems: "center",
								}}
								onPress={() =>
									router.push("/(tabs)/(home-stack)/search-companies")
								}
							>
								<Text className="text-xs font-bold">Ver mais</Text>
								<Ionicons
									name={"arrow-forward-outline"}
									size={16}
									color={"#000"}
								/>
							</TouchableOpacity>
						</View>

						<FlatList
							data={companies}
							keyExtractor={(company) => company.id}
							renderItem={({ item: company }) => (
								<CompanyCard
									onPress={() => router.push(`/company?id=${company.id}`)}
									company={company}
								/>
							)}
							horizontal
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{ gap: 16 }}
						/>
					</View>

					<MyCity />

					<View className="mt-12">
						<View className="flex-row justify-between w-full mb-2">
							<View className="flex-row justify-between items-center gap-1">
								<Text className="text-base font-extralight">
									Próximos eventos em LAJEADO
								</Text>
							</View>

							<TouchableOpacity
								style={{
									display: "flex",
									flexDirection: "row",
									gap: 2,
									justifyContent: "center",
									alignItems: "center",
								}}
								onPress={() =>
									router.push("/(tabs)/(home-stack)/search-events")
								}
							>
								<Text className="text-xs font-bold">Ver mais</Text>
								<Ionicons
									name={"arrow-forward-outline"}
									size={16}
									color={"#000"}
								/>
							</TouchableOpacity>
						</View>

						<FlatList
							data={events.slice(0, 2)}
							keyExtractor={(event) => event.id}
							renderItem={({ item: event }) => (
								<EventCard
									onPress={() =>
										router.push({
											pathname: "/(tabs)/(home-stack)/event",
											params: { id: event.id },
										})
									}
									event={event}
								/>
							)}
						/>
					</View>

					<LocalityOptionsModal
						onClose={() => setIsLocalityOptionsModalOpened(false)}
						opened={isLocalityOptionsModalOpened}
					/>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
