import React, { useState } from "react";
import {
	SafeAreaView,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type BookingStatus = "Solicitado" | "Agendado" | "Cancelado" | "Realizado";

interface Booking {
	id: string;
	courtName: string;
	date: string;
	time: string;
	status: BookingStatus;
}

const TABS: (BookingStatus | "Todos")[] = [
	"Todos",
	"Solicitado",
	"Agendado",
	"Cancelado",
	"Realizado",
];

const MOCK_BOOKINGS: Booking[] = [
	{
		id: "1",
		courtName: "Quadra de Futebol 1",
		date: "2023-05-15",
		time: "14:00",
		status: "Solicitado",
	},
	{
		id: "2",
		courtName: "Quadra de Tênis 2",
		date: "2023-05-16",
		time: "10:00",
		status: "Agendado",
	},
	{
		id: "3",
		courtName: "Quadra de Basquete 1",
		date: "2023-05-14",
		time: "16:00",
		status: "Cancelado",
	},
	{
		id: "4",
		courtName: "Quadra de Futebol 2",
		date: "2023-05-13",
		time: "18:00",
		status: "Realizado",
	},
];

const { height: screenHeight } = Dimensions.get("window");

export default function CalendarScreen() {
	const [activeTab, setActiveTab] = useState<BookingStatus | "Todos">("Todos");

	const filteredBookings =
		activeTab === "Todos"
			? MOCK_BOOKINGS
			: MOCK_BOOKINGS.filter((booking) => booking.status === activeTab);

	const renderBookingItem = ({ item }: { item: Booking }) => (
		<View className="bg-zinc-100 p-4 mb-2 rounded-lg shadow">
			<Text className="text-lg font-bold">{item.courtName}</Text>
			<Text className="text-gray-600">{`Data: ${item.date} - Horário: ${item.time}`}</Text>
			<Text className={`mt-2 font-semibold ${getStatusColor(item.status)}`}>
				{item.status}
			</Text>
		</View>
	);

	const getStatusColor = (status: BookingStatus) => {
		switch (status) {
			case "Solicitado":
				return "text-yellow-500";
			case "Agendado":
				return "text-green-500";
			case "Cancelado":
				return "text-red-500";
			case "Realizado":
				return "text-blue-500";
		}
	};

	const renderHeader = () => (
		<View className="flex-row justify-between pb-4">
			{TABS.map((tab) => (
				<TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
					<View
						className={`${
							activeTab === tab ? "bg-blue-500" : "bg-zinc-100"
						} justify-center items-center px-2 py-2 rounded-full border-[1px] border-zinc-300`}
					>
						<Text
							className={`${
								activeTab === tab ? "text-white" : "text-zinc-400"
							} text-xs`}
						>
							{tab}
						</Text>
					</View>
				</TouchableOpacity>
			))}
		</View>
	);

	return (
		<SafeAreaView className="flex-1 bg-white h-full">
			<View style={{ height: screenHeight }} className="bg-white p-4">
				<FlatList
					ListHeaderComponent={renderHeader}
					data={filteredBookings}
					renderItem={renderBookingItem}
					keyExtractor={(item) => item.id}
					contentContainerStyle={{ flexGrow: 1 }}
					ListEmptyComponent={
						<View className="flex-1 justify-center items-center">
							<Ionicons name="calendar-outline" size={48} color="gray" />
							<Text className="text-gray-500 mt-2">
								Nenhum agendamento encontrado
							</Text>
						</View>
					}
				/>
			</View>
		</SafeAreaView>
	);
}
