import axios, { type AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const api = axios.create({
	baseURL: "http://localhost:3000",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

api.interceptors.request.use(
	async (config) => {
		try {
			const token = await AsyncStorage.getItem("userToken");
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
		} catch (error) {
			console.error("Erro ao recuperar token:", error);
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

api.interceptors.response.use(
	(response) => response,
	async (error: AxiosError) => {
		if (error.response) {
			switch (error.response.status) {
				case 401:
					await AsyncStorage.removeItem("userToken");
					Alert.alert("Sessão expirada", "Por favor, faça login novamente.");
					break;
				case 403:
					Alert.alert(
						"Acesso negado",
						"Você não tem permissão para realizar esta ação.",
					);
					break;
				case 404:
					Alert.alert(
						"Não encontrado",
						"O recurso solicitado não foi encontrado.",
					);
					break;
				case 500:
					Alert.alert(
						"Erro do servidor",
						"Ocorreu um erro no servidor. Tente novamente mais tarde.",
					);
					break;
				default:
					Alert.alert("Erro", "Ocorreu um erro inesperado. Tente novamente.");
			}
		} else if (error.request) {
			Alert.alert(
				"Erro de conexão",
				"Não foi possível conectar ao servidor. Verifique sua conexão com a internet.",
			);
		} else {
			Alert.alert("Erro", "Ocorreu um erro ao processar sua solicitação.");
		}

		return Promise.reject(error);
	},
);

export default api;
