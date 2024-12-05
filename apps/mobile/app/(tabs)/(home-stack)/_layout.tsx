import { CustomHeaderOptions } from "@/components/header/CustomHeaderOptions";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";

export default function HomeStack() {
	const router = useRouter();

	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />

			<Stack.Screen
				name="company"
				options={({ navigation }) => ({
					title: "Centros esportivos",
					headerShown: true,
					headerStyle: {
						backgroundColor: "#3b82f6",
					},
					headerTintColor: "#3b82f6 ",
					headerTitleStyle: {
						color: "#fff",
						fontSize: 14,
					},
					headerLeft: () => (
						<Ionicons
							name={"arrow-back-outline"}
							size={24}
							color={"#fff"}
							onPress={() => router.back()}
						/>
					),
					headerRight: () => (
						<Ionicons
							name={"cash-outline"}
							size={24}
							color={"#6fdf24"}
							onPress={() => {
								navigation.setParams({ showPricesModal: Date.now() });
							}}
						/>
					),
				})}
			/>

			<Stack.Screen
				name="court"
				options={CustomHeaderOptions({
					title: "Quadra",
					onPress: () => router.back(),
				})}
			/>

			<Stack.Screen
				name="event"
				options={CustomHeaderOptions({
					title: "Evento",
					onPress: () => router.back(),
				})}
			/>

			<Stack.Screen
				name="search-companies"
				options={CustomHeaderOptions({
					title: "Centros esportivos",
					onPress: () => router.back(),
				})}
			/>

			<Stack.Screen
				name="find-players"
				options={CustomHeaderOptions({
					title: "Encontre jogadores",
					onPress: () => router.back(),
				})}
			/>
			<Stack.Screen
				name="search-events"
				options={CustomHeaderOptions({
					title: "Eventos",
					onPress: () => router.back(),
				})}
			/>
		</Stack>
	);
}
