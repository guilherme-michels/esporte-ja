import { useAuth } from "@/contexts/auth";
import { useCompanyAccess } from "@/hooks/useCompanyAccess";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import type React from "react";
import {
	Pressable,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

interface ProfileOptionProps {
	icon: keyof typeof Ionicons.glyphMap;
	title: string;
	onPress: () => void;
}

const ProfileOption: React.FC<ProfileOptionProps> = ({
	icon,
	title,
	onPress,
}) => (
	<TouchableOpacity
		onPress={onPress}
		style={{
			flexDirection: "row",
			alignItems: "center",
			paddingVertical: 16,
			paddingHorizontal: 20,
			borderBottomWidth: 1,
			borderBottomColor: "#e5e7eb",
		}}
	>
		<Ionicons name={icon} size={24} color="#4b5563" />
		<Text className="text-gray-700 text-lg ml-4">{title}</Text>
		<Ionicons
			name="chevron-forward-outline"
			size={24}
			color="#9ca3af"
			style={{ marginLeft: "auto" }}
		/>
	</TouchableOpacity>
);

export default function ProfileScreen() {
	const router = useRouter();
	const { user, signOut } = useAuth();
	const { companies, isLoading } = useCompanyAccess();

	const company = companies?.[0];

	console.log("Profile Screen Estado:", {
		hasUser: !!user,
		isLoading,
		hasCompany: !!company,
		companyName: company?.name,
	});

	const handleLogout = async () => {
		try {
			await signOut();
		} catch (error) {
			console.error("Erro ao fazer logout:", error);
		}
	};

	const handleNavigateToSettings = (companyId: string) => {
		router.push({
			pathname: "/(tabs)/(profile-stack)/company-settings",
			params: { companyId },
		});
	};

	if (!user) return null;

	return (
		<SafeAreaView className="flex-1">
			<ScrollView className="h-full bg-white">
				<View className="items-center mt-8 mb-6">
					<Text className="text-2xl font-bold mt-4">{user.name}</Text>
					<Text className="text-gray-500">{user.email}</Text>
				</View>

				{isLoading ? (
					<View className="px-4 py-3">
						<Text>Carregando empresa...</Text>
					</View>
				) : company ? (
					<>
						<View className="bg-gray-100 py-2">
							<Text className="text-gray-500 text-sm px-4">
								Meu Empreendimento
							</Text>
						</View>

						<ProfileOption
							icon="business-outline"
							title={company.name}
							onPress={() => handleNavigateToSettings(company.id)}
						/>
					</>
				) : (
					<ProfileOption
						icon="business-outline"
						title="Cadastrar empreendimento"
						onPress={() => router.push("/(profile-stack)/create-company")}
					/>
				)}

				<View className="bg-gray-100 py-2">
					<Text className="text-gray-500 text-sm px-4">Configurações</Text>
				</View>

				<ProfileOption
					icon="person-outline"
					title="Editar Perfil"
					onPress={() => router.push("/(tabs)/(profile-stack)/edit-profile")}
				/>
				<ProfileOption
					icon="notifications-outline"
					title="Notificações"
					onPress={() => router.push("/(tabs)/(profile-stack)/notifications")}
				/>
				<ProfileOption
					icon="lock-closed-outline"
					title="Privacidade e Segurança"
					onPress={() => console.log("Privacy and Security")}
				/>
				<ProfileOption
					icon="help-circle-outline"
					title="Ajuda e Suporte"
					onPress={() => console.log("Help and Support")}
				/>

				<View className="mt-8 px-4 mb-8">
					<TouchableOpacity
						onPress={handleLogout}
						style={{
							backgroundColor: "#ef4444",
							paddingVertical: 12,
							borderRadius: 8,
							alignItems: "center",
						}}
					>
						<Text className="text-white font-semibold">Sair</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
