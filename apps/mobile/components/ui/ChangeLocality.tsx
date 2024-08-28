import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ChangeLocalityProps = {
	location: string;
	onPress: () => void;
};

export function ChangeLocality({ location, onPress }: ChangeLocalityProps) {
	return (
		<View className="flex-row justify-between w-full bg-blue-500 p-4 rounded-lg">
			<View className="flex-row justify-between items-center gap-1">
				<Ionicons name={"navigate-circle-outline"} size={16} color={"#fff"} />
				<Text className="text-white text-xl">{location}</Text>
			</View>

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
				<Text className="text-sm font-bold text-white">ALTERAR</Text>
				<Ionicons name={"arrow-forward-outline"} size={16} color={"#fff"} />
			</TouchableOpacity>
		</View>
	);
}
