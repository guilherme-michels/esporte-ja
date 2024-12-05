import { trpc } from "@/api";
import { type Court, CourtSchema, SportTypeSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
	Alert,
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

type CourtFormData = Omit<Court, "id" | "createdAt" | "comments">;

// Tipos disponíveis
const COURT_TYPES = [
	"BEACH_TENNIS",
	"FOOTBALL",
	"VOLLEYBALL",
	"FUTVOLEY",
	"TENNIS",
	"PADEL",
] as const;

export function CourtsManager({ companyId }: { companyId: string }) {
	console.log("CompanyId recebido:", companyId);

	const [isAddingCourt, setIsAddingCourt] = useState(false);
	const {
		data: company,
		isLoading,
		error,
	} = trpc.company.getById.useQuery({
		id: companyId,
	});

	console.log("Estado atual:", { company, isLoading, error });

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<CourtFormData>({
		resolver: zodResolver(
			CourtSchema.omit({ id: true, createdAt: true, comments: true }),
		),
		defaultValues: {
			name: "",
			description: null,
			type: "FOOTBALL",
			rules: null,
			imageUrl: null,
			companyId: companyId,
		},
	});

	const createMutation = trpc.company.createCourt.useMutation({
		onSuccess: () => {
			Alert.alert("Sucesso", "Quadra criada com sucesso!");
			setIsAddingCourt(false);
			reset();
		},
		onError: (error) => {
			Alert.alert("Erro", error.message);
		},
	});

	const onSubmit = async (data: CourtFormData) => {
		try {
			console.log("Dados recebidos:", data);
			console.log("Tipo recebido:", data.type);

			const sportType = data.type;
			console.log("Tipo convertido:", sportType);

			if (!sportType) {
				console.log("Mapeamento disponível:", COURT_TYPES);
				throw new Error("Tipo de quadra inválido");
			}

			await createMutation.mutateAsync({
				...data,
				type: sportType,
			});
		} catch (error) {
			console.error(error);
			Alert.alert(
				"Erro",
				error instanceof Error ? error.message : "Erro ao criar quadra",
			);
		}
	};

	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const pickImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				allowsEditing: true,
				aspect: [16, 9],
				quality: 1,
			});

			if (!result.canceled) {
				setSelectedImage(result.assets[0].uri);

				const formData = new FormData();
				const uri = result.assets[0].uri;
				const fileExtension = uri.split(".").pop();
				const fileName = `court-image-${Date.now()}.${fileExtension}`;

				formData.append("file", {
					uri,
					name: fileName,
					type: `image/${fileExtension}`,
				} as any);

				const API_URL = "http://192.168.1.100:3000";
				const response = await fetch(`${API_URL}/api/upload`, {
					method: "POST",
					body: formData,
					headers: {
						Accept: "application/json",
					},
				});

				if (!response.ok) {
					throw new Error("Falha ao enviar imagem");
				}

				const { imageUrl } = await response.json();

				await trpc.company.updateCourt.mutate({
					id: company!.id,
					imageUrl,
				});

				Alert.alert("Sucesso", "Imagem enviada com sucesso!");
			}
		} catch (error) {
			console.error("Erro ao enviar imagem:", error);
			Alert.alert("Erro", "Não foi possível enviar a imagem");
		}
	};

	if (isLoading) {
		return <Text>Carregando quadras...</Text>;
	}

	if (isAddingCourt) {
		return (
			<View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						marginBottom: 24,
					}}
				>
					<Text style={{ fontSize: 20, fontWeight: "bold" }}>Nova Quadra</Text>
					<TouchableOpacity
						onPress={() => setIsAddingCourt(false)}
						style={{ paddingHorizontal: 16, paddingVertical: 8 }}
					>
						<Text style={{ color: "#3b82f6" }}>Cancelar</Text>
					</TouchableOpacity>
				</View>

				<View className="">
					<View>
						<Text className="font-medium mb-1">Nome da Quadra</Text>
						<Controller
							control={control}
							name="name"
							render={({ field: { onChange, value } }) => (
								<TextInput
									className="border border-gray-300 rounded-lg p-3 bg-white"
									onChangeText={onChange}
									value={value}
									placeholder="Ex: Quadra 1"
								/>
							)}
						/>
						{errors.name && (
							<Text className="text-red-500 text-sm mt-1">
								{errors.name.message}
							</Text>
						)}
					</View>

					{/* <View>
						<Text className="font-medium mb-1">Preço por Hora</Text>
						<Controller
							control={control}
							name="pricePerHour"
							rules={{
								required: "Preço é obrigatório",
								pattern: {
									value: /^\d+(\.\d{0,2})?$/,
									message: "Digite um valor válido",
								},
							}}
							render={({ field: { onChange, value } }) => (
								<TextInput
									className="border border-gray-300 rounded-lg p-3 bg-white"
									onChangeText={onChange}
									value={value}
									placeholder="Ex: 50.00"
									keyboardType="decimal-pad"
								/>
							)}
						/>
						{errors.pricePerHour && (
							<Text className="text-red-500 text-sm mt-1">
								{errors.pricePerHour.message}
							</Text>
						)}
					</View> */}

					<View>
						<Text style={{ fontWeight: "500", marginBottom: 4, marginTop: 12 }}>
							Descrição
						</Text>
						<Controller
							control={control}
							name="description"
							render={({ field: { onChange, value } }) => (
								<TextInput
									className="border border-gray-300 rounded-lg p-3 bg-white"
									onChangeText={onChange}
									value={value}
									placeholder="Descreva a quadra (opcional)"
									multiline
									numberOfLines={4}
									textAlignVertical="top"
								/>
							)}
						/>
					</View>

					<View>
						<Text style={{ fontWeight: "500", marginBottom: 4, marginTop: 12 }}>
							Tipo da Quadra
						</Text>
						<Controller
							control={control}
							name="type"
							rules={{ required: "Tipo é obrigatório" }}
							render={({ field: { onChange, value } }) => (
								<ScrollView
									horizontal
									showsHorizontalScrollIndicator={false}
									style={{ marginHorizontal: -4 }}
								>
									{COURT_TYPES.map((type) => (
										<TouchableOpacity
											key={type}
											onPress={() => onChange(type)}
											style={{
												margin: 4,
												paddingHorizontal: 16,
												paddingVertical: 8,
												borderRadius: 9999,
												borderWidth: 1,
												backgroundColor:
													value === type ? "#3b82f6" : "transparent",
												borderColor: value === type ? "#3b82f6" : "#d1d5db",
											}}
										>
											<Text
												style={{
													color: value === type ? "#ffffff" : "#374151",
												}}
											>
												{type}
											</Text>
										</TouchableOpacity>
									))}
								</ScrollView>
							)}
						/>
						{errors.type && (
							<Text className="text-red-500 text-sm mt-1">
								{errors.type.message}
							</Text>
						)}
					</View>

					<View>
						<Text style={{ fontWeight: "500", marginBottom: 4, marginTop: 12 }}>
							Imagem da Quadra
						</Text>
						<TouchableOpacity
							onPress={pickImage}
							style={{
								backgroundColor: "#f3f4f6",
								padding: 16,
								borderRadius: 8,
								borderWidth: 1,
								borderColor: "#e5e7eb",
								alignItems: "center",
							}}
						>
							{selectedImage ? (
								<Image
									source={{ uri: selectedImage }}
									style={{ width: "100%", height: 200, borderRadius: 8 }}
								/>
							) : (
								<Text style={{ color: "#6b7280" }}>Selecionar Imagem</Text>
							)}
						</TouchableOpacity>
					</View>

					<TouchableOpacity
						onPress={handleSubmit(onSubmit)}
						style={{
							backgroundColor: "#3b82f6",
							padding: 16,
							borderRadius: 8,
							marginTop: 16,
						}}
					>
						<Text
							style={{
								color: "#ffffff",
								textAlign: "center",
								fontWeight: "bold",
							}}
						>
							Criar Quadra
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	return (
		<View>
			<TouchableOpacity
				onPress={() => setIsAddingCourt(true)}
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
				<Text
					style={{ color: "#ffffff", textAlign: "center", fontWeight: "bold" }}
				>
					Adicionar Nova Quadra
				</Text>
			</TouchableOpacity>
			{company?.courts && company.courts.length > 0 ? (
				company.courts.map((court) => (
					<View
						key={court.id}
						style={{
							backgroundColor: "#ffffff",
							padding: 16,
							borderRadius: 8,
							marginBottom: 8,
							borderWidth: 1,
							borderColor: "#e5e7eb",
						}}
					>
						<Text style={{ fontWeight: "bold" }}>{court.name}</Text>
						<Text style={{ color: "#4b5563" }}>{court.description}</Text>
						<Text style={{ color: "#4b5563" }}>Preço: R$ 50/hora</Text>
					</View>
				))
			) : (
				<Text style={{ textAlign: "center", color: "#6b7280" }}>
					Nenhuma quadra cadastrada
				</Text>
			)}
		</View>
	);
}
