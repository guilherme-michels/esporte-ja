import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, View } from "react-native";

import { trpc } from "@/api";
import LocalityOptionsModal from "@/components/modal/locality-options-modal";
import { ChangeLocality } from "@/components/ui/ChangeLocality";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { EventCard } from "@/components/ui/EventCard";
import { MyCity } from "@/components/ui/MyCity";
import { ResultSeeMore } from "@/components/ui/ResultSeeMore";
import { SportTypeBadge } from "@/components/ui/SportTypeBadge";
import { SportTypeSchema } from "@/schemas";

export default function HomeScreen() {
	const [location, setLocation] = useState("Lajeado, RS");
	const [isLocalityOptionsModalOpened, setIsLocalityOptionsModalOpened] =
		useState(false);
	const router = useRouter();

	const sportTypes = SportTypeSchema.options as string[];
	const [selectedSportType, setSelectedSportType] = useState<string | null>(
		null,
	);

	const { data: companiesData, isLoading: isLoadingCompanies } =
		trpc.company.getAll.useQuery({
			cursor: "",
			limit: 10,
		});

	const { data: eventsData, isLoading: isLoadingEvents } =
		trpc.event.getAll.useQuery({
			cursor: "",
			limit: 2,
		});

	if (isLoadingCompanies || isLoadingEvents) {
		return (
			<SafeAreaView className="flex-1 justify-center items-center bg-white">
				<ActivityIndicator size="large" color="#0000ff" />
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView className="flex-1">
			<View className="size-full bg-white">
				<FlatList
					data={companiesData?.companies}
					keyExtractor={(company) => company.id}
					ListHeaderComponent={
						<View className="p-4">
							<ChangeLocality
								location={location}
								onPress={() => setIsLocalityOptionsModalOpened(true)}
							/>

							<View className="mt-6">
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
							</View>

							<View className="mt-4">
								<ResultSeeMore
									label="Resultados encontrados"
									onPress={() =>
										router.push("/(tabs)/(home-stack)/search-companies")
									}
								/>

								<FlatList
									data={companiesData?.companies}
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
						</View>
					}
					ListFooterComponent={
						<View className="px-4 -mt-4">
							<MyCity />

							<View className="mt-12">
								<ResultSeeMore
									label="Próximos eventos em LAJEADO"
									onPress={() =>
										router.push("/(tabs)/(home-stack)/search-events")
									}
								/>

								<FlatList
									data={eventsData?.events}
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
									showsVerticalScrollIndicator={false}
								/>
							</View>

							<LocalityOptionsModal
								onClose={() => setIsLocalityOptionsModalOpened(false)}
								opened={isLocalityOptionsModalOpened}
							/>
						</View>
					}
					renderItem={({ item }) => null}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</SafeAreaView>
	);
}
