import CompanyPricesModal from "@/components/modal/company-prices-modal";
import { SportTypeBadge } from "@/components/ui/SportTypeBadge";
import { type Company, SportTypeSchema } from "@/schemas";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
	ActivityIndicator,
	Dimensions,
	FlatList,
	Image,
	ImageBackground,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
	type ICarouselInstance,
} from "react-native-reanimated-carousel";

const company: Company = {
	id: "1",
	name: "Arena 08",
	slug: "empresa-a",
	logoImg:
		"https://scontent.fcxj13-1.fna.fbcdn.net/v/t39.30808-6/275041833_112047398079581_4432519264775942829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=o9iqd5D8I0gQ7kNvgGt3bp2&_nc_ht=scontent.fcxj13-1.fna&oh=00_AYAjHSyWo5lPXz4H0V4J283Q7eewNhwtBLnHGYb8JA-y-A&oe=66CD87D2",
	cityId: "1",
	createdAt: new Date(),
	updatedAt: new Date(),
	domain: "empresa-a.com",
	ownerId: "1",
	addressId: "1",
};

const courts = [
	{
		id: "1",
		name: "Quadra 1",
		imageUrl:
			"https://static.sportit.com.br/public/sportit/imagens/produtos/quadra-de-beach-tennis-sport-it-m2-2946.jpg",
	},
	{
		id: "2",
		name: "Quadra 2",
		imageUrl:
			"https://static.sportit.com.br/public/sportit/imagens/produtos/quadra-de-beach-tennis-sport-it-m2-2946.jpg",
	},
	{
		id: "3",
		name: "Quadra 3",
		imageUrl:
			"https://static.sportit.com.br/public/sportit/imagens/produtos/quadra-de-beach-tennis-sport-it-m2-2946.jpg",
	},
];

const PAGE_WIDTH = Dimensions.get("window").width;

export default function CompanyScreen() {
	const router = useRouter();
	const width = Dimensions.get("window").width;
	const { id } = useLocalSearchParams<{ id: string }>();
	const sportTypes = SportTypeSchema.options as string[];
	const [selectedSportType, setSelectedSportType] = useState<string | null>(
		null,
	);
	const [courtSelected, setCourtSelected] = useState(courts[0].id);

	const progress = useSharedValue<number>(0);
	const ref = useRef<ICarouselInstance>(null);

	const [isPricesModalVisible, setIsPricesModalVisible] = useState(false);
	const { showPricesModal } = useLocalSearchParams();

	useEffect(() => {
		if (showPricesModal) {
			setIsPricesModalVisible(true);
		}
	}, [showPricesModal]);

	const prices = [
		{ sport: "Futebol", normalPrice: 100, peakPrice: 150 },
		{ sport: "Tênis", normalPrice: 80, peakPrice: 120 },
		{ sport: "Basquete", normalPrice: 90, peakPrice: 130 },
	];

	if (!company) {
		return (
			<SafeAreaView className="flex-1 p-4 justify-center items-center">
				<Text className="text-lg">Empresa não encontrada</Text>
			</SafeAreaView>
		);
	}

	const [imageLoading, setImageLoading] = useState(true);

	return (
		<SafeAreaView className="flex-1">
			<ScrollView className="bg-white h-full">
				<View className="p-4">
					<View className="mb-2 flex flex-row gap-1 w-full items-center justify-center">
						<Ionicons name="location-outline" size={20} color="#3b82f6" />
						<Text className="text-zinc-600 text-sm">
							Rua Ondina de Oliveira Pereira, 421
						</Text>

						<Text className="text-zinc-600 text-sm">- Lajeado, RS</Text>
					</View>
					<View className="w-full h-[200px] relative">
						<Image
							source={{
								uri: "https://static.wixstatic.com/media/95e081_f58d74291f504f80b127a356b576d9b5~mv2.jpg/v1/fill/w_1920,h_1280,al_c/95e081_f58d74291f504f80b127a356b576d9b5~mv2.jpg",
							}}
							className={"object-cover w-full h-full"}
							alt="company-logo"
							onLoadStart={() => setImageLoading(true)}
							onLoadEnd={() => setImageLoading(false)}
						/>
					</View>
					<View className="flex-row justify-between items-center mt-4">
						<Text className="text-2xl font-bold">{company.name}</Text>
						<TouchableOpacity
							onPress={() =>
								router.push(`/(tabs)/(home-stack)/reviews?id=${company.id}`)
							}
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								gap: 4,
							}}
						>
							<Text className="text-sm text-zinc-800 font-light">
								(12 avaliações)
							</Text>
							<View className="flex-row items-center">
								<Text className="text-xl text-[#e9a20a] font-extrabold">
									4,8
								</Text>
								<Ionicons name="star" size={20} color="#e9a20a" />
							</View>
						</TouchableOpacity>
					</View>
				</View>

				<View className="border-t border-gray-200 pt-4">
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
						contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
						horizontal
						showsHorizontalScrollIndicator={false}
					/>
				</View>

				<View className="mt-6 flex items-center">
					<Text className="text-xl font-light px-4">Quadras Disponíveis</Text>
					<Carousel
						ref={ref}
						loop
						width={PAGE_WIDTH}
						height={PAGE_WIDTH * 0.6}
						data={courts}
						autoPlay={false}
						mode="parallax"
						modeConfig={{
							parallaxScrollingScale: 0.9,
							parallaxScrollingOffset: 50,
						}}
						renderItem={({ item }) => (
							<View className="rounded-lg overflow-hidden shadow-lg">
								<ImageBackground
									source={{ uri: item.imageUrl }}
									style={{ width: "100%", height: "100%" }}
									resizeMode="cover"
								>
									<LinearGradient
										colors={["rgba(0,0,0,0)", "rgba(0, 0, 0, 0.7)"]}
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											bottom: 0,
											height: "50%",
											justifyContent: "flex-end",
											padding: 16,
										}}
									>
										<Text className="text-white text-xl font-bold mb-2">
											{item.name}
										</Text>

										<TouchableOpacity
											onPress={() =>
												router.push("/(calendar-stack)/booking?id=1")
											}
											style={{
												flexDirection: "row",
												alignItems: "center",
												justifyContent: "center",
												backgroundColor: "#3b82f6",
												paddingVertical: 8,
												paddingHorizontal: 16,
												borderRadius: 8,
											}}
										>
											<Ionicons
												name="calendar-outline"
												size={20}
												color="#fff"
											/>
											<Text
												style={{
													color: "white",
													fontSize: 16,
													fontWeight: "600",
													marginLeft: 8,
												}}
											>
												Reservar quadra
											</Text>
										</TouchableOpacity>
									</LinearGradient>
								</ImageBackground>
							</View>
						)}
					/>
				</View>

				<CompanyPricesModal
					isVisible={isPricesModalVisible}
					onClose={() => setIsPricesModalVisible(false)}
					prices={prices}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
