import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface SportTypeBadgeProps {
  sportType: string;
  selected: boolean;
  onPress: () => void;
}

export function SportTypeBadge({
  sportType,
  selected,
  onPress,
}: SportTypeBadgeProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={`${
          selected ? "bg-blue-500" : "bg-zinc-100"
        } justify-center items-center px-2 py-2 rounded-full border-[1px] border-zinc-300`}
      >
        <Text
          className={`${selected ? "text-white" : "text-zinc-400"} text-xs`}
        >
          {sportType}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
