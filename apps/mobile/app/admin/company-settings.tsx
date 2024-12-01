import { OpeningHoursForm } from "@/components/OpeningHoursForm";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";

export default function CompanySettingsScreen() {
	const { companyId } = useLocalSearchParams<{ companyId: string }>();

	return (
		<SafeAreaView className="flex-1">
			<ScrollView>
				<OpeningHoursForm companyId={companyId as string} />
			</ScrollView>
		</SafeAreaView>
	);
}
