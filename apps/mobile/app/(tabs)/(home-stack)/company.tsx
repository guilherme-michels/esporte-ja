import { trpc } from "@/api";
import CompanyPricesModal from "@/components/modal/company-prices-modal";
import { SportTypeBadge } from "@/components/ui/SportTypeBadge";
import { type Company, type Court, SportTypeSchema } from "@/schemas";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef, useState, useMemo } from "react";
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

const PAGE_WIDTH = Dimensions.get("window").width;

export default function CompanyScreen() {
	const router = useRouter();
	const { id } = useLocalSearchParams<{ id: string }>();
	const [imageLoading, setImageLoading] = useState(true);

	const {
		data: company,
		isLoading,
		error,
	} = trpc.company.getById.useQuery(
		{ id: id ?? "" },
		{
			enabled: !!id,
			retry: false,
		},
	);

	const sportTypes = SportTypeSchema.options as string[];
	const [selectedSportType, setSelectedSportType] = useState<string | null>(
		null,
	);
	const [courtSelected, setCourtSelected] = useState<string>(
		company?.courts?.[0]?.id ?? "",
	);
	const progress = useSharedValue<number>(0);
	const ref = useRef<ICarouselInstance>(null);
	const [isPricesModalVisible, setIsPricesModalVisible] = useState(false);

	// Função para filtrar as quadras baseado no tipo de esporte selecionado
	const filteredCourts = useMemo(() => {
		if (!company?.courts) return [];
		if (!selectedSportType) return company.courts;

		return company.courts.filter(
			(court: { type: string }) => court.type === selectedSportType,
		);
	}, [company?.courts, selectedSportType]);

	if (isLoading) {
		return (
			<SafeAreaView className="flex-1 justify-center items-center">
				<ActivityIndicator size="large" color="#3b82f6" />
			</SafeAreaView>
		);
	}

	if (error) {
		return (
			<SafeAreaView className="flex-1 p-4 justify-center items-center">
				<Text className="text-lg text-red-500">
					Erro ao carregar empresa: {error.message}
				</Text>
			</SafeAreaView>
		);
	}

	if (!company) {
		return (
			<SafeAreaView className="flex-1 p-4 justify-center items-center">
				<Text className="text-lg">Empresa não encontrada</Text>
			</SafeAreaView>
		);
	}

	const prices = [
		{ sport: "Futebol", normalPrice: 100, peakPrice: 150 },
		{ sport: "Tênis", normalPrice: 80, peakPrice: 120 },
		{ sport: "Basquete", normalPrice: 90, peakPrice: 130 },
	];

	const fullAddress = company.address
		? `${company.address.street}${company.address.number ? `, ${company.address.number}` : ""}`
		: "";

	const cityState = company.address
		? `${company.address.city.name}, ${company.address.city.state}`
		: "";

	console.log("Número de quadras:", company?.courts?.length ?? 0);
	console.log("Dados das quadras:", company?.courts);

	return (
		<SafeAreaView className="flex-1">
			<ScrollView className="bg-white h-full">
				<View className="p-4">
					<View className="mb-2 flex flex-row gap-1 w-full items-center justify-center">
						<Ionicons name="location-outline" size={20} color="#3b82f6" />
						<Text className="text-zinc-600 text-sm">{fullAddress}</Text>
						{cityState && (
							<Text className="text-zinc-600 text-sm">- {cityState}</Text>
						)}
					</View>
					<View className="w-full h-[200px] relative">
						{imageLoading && (
							<View className="absolute inset-0 flex items-center justify-center bg-gray-200">
								<ActivityIndicator size="large" color="#3b82f6" />
							</View>
						)}
						<Image
							source={{
								uri: company.logoImg || undefined,
							}}
							className="object-cover w-full h-full"
							alt="company-logo"
							onLoadStart={() => setImageLoading(true)}
							onLoadEnd={() => setImageLoading(false)}
							resizeMode="cover"
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

					{filteredCourts.length > 0 ? (
						filteredCourts.length === 1 ? (
							// Renderiza uma única quadra sem carousel
							<View className="w-[90%] mt-4">
								<View className="rounded-lg overflow-hidden shadow-lg">
									<ImageBackground
										source={{
											uri:
												filteredCourts[0].imageUrl ||
												"https://via.placeholder.com/400x300",
										}}
										style={{ width: "100%", height: PAGE_WIDTH * 0.6 }}
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
												{filteredCourts[0].name}
											</Text>
											<Text className="text-white text-sm mb-4">
												{filteredCourts[0].description}
											</Text>

											<TouchableOpacity
												onPress={() =>
													router.push(
														`/(calendar-stack)/booking?id=${filteredCourts[0].id}`,
													)
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
							</View>
						) : (
							<Carousel
								ref={ref}
								loop
								width={PAGE_WIDTH}
								height={PAGE_WIDTH * 0.6}
								data={filteredCourts}
								autoPlay={false}
								mode="parallax"
								modeConfig={{
									parallaxScrollingScale: 0.9,
									parallaxScrollingOffset: 50,
								}}
								renderItem={({ item: court }: { item: Court }) => {
									console.log("Renderizando quadra:", court);
									return (
										<View className="rounded-lg overflow-hidden shadow-lg">
											<ImageBackground
												source={{
													uri:
														court.imageUrl ||
														"https://via.placeholder.com/400x300",
												}}
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
														{court.name}
													</Text>
													<Text className="text-white text-sm mb-4">
														{court.description}
													</Text>

													<TouchableOpacity
														onPress={() =>
															router.push(
																`/(calendar-stack)/booking?id=${court.id}`,
															)
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
									);
								}}
							/>
						)
					) : (
						<View className="mt-4 p-4">
							<Text className="text-zinc-500 text-center">
								{selectedSportType
									? `Nenhuma quadra disponível para ${selectedSportType.toLowerCase()}`
									: "Nenhuma quadra disponível"}
							</Text>
						</View>
					)}
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
