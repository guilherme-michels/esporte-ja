import { Image, Text, TouchableOpacity, View } from "react-native";

import type { Company } from "@/schemas";
interface CompanyCardProps {
	company: Company;
	onPress: () => void;
}

export const CompanyCard = ({ company, onPress }: CompanyCardProps) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<View className={"bg-white rounded-lg overflow-hidden w-40 h-24"}>
				<Image
					source={{ uri: company.logoImg! }}
					className={"w-full h-full object-cover"}
					alt="company-logo"
				/>
			</View>
			<Text className={"mt-2 text-center font-semibold"}>{company.name}</Text>
		</TouchableOpacity>
	);
};
