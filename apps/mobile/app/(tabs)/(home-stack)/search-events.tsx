import { trpc } from "@/api";
import React from "react";
import { SafeAreaView, Text, FlatList, View } from "react-native";

export default function SearchEventsScreen() {
	const {
		data: events,
		isLoading,
		error,
	} = trpc.event.getAll.useQuery({ cursor: "", limit: 10 });

	if (isLoading) {
		return (
			<SafeAreaView>
				<Text className="text-white">Carregando...</Text>
			</SafeAreaView>
		);
	}

	if (error) {
		return (
			<SafeAreaView>
				<Text className="text-white">
					Erro ao carregar empresas: {error.message}
				</Text>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView className="flex-1">
			<Text className="text-white text-xl font-bold p-4">
				Lista de Empresas
			</Text>
			<FlatList
				data={events?.events}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<View className="p-4 border-b border-gray-300">
						<Text className="text-white text-lg">{item.name}</Text>
						<Text className="text-gray-400">{item.name}</Text>
					</View>
				)}
			/>
		</SafeAreaView>
	);
}
