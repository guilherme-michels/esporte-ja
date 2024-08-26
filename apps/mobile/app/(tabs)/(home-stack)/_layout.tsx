import { CustomHeaderOptions } from "@/components/header/CustomHeaderOptions";
import { Stack, useRouter } from "expo-router";

export default function HomeStack() {
	const router = useRouter();

	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />

			<Stack.Screen
				name="company"
				options={CustomHeaderOptions({
					title: "Centro esportivo",
					onPress: () => router.back(),
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
			<Stack.Screen name="notifications" options={{ headerShown: false }} />
			<Stack.Screen name="review-form" options={{ headerShown: false }} />
			<Stack.Screen
				name="reviews"
				options={CustomHeaderOptions({
					title: "Avaliações",
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
				name="search-events"
				options={CustomHeaderOptions({
					title: "Eventos",
					onPress: () => router.back(),
				})}
			/>
		</Stack>
	);
}
