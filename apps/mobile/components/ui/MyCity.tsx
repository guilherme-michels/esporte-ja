import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export const MyCity = () => {
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ionicons name={"alert-circle-outline"} size={32} color={"#3b82f6"} />
      <View className="ml-2">
        <Text className="text-zinc-500 text-xs">
          Ainda não existe Esporte Já na sua cidade?
        </Text>

        <Text className="text-blue-600 text-sm">
          Entre em contato conosco através do nosso Instagram!
        </Text>
      </View>
    </TouchableOpacity>
  );
};
