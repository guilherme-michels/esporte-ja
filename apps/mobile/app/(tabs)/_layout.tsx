import { Ionicons } from "@expo/vector-icons";
import "../../global.css";

import { Tabs } from "expo-router";

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: "white",
					borderTopColor: "#e5e7eb",
				},
				tabBarActiveTintColor: "#3b82f6",
				tabBarInactiveTintColor: "#6b7280",
			}}
		>
			<Tabs.Screen
				name="(home-stack)"
				options={{
					title: "Início",
					tabBarIcon: ({ color }) => (
						<Ionicons name="home-outline" size={24} color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="(calendar-stack)"
				options={{
					title: "Agenda",
					tabBarIcon: ({ color }) => (
						<Ionicons name="calendar-outline" size={24} color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="(profile-stack)"
				options={{
					title: "Perfil",
					tabBarIcon: ({ color }) => (
						<Ionicons name="person-outline" size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
