import { Button } from "@/components/Button";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  useColorScheme,
  TouchableOpacity,
} from "react-native";

interface Company {
  id: string;
  name: string;
  logoUrl: string;
}

const companies: Company[] = [
  { id: "1", name: "Empresa A", logoUrl: "https://via.placeholder.com/100" },
  { id: "2", name: "Empresa B", logoUrl: "https://via.placeholder.com/100" },
  { id: "3", name: "Empresa C", logoUrl: "https://via.placeholder.com/100" },
  { id: "4", name: "Empresa D", logoUrl: "https://via.placeholder.com/100" },
];

export default function HomeScreen() {
  const [location, setLocation] = useState("Lajeado, RS");

  const changeLocation = () => {
    setLocation("Porto Alegre, RS");
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="p-4 flex-row justify-between">
        <Text className="text-red-500 text-xl mb-4">
          Localidade: {location}
        </Text>

        <TouchableOpacity className="text-zinc-800 text-center flex">
          <Text>teste</Text>
          <Ionicons name={"arrow-forward-outline"} size={18} color={"#000"} />
        </TouchableOpacity>
      </View>

      <View className="mt-4">
        <FlatList
          data={companies}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => (
            <CompanyCard onPress={() => console.log(item)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="gap-4"
        />
      </View>
    </SafeAreaView>
  );
}
