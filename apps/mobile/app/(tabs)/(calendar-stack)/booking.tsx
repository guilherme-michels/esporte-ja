import React, { useState } from "react";
import {
	SafeAreaView,
	Text,
	FlatList,
	TouchableOpacity,
	View,
	ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { format, addDays } from "date-fns";
import { ptBR } from "date-fns/locale";

const initialAvailableSlots = [
	{ id: 1, time: "08:00", duration: 60 },
	{ id: 2, time: "09:00", duration: 60 },
	{ id: 3, time: "10:00", duration: 60 },
	{ id: 4, time: "11:00", duration: 60 },
	{ id: 5, time: "12:00", duration: 60 },
	{ id: 6, time: "13:00", duration: 60 },
	{ id: 7, time: "14:00", duration: 60 },
	{ id: 8, time: "15:00", duration: 60 },
	{ id: 9, time: "16:00", duration: 60 },
	{ id: 10, time: "17:00", duration: 60 },
];

export default function BookingScreen() {
	const [selectedDay, setSelectedDay] = useState<Date>(new Date());
	const [selectedSlots, setSelectedSlots] = useState<number[]>([]);

	const toggleSlotSelection = (slotId: number) => {
		setSelectedSlots((prevSelectedSlots) => {
			if (prevSelectedSlots.includes(slotId)) {
				return prevSelectedSlots.filter((id) => id !== slotId);
			}
			return [...prevSelectedSlots, slotId];
		});
	};

	const handlePrevDay = () => {
		setSelectedDay((prevDay) => addDays(prevDay, -1));
	};

	const handleNextDay = () => {
		setSelectedDay((prevDay) => addDays(prevDay, 1));
	};

	const renderTimeSlot = ({
		item,
	}: {
		item: { id: number; time: string; duration: number };
	}) => (
		<TouchableOpacity
			onPress={() => toggleSlotSelection(item.id)}
			style={{
				flex: 1,
				backgroundColor: selectedSlots.includes(item.id)
					? "#16a34a"
					: "#f3f3f3",
				padding: 12,
				marginBottom: 8,
				borderRadius: 8,
				paddingLeft: 12,
			}}
		>
			<View className="flex flex-row justify-between items-center w-full">
				<View className="flex flex-row justify-between items-center gap-2">
					<Ionicons
						name="checkbox"
						size={20}
						color={selectedSlots.includes(item.id) ? "#fff" : "transparent"}
						style={{ opacity: selectedSlots.includes(item.id) ? 1 : 0 }}
					/>

					<Text
						className={`font-light ${
							selectedSlots.includes(item.id) ? "text-white" : "text-black"
						}`}
					>
						{item.time} às {formatTime(item.time, item.duration)}
					</Text>
				</View>

				<View className="flex flex-com">
					<Text
						className={
							selectedSlots.includes(item.id)
								? "text-white font-medium"
								: "text-green-600 font-medium"
						}
					>
						{selectedSlots.includes(item.id) ? "SELECIONADO" : "LIVRE"}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);

	const formatTime = (time: string, duration: number) => {
		const [hours, minutes] = time.split(":").map(Number);
		const endTime = new Date();
		endTime.setHours(hours);
		endTime.setMinutes(minutes + duration);
		return `${String(endTime.getHours()).padStart(2, "0")}:${String(
			endTime.getMinutes(),
		).padStart(2, "0")}`;
	};

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

				{selectedSlots.length > 0 && (
					<View className="absolute bottom-4 left-4 right-4 p-4 bg-blue-500 z-10 rounded-lg flex flex-row justify-between items-center">
						<View className="flex flex-row justify-between items-center gap-2">
							<Ionicons name="calendar-outline" size={20} color={"#fff"} />
							<Text className="text-white font-bold">
								{selectedSlots.length}{" "}
								{selectedSlots.length === 1 ? "horário" : "horários"}{" "}
								selecionado
								{selectedSlots.length > 1 ? "s" : ""}
							</Text>
						</View>
						<Ionicons name="arrow-forward-circle" size={24} color={"#fff"} />
					</View>
				)}

				<FlatList
					data={initialAvailableSlots}
					keyExtractor={(item) => item.id.toString()}
					renderItem={renderTimeSlot}
					contentContainerStyle={{ paddingBottom: 100 }}
				/>
			</View>
		</SafeAreaView>
	);
}
