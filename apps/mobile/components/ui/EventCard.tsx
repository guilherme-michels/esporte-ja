import {
	ActivityIndicator,
	Image,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

import type { Event } from "@/schemas";
import { formatDate } from "@/utils/utils";
import { useState } from "react";

interface EventCardProps {
	event: Event;
	onPress: () => void;
}

export const EventCard = ({ event, onPress }: EventCardProps) => {
	const [imageLoading, setImageLoading] = useState(true);

	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				flex: 1,
				margin: 8,
				height: 200,
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "flex-start",
			}}
			className="bg-white rounded-lg shadow-sm"
		>
			<View className="w-1/2 h-full relative">
				{imageLoading && (
					<View className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-l-lg">
						<ActivityIndicator size="small" color="#3b82f6" />
					</View>
				)}
				<Image
					source={{
						uri: event.imageUrl || "https://via.placeholder.com/400x300",
					}}
					className="w-full h-full rounded-l-lg"
					resizeMode="cover"
					onLoadStart={() => setImageLoading(true)}
					onLoadEnd={() => setImageLoading(false)}
				/>
			</View>

			<View className="flex-1 ml-4 mt-4 pr-4">
				<Text className="text-lg font-bold text-gray-900" numberOfLines={2}>
					{event.title}
				</Text>
				<Text className="text-sm text-gray-700 mt-1">
					{formatDate(event.dateTime)}
				</Text>
				<Text className="text-sm text-gray-500 mt-1" numberOfLines={3}>
					{event.description}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
