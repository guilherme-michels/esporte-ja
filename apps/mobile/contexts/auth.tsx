import { trpc } from "@/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

interface User {
	id: string;
	name: string;
	email: string;
}

interface AuthContextData {
	user: User | null;
	isLoading: boolean;
	signIn: (email: string, password: string) => Promise<void>;
	signUp: (name: string, email: string, password: string) => Promise<void>;
	signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const signInMutation = trpc.auth.signIn.useMutation();
	const signUpMutation = trpc.auth.signUp.useMutation();

	useEffect(() => {
		loadStorageData();
	}, []);

	async function loadStorageData() {
		try {
			const storedUser = await AsyncStorage.getItem("@EsporteJa:user");
			const storedToken = await AsyncStorage.getItem("@EsporteJa:token");

			if (storedUser && storedToken) {
				setUser(JSON.parse(storedUser));
			}
		} catch (error) {
			console.error("Erro ao carregar dados do storage:", error);
		} finally {
			setIsLoading(false);
		}
	}

	async function signIn(email: string, password: string) {
		try {
			console.log("Tentando fazer login...", { email });

			// Verifique se a mutação existe
			if (!signInMutation) {
				console.error("signInMutation não está definida");
				return;
			}

			console.log("Mutation disponível, tentando executar...");

			const response = await signInMutation.mutateAsync({
				email,
				password,
			});

			console.log("Login bem sucedido:", response);

			setUser(response.user);
			await AsyncStorage.setItem(
				"@EsporteJa:user",
				JSON.stringify(response.user),
			);
			await AsyncStorage.setItem("@EsporteJa:token", response.token);
		} catch (error) {
			console.error("Erro detalhado no login:", {
				error,
				type: typeof error,
				message: error instanceof Error ? error.message : "Unknown error",
				stack: error instanceof Error ? error.stack : undefined,
			});
			throw error;
		}
	}

	async function signUp(name: string, email: string, password: string) {
		try {
			const response = await signUpMutation.mutateAsync({
				name,
				email,
				password,
			});

			setUser({
				id: response.user.id,
				name: response.user.name,
				email: response.user.email,
			});
			await AsyncStorage.setItem(
				"@EsporteJa:user",
				JSON.stringify(response.user),
			);
			await AsyncStorage.setItem("@EsporteJa:token", response.token);
		} catch (error) {
			console.error("Erro no cadastro:", error);
			throw error;
		}
	}

	async function signOut() {
		setUser(null);
		await AsyncStorage.removeItem("@EsporteJa:user");
		await AsyncStorage.removeItem("@EsporteJa:token");
	}

	return (
		<AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth deve ser usado dentro de um AuthProvider");
	}
	return context;
}
