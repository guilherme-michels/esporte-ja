import { Event } from "@/schemas";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";

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
      }}
    >
      <View className="bg-blue-500 rounded p-4 flex-row justify-between h-[120px]" />
    </TouchableOpacity>
  );
};
