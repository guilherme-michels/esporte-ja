import { trpc } from "@/api";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export function AdminManagement({ companyId }: { companyId: string }) {
	const [email, setEmail] = useState("");

	const utils = trpc.useContext();

	const addAdminMutation = trpc.company.addAdmin.useMutation({
		onSuccess: () => {
			Alert.alert("Sucesso", "Administrador adicionado com sucesso!");
			setEmail("");
			utils.company.getById.invalidate({ id: companyId });
		},
		onError: (error) => {
			Alert.alert("Erro", error.message);
		},
	});

	const removeAdminMutation = trpc.company.removeAdmin.useMutation({
		onSuccess: () => {
			Alert.alert("Sucesso", "Administrador removido com sucesso!");
			utils.company.getById.invalidate({ id: companyId });
		},
		onError: (error) => {
			Alert.alert("Erro", error.message);
		},
	});

	const { data: company } = trpc.company.getById.useQuery({ id: companyId });

	const handleAddAdmin = () => {
		if (!email.trim()) {
			Alert.alert("Erro", "Por favor, insira um email válido");
			return;
		}

		addAdminMutation.mutate({
			companyId,
			email: email.trim(),
		});
	};

	const handleRemoveAdmin = (adminEmail: string) => {
		Alert.alert("Confirmar", `Remover ${adminEmail} como administrador?`, [
			{ text: "Cancelar" },
			{
				text: "Remover",
				style: "destructive",
				onPress: () =>
					removeAdminMutation.mutate({
						companyId,
						email: adminEmail,
					}),
			},
		]);
	};

	return (
		<View className="p-4">
			<Text className="text-lg font-bold mb-4">Gerenciar Administradores</Text>

			{company?.admins.map((admin: { id: string; email: string }) => (
				<View
					key={admin.id}
					className="flex-row justify-between items-center mb-2 p-3 bg-white rounded-lg shadow-sm"
				>
					<Text className="text-gray-700">{admin.email}</Text>
					<TouchableOpacity
						onPress={() => handleRemoveAdmin(admin.email)}
						className="bg-red-500 px-3 py-1 rounded"
					>
						<Text className="text-white">Remover</Text>
					</TouchableOpacity>
				</View>
			))}

			<View className="mt-4 bg-white p-4 rounded-lg shadow-sm">
				<Text className="text-sm text-gray-600 mb-2">
					Adicionar novo administrador
				</Text>
				<TextInput
					placeholder="Email do novo administrador"
					value={email}
					onChangeText={setEmail}
					keyboardType="email-address"
					autoCapitalize="none"
					className="border border-gray-300 rounded-lg p-2 mb-2"
				/>
				<TouchableOpacity
					onPress={handleAddAdmin}
					disabled={addAdminMutation.isPending}
					className={`p-3 rounded-lg ${
						addAdminMutation.isPending ? "bg-blue-300" : "bg-blue-500"
					}`}
				>
					<Text className="text-white text-center font-semibold">
						{addAdminMutation.isPending
							? "Adicionando..."
							: "Adicionar Administrador"}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
