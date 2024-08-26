import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
	Dimensions,
	FlatList,
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { SportTypeBadge } from "@/components/ui/SportTypeBadge";
import { type Company, SportTypeSchema } from "@/schemas";

const company: Company = {
	id: "1",
	name: "Arena 08",
	slug: "empresa-a",
	avatarUrl:
		"https://scontent.fcxj13-1.fna.fbcdn.net/v/t39.30808-6/275041833_112047398079581_4432519264775942829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=o9iqd5D8I0gQ7kNvgGt3bp2&_nc_ht=scontent.fcxj13-1.fna&oh=00_AYAjHSyWo5lPXz4H0V4J283Q7eewNhwtBLnHGYb8JA-y-A&oe=66CD87D2",
	cityId: "1",
	createdAt: new Date(),
	updatedAt: new Date(),
	domain: "empresa-a.com",
	ownerId: "1",
};

const courts = [
	{
		id: "1",
		name: "Quadra 1",
		imageUrl: "https://example.com/court1.jpg",
	},
	{
		id: "2",
		name: "Quadra 2",
		imageUrl: "https://example.com/court2.jpg",
	},
	{
		id: "3",
		name: "Quadra 3",
		imageUrl: "https://example.com/court3.jpg",
	},
];

export default function CompanyScreen() {
	const router = useRouter();
	const width = Dimensions.get("window").width;
	const { id } = useLocalSearchParams<{ id: string }>();
	const sportTypes = SportTypeSchema.options as string[];
	const [selectedSportType, setSelectedSportType] = useState<string | null>(
		null,
	);
	const [courtSelected, setCourtSelected] = useState(courts[0].id);

	if (!company) {
		return (
			<SafeAreaView className="flex-1 p-4 justify-center items-center">
				<Text className="text-lg">Empresa não encontrada</Text>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView className="flex-1">
			<View className="px-4 bg-white size-full">
				<ScrollView className="h-full">
					<View className="mt-4 bg-white rounded-lg shadow-md mb-4">
						<Image
							// biome-ignore lint/style/noNonNullAssertion: <explanation>
							source={{ uri: company.avatarUrl! }}
							className="w-full h-60 rounded-lg"
							resizeMode="cover"
							alt="event-image"
						/>
						<View className="flex-row justify-between items-center mt-4">
							<Text className="text-2xl font-bold mt-2">{company.name}</Text>
							<TouchableOpacity
								onPress={() =>
									router.push(`/(tabs)/(home-stack)/reviews?id=${company.id}`)
								}
								style={{
									justifyContent: "center",
									alignItems: "center",
									gap: 4,
									display: "flex",
									flexDirection: "row",
								}}
							>
								<Text className="text-sm font-extralight text-zinc-800">
									(12 avaliações)
								</Text>
								<Text className="text-xl text-[#e9a20a] font-extrabold">
									4,8
								</Text>
								<Ionicons name="star" size={20} color="#e9a20a" />
							</TouchableOpacity>
						</View>
					</View>

					<View className="border-t border-gray-200">
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
							contentContainerStyle={{ gap: 16, marginTop: 8 }}
							horizontal
							showsHorizontalScrollIndicator={false}
						/>
					</View>

					<View className="mt-6 flex items-center gap-2">
						<Text className="text-xl font-extralight">Quadras Disponíveis</Text>
						<Carousel
							loop
							width={width - 32}
							height={width / 2}
							data={courts}
							scrollAnimationDuration={1000}
							onSnapToItem={(index) => setCourtSelected(courts[index].id)}
							renderItem={({ item }) => (
								<View className="size-full">
									<View className="flex-1 justify-center items-center bg-red-800 mx-2 rounded">
										<Text style={{ textAlign: "center", fontSize: 30 }}>
											{item.name}
										</Text>
									</View>
								</View>
							)}
						/>

						<TouchableOpacity
							onPress={() => router.push("/(calendar-stack)/booking")}
							style={{
								justifyContent: "center",
								alignItems: "center",
								gap: 4,
								display: "flex",
								flexDirection: "row",
								paddingHorizontal: 16,
								backgroundColor: "#3b82f6",
								paddingVertical: 8,
								borderRadius: 8,
								marginTop: 4,
							}}
						>
							<Ionicons name="calendar-outline" size={20} color={"#fff"} />
							<Text className="text-xl font-extralight text-white">
								Reservar quadra
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
