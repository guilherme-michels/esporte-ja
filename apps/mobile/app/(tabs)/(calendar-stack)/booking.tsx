import { trpc } from "@/api";
import { useAuth } from "@/contexts/auth";
import { Ionicons } from "@expo/vector-icons";
import { addDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
	ActivityIndicator,
	Alert,
	FlatList,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export default function BookingScreen() {
	const { courtId } = useLocalSearchParams<{ courtId: string }>();
	const { user } = useAuth();
	const router = useRouter();

	const [selectedDay, setSelectedDay] = useState<Date>(new Date());
	const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

	const { data: availableSlots, isLoading } =
		trpc.booking.getAvailableSlots.useQuery({
			courtId: courtId as string,
			date: selectedDay,
		});

	const bookingMutation = trpc.booking.create.useMutation({
		onSuccess: () => {
			Alert.alert("Sucesso", "Agendamento realizado com sucesso!");
			router.push("/(tabs)/(calendar-stack)/calendar");
		},
		onError: (error) => {
			Alert.alert("Erro", error.message);
		},
	});

	const handleBooking = async () => {
		if (!user) {
			Alert.alert(
				"Erro",
				"Você precisa estar logado para fazer um agendamento",
			);
			return;
		}

		try {
			for (const time of selectedSlots) {
				const [hours, minutes] = time.split(":").map(Number);
				const dateTime = new Date(selectedDay);
				dateTime.setHours(hours, minutes, 0, 0);

				await bookingMutation.mutateAsync({
					courtId: courtId as string,
					userId: user.id,
					dateTime,
					price: 100, // Ajuste o preço conforme necessário
				});
			}
		} catch (error) {
			console.error("Erro ao criar agendamento:", error);
		}
	};

	const handlePrevDay = () => {
		setSelectedDay((prevDay) => addDays(prevDay, -1));
	};

	const handleNextDay = () => {
		setSelectedDay((prevDay) => addDays(prevDay, 1));
	};

	const renderTimeSlot = ({
		item,
	}: { item: { time: string; isPeakHour: boolean } }) => (
		<TouchableOpacity
			onPress={() => {
				if (selectedSlots.includes(item.time)) {
					setSelectedSlots(selectedSlots.filter((time) => time !== item.time));
				} else {
					setSelectedSlots([...selectedSlots, item.time]);
				}
			}}
			className={`p-4 mb-2 rounded-lg ${
				selectedSlots.includes(item.time)
					? "bg-green-600"
					: item.isPeakHour
						? "bg-yellow-100"
						: "bg-gray-100"
			}`}
		>
			<View className="flex-row justify-between items-center">
				<Text
					className={
						selectedSlots.includes(item.time)
							? "text-white font-bold"
							: "text-black"
					}
				>
					{item.time}
				</Text>
				{item.isPeakHour && (
					<View className="bg-yellow-500 px-2 py-1 rounded">
						<Text className="text-xs text-white">Horário de Pico</Text>
					</View>
				)}
			</View>
		</TouchableOpacity>
	);

	if (isLoading) {
		return (
			<View className="flex-1 justify-center items-center">
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);
	}

	return (
		<SafeAreaView className="flex-1 bg-gray-100">
			<View className="px-4 bg-white size-full relative">
				<View className="flex flex-row justify-between items-center my-4">
					<TouchableOpacity onPress={handlePrevDay}>
						<Ionicons name="chevron-back" size={24} color="black" />
					</TouchableOpacity>
					<Text className="text-lg font-bold">
						{format(selectedDay, "EEEE, dd MMMM", { locale: ptBR })}
					</Text>
					<TouchableOpacity onPress={handleNextDay}>
						<Ionicons name="chevron-forward" size={24} color="black" />
					</TouchableOpacity>
				</View>
				<FlatList<{ time: string; isPeakHour: boolean }>
					data={availableSlots}
					keyExtractor={(item) => item.time}
					renderItem={renderTimeSlot}
					ListEmptyComponent={
						<View className="flex-1 justify-center items-center py-8">
							<Ionicons name="calendar-outline" size={48} color="gray" />
							<Text className="text-gray-500 mt-2 text-center">
								Nenhum horário disponível para este dia
							</Text>
						</View>
					}
				/>

				{selectedSlots.length > 0 && (
					<TouchableOpacity
						onPress={handleBooking}
						className="absolute bottom-4 left-4 right-4 p-4 bg-blue-500 rounded-lg"
					>
						<Text className="text-white text-center font-bold">
							Agendar {selectedSlots.length} horário(s)
						</Text>
					</TouchableOpacity>
				)}
			</View>
		</SafeAreaView>
	);
}
