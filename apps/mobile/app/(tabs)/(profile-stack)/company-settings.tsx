import { trpc } from "@/api";
import { CompanyForm } from "@/components/CompanyForm";
import { CourtsManager } from "@/components/CourtsManager";
import { OpeningHoursForm } from "@/components/OpeningHoursForm";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function CompanySettingsScreen() {
	const { companyId } = useLocalSearchParams<{ companyId: string }>();
	const { data: company, isLoading } = trpc.company.getById.useQuery({
		id: companyId as string,
	});

	if (isLoading) {
		return (
			<SafeAreaView className="flex-1">
				<Text className="p-4">Carregando...</Text>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView className="flex-1">
			<ScrollView>
				<View className="p-4">
					<Text className="text-2xl font-bold mb-6">
						Configurações da Empresa
					</Text>

					<View className="mb-8">
						<Text className="text-lg font-semibold mb-4">
							Informações Básicas
						</Text>
						<CompanyForm
							companyId={companyId as string}
							initialData={company}
						/>
					</View>

					<View className="mb-8">
						<Text className="text-lg font-semibold mb-4">
							Horários de Funcionamento
						</Text>
						<OpeningHoursForm companyId={companyId as string} />
					</View>

					<View className="mb-8">
						<Text className="text-lg font-semibold mb-4">
							Gerenciar Quadras
						</Text>
						<CourtsManager companyId={companyId as string} />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
