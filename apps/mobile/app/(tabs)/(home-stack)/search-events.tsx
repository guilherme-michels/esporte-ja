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
import type { Event } from "../../../../api/schemas";

export default function SearchEventsScreen() {
	const [searchQuery, setSearchQuery] = useState("");
	const debouncedQuery = useDebounce(searchQuery, 0);
	const router = useRouter();

	const {
		data: searchData,
		isLoading: isSearchLoading,
		error: searchError,
		fetchNextPage: fetchNextSearchPage,
		hasNextPage: hasNextSearchPage,
	} = trpc.event.search.useInfiniteQuery(
		{ query: debouncedQuery, limit: 10 },
		{
			getNextPageParam: (lastPage) => lastPage.nextCursor,
			enabled: debouncedQuery.length > 0,
		},
	);

	const {
		data: allEventsData,
		isLoading: isAllEventsLoading,
		error: allEventsError,
		fetchNextPage: fetchNextAllEventsPage,
		hasNextPage: hasNextAllEventsPage,
	} = trpc.event.getAll.useInfiniteQuery(
		{ limit: 10 },
		{
			getNextPageParam: (lastPage) => lastPage.nextCursor,
			enabled: debouncedQuery.length === 0,
		},
	);

	const events =
		debouncedQuery.length > 0
			? (searchData?.pages.flatMap((page) => page.events) ?? [])
			: (allEventsData?.pages.flatMap((page) => page.events) ?? []);

	const isLoading = isSearchLoading || isAllEventsLoading;
	const error = searchError || allEventsError;

	const renderEventItem = ({ item }: { item: Event }) => (
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
			onPress={() => router.push(`/(tabs)/(home-stack)/event?id=${item.id}`)}
		>
			<Image
				source={{
					uri: "https://itaguara.com/wp-content/uploads/2023/06/inscricoes-abertas.jpg",
				}}
				className="w-16 h-16 rounded-full mr-4"
			/>

			<View className="flex-1">
				<Text className="text-white text-lg font-semibold">{item.title}</Text>
				<Text className="text-gray-200">
					{new Date(item.dateTime).toLocaleDateString()}
				</Text>
			</View>
			<Ionicons name="chevron-forward" size={24} color="gray" />
		</TouchableOpacity>
	);

	const handleLoadMore = () => {
		if (debouncedQuery.length > 0) {
			hasNextSearchPage && fetchNextSearchPage();
		} else {
			hasNextAllEventsPage && fetchNextAllEventsPage();
		}
	};

	return (
		<SafeAreaView className="flex-1">
			<ScrollView className="bg-white h-full">
				<View className="p-4">
					<TextInput
						className="p-3 rounded-lg mb-4 border-2 border-zinc-300"
						placeholder="Buscar eventos..."
						placeholderTextColor={"#777777"}
						value={searchQuery}
						onChangeText={setSearchQuery}
					/>
					{isLoading && <Text className="text-white">Carregando...</Text>}
					{error && <Text className="text-red-500">Erro: {error.message}</Text>}
					<FlatList
						data={events}
						renderItem={renderEventItem}
						keyExtractor={(item) => item.id}
						onEndReached={handleLoadMore}
						onEndReachedThreshold={0.5}
						ListEmptyComponent={() =>
							!isLoading && (
								<Text className="text-white text-center">
									Nenhum evento encontrado.
								</Text>
							)
						}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
