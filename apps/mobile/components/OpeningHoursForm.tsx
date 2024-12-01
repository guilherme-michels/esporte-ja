import { trpc } from "@/api";
import React, { useState, useEffect } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

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

	const { data: existingHours } = trpc.company.getOpeningHours.useQuery({
		companyId,
	});

	const updateMutation = trpc.company.updateOpeningHours.useMutation();

	useEffect(() => {
		if (existingHours) {
			setOpeningHours(existingHours);
		}
	}, [existingHours]);

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

	const updateHours = (
		dayOfWeek: number,
		field: "opensAt" | "closesAt",
		value: string,
	) => {
		setOpeningHours((prev) => {
			const existing = prev.find((h) => h.dayOfWeek === dayOfWeek);
			if (existing) {
				return prev.map((h) =>
					h.dayOfWeek === dayOfWeek ? { ...h, [field]: value } : h,
				);
			}
			return [
				...prev,
				{
					dayOfWeek,
					opensAt: field === "opensAt" ? value : "09:00",
					closesAt: field === "closesAt" ? value : "18:00",
				},
			];
		});
	};

	return (
		<View className="p-4">
			<Text className="text-lg font-bold mb-4">Horários de Funcionamento</Text>

			{DAYS_OF_WEEK.map((day, index) => (
				<View key={day} className="mb-4">
					<Text className="font-semibold mb-2">{day}</Text>
					<View className="flex-row justify-between">
						<View className="flex-1 mr-2">
							<Text>Abre às:</Text>
							<TouchableOpacity
								className="border border-gray-300 rounded-lg p-2"
								onPress={() => {
									// Implemente a lógica do DateTimePicker aqui
								}}
							>
								<Text>
									{openingHours.find((h) => h.dayOfWeek === index)?.opensAt ||
										"09:00"}
								</Text>
							</TouchableOpacity>
						</View>

						<View className="flex-1 ml-2">
							<Text>Fecha às:</Text>
							<TouchableOpacity
								className="border border-gray-300 rounded-lg p-2"
								onPress={() => {}}
							>
								<Text>
									{openingHours.find((h) => h.dayOfWeek === index)?.closesAt ||
										"18:00"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			))}

			<TouchableOpacity
				onPress={handleSave}
				className="bg-blue-500 p-4 rounded-lg mt-4"
			>
				<Text className="text-white text-center font-bold">
					Salvar Horários
				</Text>
			</TouchableOpacity>
		</View>
	);
}
