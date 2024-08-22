import { Company } from "@/schemas";
import { Text, View, TouchableOpacity, Image } from "react-native";
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
          source={{ uri: company.avatarUrl! }}
          className={"w-full h-full object-cover"}
        />
      </View>
      <Text className={"mt-2 text-center font-semibold"}>{company.name}</Text>
    </TouchableOpacity>
  );
};
