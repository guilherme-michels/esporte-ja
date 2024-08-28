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
					source={{
						uri: "https://scontent.fcxj13-1.fna.fbcdn.net/v/t39.30808-6/275041833_112047398079581_4432519264775942829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=o9iqd5D8I0gQ7kNvgGt3bp2&_nc_ht=scontent.fcxj13-1.fna&oh=00_AYAjHSyWo5lPXz4H0V4J283Q7eewNhwtBLnHGYb8JA-y-A&oe=66CD87D2",
					}}
					className={"w-full h-full object-cover"}
					alt="company-logo"
				/>
			</View>
			<Text className={"mt-2 text-center font-semibold"}>{company.name}</Text>
		</TouchableOpacity>
	);
};
