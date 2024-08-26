import React, { useState } from "react";
import {
	SafeAreaView,
	Text,
	FlatList,
	TouchableOpacity,
	View,
	type ListRenderItemInfo,
	ScrollView,
} from "react-native";
import { format, addMinutes } from "date-fns";
import { Calendar, type DateData } from "react-native-calendars";
import { Ionicons } from "@expo/vector-icons";

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

	const renderTimeSlot = ({
		item,
	}: ListRenderItemInfo<{ id: number; time: string; duration: number }>) => (
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
						{item.time} às{" "}
						{format(
							addMinutes(
								new Date(`1970-01-01T${item.time}:00Z`),
								item.duration,
							),
							"HH:mm",
						)}
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

	return (
		<SafeAreaView className="flex-1 bg-gray-100">
			<View className="px-4 bg-white size-full relative">
				{selectedSlots.length > 0 && (
					<View className="absolute top-4 left-4 right-4 p-4 bg-blue-500 z-10 rounded-lg flex flex-row justify-between items-center">
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

				<ScrollView className="h-full">
					<Calendar
						current={format(selectedDay, "yyyy-MM-dd")}
						onDayPress={(day: DateData) =>
							setSelectedDay(new Date(day.dateString))
						}
						markedDates={{
							[format(selectedDay, "yyyy-MM-dd")]: {
								selected: true,
								selectedColor: "#00adf5",
							},
						}}
						theme={{
							selectedDayBackgroundColor: "#00adf5",
							todayTextColor: "#00adf5",
						}}
					/>

					<Text className="mt-5 mb-2 text-lg font-bold">
						{format(selectedDay, "MMMM dd, yyyy")}
					</Text>

					<FlatList
						data={initialAvailableSlots}
						keyExtractor={(item) => item.id.toString()}
						renderItem={renderTimeSlot}
					/>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
