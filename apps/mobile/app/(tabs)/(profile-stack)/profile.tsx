import type React from "react";
import {
	SafeAreaView,
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Mock user data (replace with real data from your auth system)
const user = {
	name: "João Silva",
	email: "joao.silva@example.com",
	avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
};

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

	const handleLogout = () => {
		// Implement logout logic here
		console.log("Logout");
		// After logout, navigate to login screen
		// router.replace("/login");
	};

	return (
		<SafeAreaView className="flex-1 ">
			<ScrollView className="h-full bg-white">
				<View className="items-center mt-8 mb-6">
					<Image
						source={{ uri: user.avatarUrl }}
						className="w-24 h-24 rounded-full"
					/>
					<Text className="text-2xl font-bold mt-4">{user.name}</Text>
					<Text className="text-gray-500">{user.email}</Text>
				</View>

				<View className="bg-gray-100 py-2">
					<Text className="text-gray-500 text-sm px-4">Configurações</Text>
				</View>

				<ProfileOption
					icon="person-outline"
					title="Editar Perfil"
					onPress={() => console.log("Edit Profile")}
				/>
				<ProfileOption
					icon="notifications-outline"
					title="Notificações"
					onPress={() => console.log("Notifications")}
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

				<View className="mt-8 px-4">
					<TouchableOpacity
						onPress={handleLogout}
						style={{
							backgroundColor: "#ef4444",
							paddingVertical: 12,
							borderRadius: 8,
							alignItems: "center",
						}}
					>
						<Text className="text-white text-lg font-semibold">Sair</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
