import React from "react";
import {
	SafeAreaView,
	Text,
	FlatList,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import { trpc } from "@/api";
import { Ionicons } from "@expo/vector-icons";
import type { Company } from "@/schemas";

export default function SearchCompaniesScreen() {
	const {
		data: companies,
		isLoading,
		error,
	} = trpc.company.getAll.useQuery({ cursor: "", limit: 10 });

	if (isLoading) {
		return (
			<SafeAreaView className="flex-1 bg-gray-900 justify-center items-center">
				<Text className="text-white text-lg">Carregando empresas...</Text>
			</SafeAreaView>
		);
	}

	if (error) {
		return (
			<SafeAreaView className="flex-1 bg-gray-900 justify-center items-center">
				<Text className="text-white text-lg">
					Erro ao carregar empresas: {error.message}
				</Text>
			</SafeAreaView>
		);
	}

	const renderCompanyItem = ({ item }: { item: Company }) => (
		<TouchableOpacity
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				backgroundColor: "#1F2937",
				borderRadius: 8,
				padding: 16,
				marginBottom: 12,
				marginTop: 12,
			}}
		>
			<Image
				source={{
					uri: "https://scontent.fcxj13-1.fna.fbcdn.net/v/t39.30808-6/275041833_112047398079581_4432519264775942829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=o9iqd5D8I0gQ7kNvgGt3bp2&_nc_ht=scontent.fcxj13-1.fna&oh=00_AYAjHSyWo5lPXz4H0V4J283Q7eewNhwtBLnHGYb8JA-y-A&oe=66CD87D2",
				}}
				className="size-16 rounded-full mr-4"
			/>
			<View className="flex-1">
				<Text className="text-white text-lg font-semibold">{item.name}</Text>
				<Text className="text-gray-400">{item.domain}</Text>
			</View>
			<Ionicons name="chevron-forward" size={24} color="gray" />
		</TouchableOpacity>
	);

	return (
		<SafeAreaView className="flex-1">
			<View className="size-full bg-white px-4">
				<FlatList
					data={companies?.companies}
					renderItem={renderCompanyItem}
					keyExtractor={(item) => item.id}
					ListEmptyComponent={
						<Text className="text-white text-center">
							Nenhuma empresa encontrada.
						</Text>
					}
				/>
			</View>
		</SafeAreaView>
	);
}
