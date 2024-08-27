import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Player {
	id: string;
	name: string;
	age: number;
	sport: string;
	level: string;
	avatarUrl: string;
}

const MOCK_PLAYERS: Player[] = [
	{
		id: "1",
		name: "Carlos Silva",
		age: 28,
		sport: "Futebol",
		level: "Intermediário",
		avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
	},
	{
		id: "2",
		name: "Ana Santos",
		age: 24,
		sport: "Tênis",
		level: "Avançado",
		avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
	},
	{
		id: "3",
		name: "Pedro Oliveira",
		age: 32,
		sport: "Basquete",
		level: "Iniciante",
		avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
	},
];

export default function FindPlayersScreen() {
	const [players, setPlayers] = useState<Player[]>(MOCK_PLAYERS);
	const [loading, setLoading] = useState(false);

	const loadMorePlayers = () => {
		setLoading(true);
		setTimeout(() => {
			const newPlayers = [...Array(10)].map((_, index) => ({
				id: `${players.length + index + 1}`,
				name: `Jogador ${players.length + index + 1}`,
				age: Math.floor(Math.random() * 30) + 18,
				sport: ["Futebol", "Tênis", "Basquete"][Math.floor(Math.random() * 3)],
				level: ["Iniciante", "Intermediário", "Avançado"][
					Math.floor(Math.random() * 3)
				],
				avatarUrl: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${players.length + index + 1}.jpg`,
			}));
			setPlayers((prevPlayers) => [...prevPlayers, ...newPlayers]);
			setLoading(false);
		}, 1000);
	};

	const renderPlayerItem = ({ item }: { item: Player }) => (
		<TouchableOpacity
			style={{
				flexDirection: "row",
				alignItems: "center",
				padding: 16,
				borderBottomWidth: 1,
				borderBottomColor: "#e5e7eb",
			}}
			onPress={() => console.log(`Convidar ${item.name}`)}
		>
			<Image
				source={{ uri: item.avatarUrl }}
				style={{ width: 50, height: 50, borderRadius: 25 }}
			/>
			<View className="ml-4 flex-1">
				<Text className="text-lg font-semibold">{item.name}</Text>
				<Text className="text-gray-600">{`${item.age} anos • ${item.sport}`}</Text>
				<Text className="text-gray-500">{`Nível: ${item.level}`}</Text>
			</View>
			<Ionicons name="add-circle-outline" size={24} color="#3b82f6" />
		</TouchableOpacity>
	);

	return (
		<FlatList
			style={{ flex: 1, backgroundColor: "white" }}
			data={players}
			renderItem={renderPlayerItem}
			keyExtractor={(item) => item.id}
			onEndReached={loadMorePlayers}
			onEndReachedThreshold={0.1}
			ListFooterComponent={
				loading ? (
					<View className="py-4">
						<Text className="text-center text-gray-500">
							Carregando mais jogadores...
						</Text>
					</View>
				) : null
			}
			contentContainerStyle={{ flexGrow: 1 }}
		/>
	);
}
