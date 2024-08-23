import { Image, Text, TouchableOpacity, View } from "react-native";

import { Event } from "@/schemas";

interface EventCardProps {
  event: Event;
  onPress: () => void;
}

export const EventCard = ({ event, onPress }: EventCardProps) => {
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
    >
      <Image
        source={{
          uri: "https://itaguara.com/wp-content/uploads/2023/06/inscricoes-abertas.jpg",
        }}
        className="w-1/2 h-full"
        resizeMode="contain"
      />

      <View className="flex-1 ml-4 mt-4">
        <Text className="text-lg font-bold text-gray-900">{event.title}</Text>
        <Text className="text-sm text-gray-700 mt-1">
          {event.dateTime.toLocaleDateString()}
        </Text>
        <Text className="text-sm text-gray-500 mt-1">{event.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
