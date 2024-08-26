import { CustomHeaderOptions } from "@/components/header/CustomHeaderOptions";
import { Stack, useRouter } from "expo-router";

export default function CalendarStack() {
	const router = useRouter();

	return (
		<Stack>
			<Stack.Screen
				name="calendar"
				options={CustomHeaderOptions({
					title: "Agenda",
					onPress: () => router.back(),
				})}
			/>

			<Stack.Screen
				name="booking"
				options={CustomHeaderOptions({
					title: "Agendamento",
					onPress: () => router.back(),
				})}
			/>
		</Stack>
	);
}
