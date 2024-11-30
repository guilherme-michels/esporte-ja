import "react-native-reanimated";

import { TrpcProvider } from "@/api";
import { AuthGuard } from "@/components/auth-guard";
import { AuthProvider } from "@/contexts/auth";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider
			value={{
				...DefaultTheme,
				colors: { ...DefaultTheme.colors, background: "#3b82f6" },
			}}
		>
			<TrpcProvider>
				<AuthProvider>
					<AuthGuard>
						<StatusBar style="light" translucent backgroundColor="#000" />
						<Stack
							screenOptions={{
								headerShown: false,
								header: () => null,
							}}
						>
							<Stack.Screen
								name="auth"
								options={{
									headerShown: false,
									title: "",
								}}
							/>
							<Stack.Screen
								name="(tabs)"
								options={{
									headerShown: false,
									title: "",
								}}
							/>

							<Stack.Screen name="+not-found" />
						</Stack>
					</AuthGuard>
				</AuthProvider>
			</TrpcProvider>
		</ThemeProvider>
	);
}
