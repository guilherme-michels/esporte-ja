import { trpc } from "@/api";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

type CompanyFormData = {
	name: string;
	address: string;
	phone: string;
	description?: string;
};

export function CompanyForm({
	companyId,
	initialData,
}: {
	companyId: string;
	initialData?: any;
}) {
	const { control, handleSubmit } = useForm<CompanyFormData>({
		defaultValues: {
			name: initialData?.name || "",
			address: initialData?.address || "",
			phone: initialData?.phone || "",
			description: initialData?.description || "",
		},
	});

	const updateMutation = trpc.company.update.useMutation();

	const onSubmit = async (data: CompanyFormData) => {
		try {
			await updateMutation.mutateAsync({
				id: companyId,
				...data,
			});
			Alert.alert("Sucesso", "Informações atualizadas com sucesso!");
		} catch (error) {
			Alert.alert("Erro", "Não foi possível atualizar as informações");
		}
	};

	return (
		<View>
			<View className="mb-4">
				<Text className="mb-2 font-medium">Nome da Empresa</Text>
				<Controller
					control={control}
					name="name"
					rules={{ required: true }}
					render={({ field: { onChange, value } }) => (
						<TextInput
							className="border border-gray-300 rounded-lg p-2"
							onChangeText={onChange}
							value={value}
							placeholder="Nome da empresa"
						/>
					)}
				/>
			</View>

			<View className="mb-4">
				<Text className="mb-2 font-medium">Endereço</Text>
				<Controller
					control={control}
					name="address"
					rules={{ required: true }}
					render={({ field: { onChange, value } }) => (
						<TextInput
							className="border border-gray-300 rounded-lg p-2"
							onChangeText={onChange}
							value={value}
							placeholder="Endereço completo"
						/>
					)}
				/>
			</View>

			<View className="mb-4">
				<Text className="mb-2 font-medium">Telefone</Text>
				<Controller
					control={control}
					name="phone"
					rules={{ required: true }}
					render={({ field: { onChange, value } }) => (
						<TextInput
							className="border border-gray-300 rounded-lg p-2"
							onChangeText={onChange}
							value={value}
							placeholder="(00) 00000-0000"
							keyboardType="phone-pad"
						/>
					)}
				/>
			</View>

			<View className="mb-4">
				<Text className="mb-2 font-medium">Descrição</Text>
				<Controller
					control={control}
					name="description"
					render={({ field: { onChange, value } }) => (
						<TextInput
							className="border border-gray-300 rounded-lg p-2"
							onChangeText={onChange}
							value={value}
							placeholder="Descrição da empresa"
							multiline
							numberOfLines={4}
						/>
					)}
				/>
			</View>

			<TouchableOpacity
				onPress={handleSubmit(onSubmit)}
				style={{
					backgroundColor: "#2563eb",
					borderRadius: 8,
					padding: 16,
					marginTop: 24,
					shadowColor: "#000",
					shadowOffset: {
						width: 0,
						height: 2,
					},
					shadowOpacity: 0.25,
					shadowRadius: 3.84,
					elevation: 5,
				}}
			>
				<Text className="text-white text-center font-bold">
					Salvar Informações
				</Text>
			</TouchableOpacity>
		</View>
	);
}
