import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getToken() {
	try {
		const token = await AsyncStorage.getItem("@EsporteJa:token");
		console.log("\n=== DEBUG getToken ===");
		console.log(
			"Token recuperado:",
			token ? `${token.substring(0, 20)}...` : "nenhum",
		);

		if (!token) {
			console.log("❌ Nenhum token encontrado no AsyncStorage");
			return null;
		}

		return `Bearer ${token}`;
	} catch (error) {
		console.error("❌ Erro ao recuperar token:", error);
		return null;
	}
}

export function setToken(token: string): Promise<void> {
	return AsyncStorage.setItem("@esporte-ja/token", token);
}
