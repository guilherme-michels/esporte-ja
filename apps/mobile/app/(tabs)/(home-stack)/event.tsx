import { trpc } from "@/api";
import type { Event, EventRule, Prize } from "@/schemas";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
	ActivityIndicator,
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

interface EventWithRelations extends Event {
	Prize: Prize[];
	EventRule: EventRule[];
}

export default function EventScreen() {
	const router = useRouter();
	const { id } = useLocalSearchParams<{ id: string }>();
	const [imageLoading, setImageLoading] = useState(true);

	const {
		data: event,
		isLoading,
		error,
	} = trpc.event.getById.useQuery<EventWithRelations>(
		{ id: id ?? "" },
		{
			enabled: !!id,
			retry: false,
		},
	);

	if (isLoading) {
		return (
			<SafeAreaView className="flex-1 justify-center items-center">
				<ActivityIndicator size="large" color="#3b82f6" />
			</SafeAreaView>
		);
	}

	if (error || !event) {
		return (
			<SafeAreaView className="flex-1 p-4 justify-center items-center">
				<Text className="text-lg text-red-500">
					{error ? error.message : "Evento não encontrado"}
				</Text>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView className="flex-1">
			<View className="px-4 bg-white size-full">
				<ScrollView
					className="h-full"
					contentContainerStyle={{ paddingBottom: 80 }}
				>
					<View className="mt-4 bg-white rounded-lg shadow-md mb-4">
						<Image
							source={{
								uri: event.imageUrl || "https://via.placeholder.com/400x300",
							}}
							className="w-full h-60 rounded-lg"
							resizeMode="cover"
							alt="event-image"
						/>
						<Text className="text-2xl font-bold text-gray-800 mt-4">
							{event.title}
						</Text>

						<View className="flex gap-4 flex-col mt-2 items-center">
							<Text className="text-gray-600">{event.description}</Text>

							<View className="flex-row items-center justify-center w-full gap-4">
								<View className="flex-row items-center gap-1">
									<Ionicons name="calendar-outline" size={20} color="#000000" />
									<Text className="text-base font-extralight">
										{new Date(event.date).toLocaleDateString()}
									</Text>
								</View>

								<View className="flex-row items-center gap-1">
									<Ionicons name="time-outline" size={20} color="#000000" />
									<Text className="text-base font-extralight">
										{new Date(event.dateTime).toLocaleTimeString().slice(0, 5)}
									</Text>
								</View>
							</View>
						</View>

						{event.EventRule && event.EventRule.length > 0 && (
							<View className="mt-6 flex flex-col gap-2">
								<Text className="text-base font-light">Regras do Evento:</Text>
								<View className="flex-col gap-1">
									{event.EventRule.map((rule) => (
										<Text key={rule.id} className="font-extralight">
											{rule.value}
										</Text>
									))}
								</View>
							</View>
						)}

						{event.Prize && event.Prize.length > 0 && (
							<View className="mt-6 flex flex-col gap-2">
								<View className="flex-row items-center gap-2 justify-center">
									<Ionicons name="trophy" size={24} color="#e9a20a" />
									<Text className="text-lg font-bold text-[#e9a20a]">
										Premiações
									</Text>
								</View>

								<View className="flex-col gap-1 w-full items-center">
									{event.Prize.map((prize) => (
										<Text
											key={prize.id}
											className={`font-bold w-full text-center text-white rounded p-2 ${
												prize.position === 1
													? "bg-green-700"
													: prize.position === 2
														? "bg-green-600"
														: "bg-green-400"
											}`}
										>
											{prize.position}º lugar: R$ {prize.amount.toFixed(2)}
										</Text>
									))}
								</View>
							</View>
						)}

						<TouchableOpacity
							style={{
								backgroundColor: "#3b82f6",
								padding: 16,
								borderRadius: 8,
								marginTop: 40,
							}}
							onPress={() => console.log("Inscrever-se no evento")}
						>
							<Text className="text-white font-semibold text-center text-lg">
								Inscrever-se no Evento
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={{
								marginTop: 40,
								justifyContent: "center",
							}}
							onPress={() => router.push("/(home-stack)/find-players")}
						>
							<View className="ml-2">
								<Text className="text-zinc-500 text-sm">
									Não possui uma dupla mas gostaria de participar?
								</Text>

								<Text className="text-blue-600 text-sm">
									Com Esporte Já, você pode se conectar com outros jogadores da
									sua categoria para participar de eventos e evoluir dentro do
									esporte!
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
