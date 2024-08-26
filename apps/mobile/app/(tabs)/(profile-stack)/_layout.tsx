import { CustomHeaderOptions } from "@/components/header/CustomHeaderOptions";
import { Stack, useRouter } from "expo-router";

export default function ProfileStack() {
	const router = useRouter();

	return (
		<Stack>
			<Stack.Screen
				name="profile"
				options={CustomHeaderOptions({
					title: "Perfil",
					onPress: () => router.back(),
				})}
			/>
		</Stack>
	);
}
