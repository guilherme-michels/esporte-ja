import { useAuth } from "@/contexts/auth";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
	ActivityIndicator,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

export default function SignInScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const { signIn } = useAuth();
	const router = useRouter();

	async function handleSignIn() {
		if (!email || !password) {
			setError("Preencha todos os campos");
			return;
		}

		try {
			setIsLoading(true);
			setError("");
			await signIn(email, password);
			router.replace("/(tabs)");
		} catch (err) {
			setError("Erro ao fazer login. Verifique suas credenciais.");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<View className="flex-1 bg-white justify-center">
			<View className="px-8 mb-12">
				<Text className="text-3xl font-bold text-gray-900">Bem vindo!</Text>
				<Text className="text-gray-500 mt-2">Faça login para continuar</Text>
			</View>

			<View className="px-8">
				<View className="space-y-6">
					<View>
						<Text className="text-gray-700 text-sm mb-2 font-medium">
							Email
						</Text>
						<TextInput
							className="border border-gray-300 rounded-lg p-4 bg-gray-50"
							placeholder="Digite seu email"
							placeholderTextColor="#9ca3af"
							keyboardType="email-address"
							autoCapitalize="none"
							value={email}
							onChangeText={setEmail}
						/>
					</View>

					<View className="mt-4">
						<Text className="text-gray-700 text-sm mb-2 font-medium">
							Senha
						</Text>
						<TextInput
							className="border border-gray-300 rounded-lg p-4 bg-gray-50"
							placeholder="Digite sua senha"
							placeholderTextColor="#9ca3af"
							secureTextEntry
							value={password}
							onChangeText={setPassword}
						/>
					</View>

					{error ? (
						<Text className="text-red-500 text-center mt-2">{error}</Text>
					) : null}

					<TouchableOpacity
						style={{
							backgroundColor: "#2563eb",
							borderRadius: 8,
							padding: 16,
							marginTop: 24,
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 2,
							},
							shadowOpacity: 0.25,
							shadowRadius: 3.84,
							elevation: 5,
						}}
						onPress={handleSignIn}
						disabled={isLoading}
					>
						{isLoading ? (
							<ActivityIndicator color="#fff" />
						) : (
							<Text className="text-white text-center font-semibold text-lg">
								Entrar
							</Text>
						)}
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							marginTop: 16,
						}}
						onPress={() => router.push("/auth/sign-up")}
					>
						<Text className="text-blue-600 text-center font-medium text-base">
							Não tem uma conta? Cadastre-se
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
