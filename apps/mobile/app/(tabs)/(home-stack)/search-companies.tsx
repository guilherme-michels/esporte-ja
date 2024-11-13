import { trpc } from "@/api";
import { useDebounce } from "@/hooks/useDebounce";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
	FlatList,
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import type { Company } from "../../../../api/schemas";

export default function SearchCompaniesScreen() {
	const [searchQuery, setSearchQuery] = useState("");
	const debouncedQuery = useDebounce(searchQuery, 0);
	const router = useRouter();

	const {
		data: searchData,
		isLoading: isSearchLoading,
		error: searchError,
		fetchNextPage: fetchNextSearchPage,
		hasNextPage: hasNextSearchPage,
	} = trpc.company.search.useInfiniteQuery(
		{ query: debouncedQuery, limit: 10 },
		{
			getNextPageParam: (lastPage) => lastPage.nextCursor,
			enabled: debouncedQuery.length > 0,
		},
	);

	const {
		data: allCompaniesData,
		isLoading: isAllCompaniesLoading,
		error: allCompaniesError,
		fetchNextPage: fetchNextAllCompaniesPage,
		hasNextPage: hasNextAllCompaniesPage,
	} = trpc.company.getAll.useInfiniteQuery(
		{ limit: 10 },
		{
			getNextPageParam: (lastPage) => lastPage.nextCursor,
			enabled: debouncedQuery.length === 0,
		},
	);

	const companies =
		debouncedQuery.length > 0
			? (searchData?.pages.flatMap((page) => page.companies) ?? [])
			: (allCompaniesData?.pages.flatMap((page) => page.companies) ?? []);

	const isLoading = isSearchLoading || isAllCompaniesLoading;
	const error = searchError || allCompaniesError;

	const renderCompanyItem = ({ item }: { item: Company }) => (
		<TouchableOpacity
			style={{
				flex: 1,
				margin: 8,
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "flex-start",
				backgroundColor: "#3b82f6",
				padding: 12,
				borderRadius: 12,
			}}
			onPress={() => router.push(`/(tabs)/(home-stack)/company?id=${item.id}`)}
		>
			<Image
				// @ts-expect-error
				source={{ uri: item.logoImg }}
				className="w-16 h-16 rounded-full mr-4"
			/>
			<View className="flex-1">
				<Text className="text-white text-lg font-semibold">{item.name}</Text>
				<Text className="text-gray-200">{item.domain}</Text>
			</View>
			<Ionicons name="chevron-forward" size={24} color="gray" />
		</TouchableOpacity>
	);

	const handleLoadMore = () => {
		if (debouncedQuery.length > 0) {
			hasNextSearchPage && fetchNextSearchPage();
		} else {
			hasNextAllCompaniesPage && fetchNextAllCompaniesPage();
		}
	};

	return (
		<SafeAreaView className="flex-1">
			<ScrollView className="bg-white h-full">
				<View className="p-4">
					<TextInput
						className="p-3 rounded-lg mb-4 border-2 border-zinc-300"
						placeholder="Buscar centros esportivos..."
						placeholderTextColor={"#777777"}
						value={searchQuery}
						onChangeText={setSearchQuery}
					/>
					{isLoading && <Text className="text-white">Carregando...</Text>}
					{error && <Text className="text-red-500">Erro: {error.message}</Text>}
					<FlatList
						data={companies}
						renderItem={renderCompanyItem}
						keyExtractor={(item) => item.id}
						onEndReached={handleLoadMore}
						onEndReachedThreshold={0.5}
						ListEmptyComponent={() =>
							!isLoading && (
								<Text className="text-white text-center">
									Nenhum centro esportivo encontrado.
								</Text>
							)
						}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
