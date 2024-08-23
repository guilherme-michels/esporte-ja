import "react-native-reanimated";

import { Ionicons } from "@expo/vector-icons";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
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
        <Stack.Screen name="booking" options={{ headerShown: false }} />
        <Stack.Screen
          name="company"
          options={{
            title: "Centro esportivo",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#3b82f6",
            },
            headerTintColor: "#3b82f6 ",
            headerTitleStyle: {
              fontWeight: "bold",
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
          }}
        />
        <Stack.Screen name="court" options={{ headerShown: false }} />
        <Stack.Screen
          name="event"
          options={{
            title: "Evento",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#3b82f6",
            },
            headerTintColor: "#3b82f6 ",
            headerTitleStyle: {
              fontWeight: "bold",
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
          }}
        />
        <Stack.Screen name="notifications" options={{ headerShown: false }} />
        <Stack.Screen name="review-form" options={{ headerShown: false }} />
        <Stack.Screen name="reviews" options={{ headerShown: false }} />
        <Stack.Screen
          name="search-companies"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="search-events" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
