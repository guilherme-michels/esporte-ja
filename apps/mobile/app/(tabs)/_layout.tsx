import "../../global.css";

import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/TabBarIcon";
import { useNavigationState, useRoute } from "@react-navigation/native";

export default function TabLayout() {
	const state = useNavigationState((state) => state);
	const route = useRoute();

	const isHomeFocused =
		state.routes[state.index].name === "(home-stack)" && route.name === "index";

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#000",
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="(home-stack)"
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name="home" color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="(calendar-stack)"
				options={{
					title: "Agenda",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name="calendar" color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="(profile-stack)"
				options={{
					title: "Perfil",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name="user-circle" color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
