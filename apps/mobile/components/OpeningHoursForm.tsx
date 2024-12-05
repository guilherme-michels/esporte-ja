import { trpc } from "@/api";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState, useEffect } from "react";
import { Alert, Platform, Text, TouchableOpacity, View } from "react-native";

const DAYS_OF_WEEK = [
	"Domingo",
	"Segunda",
	"Terça",
	"Quarta",
	"Quinta",
	"Sexta",
	"Sábado",
];

export function OpeningHoursForm({ companyId }: { companyId: string }) {
	const [openingHours, setOpeningHours] = useState<
		Array<{
			dayOfWeek: number;
			opensAt: string;
			closesAt: string;
		}>
	>([]);

	const [selectedDay, setSelectedDay] = useState<number | null>(null);
	const [tempOpenTime, setTempOpenTime] = useState(new Date());
	const [tempCloseTime, setTempCloseTime] = useState(new Date());

	const { data: existingHours, isLoading } =
		trpc.company.getOpeningHours.useQuery({
			companyId,
		});

	const updateMutation = trpc.company.updateOpeningHours.useMutation();

	useEffect(() => {
		if (existingHours) {
			setOpeningHours(existingHours);
		}
	}, [existingHours]);

	const handleDaySelect = (day: number) => {
		if (selectedDay === day) {
			setSelectedDay(null);
			return;
		}

		setSelectedDay(day);
		const existingHour = openingHours.find((h) => h.dayOfWeek === day);

		// Define horários iniciais
		const openDate = new Date();
		const closeDate = new Date();

		if (existingHour) {
			const [openHours, openMinutes] = existingHour.opensAt
				.split(":")
				.map(Number);
			const [closeHours, closeMinutes] = existingHour.closesAt
				.split(":")
				.map(Number);

			openDate.setHours(openHours, openMinutes);
			closeDate.setHours(closeHours, closeMinutes);
		} else {
			openDate.setHours(9, 0);
			closeDate.setHours(18, 0);
		}

		setTempOpenTime(openDate);
		setTempCloseTime(closeDate);
	};

	const handleTimeChange = (
		type: "open" | "close",
		event: any,
		selectedTime: Date | undefined,
	) => {
		if (!selectedTime) return;

		const timeString = selectedTime.toLocaleTimeString("pt-BR", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false,
		});

		if (type === "open") {
			setTempOpenTime(selectedTime);
		} else {
			setTempCloseTime(selectedTime);
		}

		if (selectedDay !== null) {
			setOpeningHours((prev) => {
				const existing = prev.find((h) => h.dayOfWeek === selectedDay);
				if (existing) {
					return prev.map((h) =>
						h.dayOfWeek === selectedDay
							? {
									...h,
									[type === "open" ? "opensAt" : "closesAt"]: timeString,
								}
							: h,
					);
				}
				return [
					...prev,
					{
						dayOfWeek: selectedDay,
						opensAt: type === "open" ? timeString : "09:00",
						closesAt: type === "close" ? timeString : "18:00",
					},
				];
			});
		}
	};

	const handleSave = async () => {
		try {
			await updateMutation.mutateAsync({
				companyId,
				openingHours,
			});
			Alert.alert("Sucesso", "Horários atualizados com sucesso!");
		} catch (error) {
			Alert.alert("Erro", "Não foi possível atualizar os horários");
		}
	};

	if (isLoading) {
		return (
			<View className="p-4">
				<Text>Carregando horários...</Text>
			</View>
		);
	}

	return (
		<View className="p-4">
			<Text className="text-gray-600 mb-4 text-sm">
				Toque em um dia para definir os horários de funcionamento
			</Text>

			{DAYS_OF_WEEK.map((day, index) => {
				const dayHours = openingHours.find((h) => h.dayOfWeek === index);
				const isOpen = !!dayHours;

				return (
					<View key={day} className="mb-4">
						<TouchableOpacity
							className={`p-4 rounded-lg mb-2 flex-row justify-between items-center border ${
								selectedDay === index
									? "bg-blue-50 border-blue-500"
									: "bg-white border-gray-200"
							}`}
							onPress={() => handleDaySelect(index)}
							style={{
								shadowColor: "#000",
								shadowOffset: { width: 0, height: 1 },
								shadowOpacity: 0.1,
								shadowRadius: 2,
								elevation: 2,
							}}
						>
							<View className="flex-row items-center">
								<Text
									className={`font-medium text-base ${selectedDay === index ? "text-blue-700" : "text-gray-700"}`}
								>
									{day}
								</Text>
							</View>

							<View className="flex-row items-center">
								{isOpen ? (
									<Text
										className={`${selectedDay === index ? "text-blue-600" : "text-gray-600"}`}
									>
										{dayHours.opensAt} às {dayHours.closesAt}
									</Text>
								) : (
									<Text className="text-gray-500">Fechado</Text>
								)}
								<Text className="ml-2 text-gray-400">›</Text>
							</View>
						</TouchableOpacity>

						{selectedDay === index && (
							<View className="bg-gray-50 p-4 rounded-lg mt-2 border border-gray-200">
								<View className="flex-row justify-between">
									<View className="flex-1 mr-4">
										<Text className="text-gray-600 mb-2">Abre às:</Text>
										<View className="bg-white rounded-lg border border-gray-200">
											<DateTimePicker
												value={tempOpenTime}
												mode="time"
												is24Hour={true}
												display="default"
												onChange={(event, date) =>
													handleTimeChange("open", event, date)
												}
												style={{ height: 40 }}
											/>
										</View>
									</View>

									<View className="flex-1">
										<Text className="text-gray-600 mb-2">Fecha às:</Text>
										<View className="bg-white rounded-lg border border-gray-200">
											<DateTimePicker
												value={tempCloseTime}
												mode="time"
												is24Hour={true}
												display="default"
												onChange={(event, date) =>
													handleTimeChange("close", event, date)
												}
												style={{ height: 40 }}
											/>
										</View>
									</View>
								</View>
							</View>
						)}
					</View>
				);
			})}

			<TouchableOpacity
				onPress={handleSave}
				style={{
					backgroundColor: "#2563eb",
					borderRadius: 8,
					padding: 16,
					shadowColor: "#000",
					shadowOffset: {
						width: 0,
						height: 2,
					},
					shadowOpacity: 0.25,
					shadowRadius: 3.84,
					elevation: 5,
					marginBottom: 12,
				}}
			>
				<Text className="text-white text-center font-bold text-base">
					Salvar Horários
				</Text>
			</TouchableOpacity>
		</View>
	);
}
