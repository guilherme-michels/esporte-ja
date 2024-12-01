import { CustomHeaderOptions } from "@/components/header/CustomHeaderOptions";
import { Stack, useRouter } from "expo-router";

export default function ProfileStack() {
	const router = useRouter();

	console.log("ProfileStack Layout Rendered");

	return (
		<Stack>
			<Stack.Screen
				name="profile"
				options={CustomHeaderOptions({
					title: "Perfil",
					onPress: () => router.back(),
				})}
			/>

			<Stack.Screen
				name="company-settings"
				options={CustomHeaderOptions({
					title: "Configurações da Empresa",
					onPress: () => router.back(),
				})}
			/>
		</Stack>
	);
}
