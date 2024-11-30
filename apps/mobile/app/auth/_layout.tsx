import { Stack } from "expo-router";

export default function AuthLayout() {
	return (
		<Stack
			initialRouteName="sign-in"
			screenOptions={{
				headerShown: false,
				header: () => null,
				contentStyle: { backgroundColor: "red" },
			}}
		>
			<Stack.Screen
				name="sign-in"
				options={{
					headerShown: false,
					title: "",
				}}
			/>
			<Stack.Screen
				name="sign-up"
				options={{
					headerShown: false,
					title: "",
				}}
			/>
		</Stack>
	);
}
