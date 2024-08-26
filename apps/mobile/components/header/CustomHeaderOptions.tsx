import { Ionicons } from "@expo/vector-icons";

interface CustomHeaderOptionsProps {
  title: string;
  onPress: () => void;
}

export const CustomHeaderOptions = ({
  title,
  onPress,
}: CustomHeaderOptionsProps) => {
  return {
    title,
    headerShown: true,
    headerStyle: {
      backgroundColor: "#3b82f6",
    },
    headerTintColor: "#3b82f6 ",
    headerTitleStyle: {
      color: "#fff",
      fontSize: 14,
    },
    headerLeft: () => (
      <Ionicons
        name={"arrow-back-outline"}
        size={24}
        color={"#fff"}
        onPress={onPress}
      />
    ),
  };
};
