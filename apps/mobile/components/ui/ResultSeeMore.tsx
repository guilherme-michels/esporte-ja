import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ResultSeeMoreProps = {
	label: string;
	onPress: () => void;
};

export function ResultSeeMore({ label, onPress }: ResultSeeMoreProps) {
	return (
		<View className="flex-row justify-between w-full mb-2">
			<Text className="text-base font-extralight">{label}</Text>
			<TouchableOpacity
				style={{
					display: "flex",
					flexDirection: "row",
					gap: 2,
					justifyContent: "center",
					alignItems: "center",
				}}
				onPress={onPress}
			>
				<Text className="text-xs font-bold">Ver mais</Text>
				<Ionicons name={"arrow-forward-outline"} size={16} color={"#000"} />
			</TouchableOpacity>
		</View>
	);
}
