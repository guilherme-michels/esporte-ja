import "react-native-reanimated";

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
			<StatusBar style="light" translucent backgroundColor="#000" />
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />

				<Stack.Screen name="+not-found" />
			</Stack>
		</ThemeProvider>
	);
}
