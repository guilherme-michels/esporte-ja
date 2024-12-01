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
import { View } from "react-native";

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
		<View style={{ flex: 1 }}>
			<ThemeProvider
				value={{
					...DefaultTheme,
					colors: {
						...DefaultTheme.colors,
						background: "white",
						primary: "#3b82f6",
						card: "white",
						text: "black",
						border: "#e5e7eb",
					},
				}}
			>
				<TrpcProvider>
					<AuthProvider>
						<AuthGuard>
							<StatusBar style="dark" />
							<Stack
								screenOptions={{
									headerShown: false,
									contentStyle: { backgroundColor: "white" },
								}}
							>
								<Stack.Screen name="auth" />
								<Stack.Screen name="(tabs)" />
								<Stack.Screen name="+not-found" />
							</Stack>
						</AuthGuard>
					</AuthProvider>
				</TrpcProvider>
			</ThemeProvider>
		</View>
	);
}
