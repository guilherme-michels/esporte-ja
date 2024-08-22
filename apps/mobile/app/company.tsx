import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, SafeAreaView } from "react-native";
import { Company } from "@/schemas";

// Lista estática de empresas para exemplo
const company: Company = {
  id: "1",
  name: "Empresa A",
  slug: "empresa-a",
  avatarUrl: "https://via.placeholder.com/100",
  cityId: "1",
  createdAt: new Date(),
  updatedAt: new Date(),
  domain: "empresa-a.com",
  ownerId: "1",
};

export default function CompanyScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  if (!company) {
    return (
      <SafeAreaView className="flex-1 p-4 justify-center items-center">
        <Text className="text-lg">Empresa não encontrada</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="p-4 bg-white size-full">
        <View className="items-center mb-6">
          <Image
            source={{ uri: company.avatarUrl! }}
            className="w-24 h-24 rounded-full mb-4"
          />
          <Text className="text-2xl font-bold">{company.name}</Text>
        </View>
        <View>
          <Text className="text-lg mb-2">ID: {company.id}</Text>
          <Text className="text-lg mb-2">Slug: {company.slug}</Text>
          <Text className="text-lg mb-2">Domain: {company.domain}</Text>
          <Text className="text-lg mb-2">
            Created At: {company.createdAt.toDateString()}
          </Text>
          <Text className="text-lg mb-2">
            Updated At: {company.updatedAt.toDateString()}
          </Text>
          <Text className="text-lg mb-2">Owner ID: {company.ownerId}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
