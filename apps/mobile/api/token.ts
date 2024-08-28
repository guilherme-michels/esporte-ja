import AsyncStorage from "@react-native-async-storage/async-storage";

export function getToken(): Promise<string | null> {
	return AsyncStorage.getItem("@esporte-ja/token");
}

export function setToken(token: string): Promise<void> {
	return AsyncStorage.setItem("@esporte-ja/token", token);
}
