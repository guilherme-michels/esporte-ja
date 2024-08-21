import { CompanyCard } from "@/components/ui/CompanyCard";
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { useWindowDimensions } from "react-native";

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
  const { width } = useWindowDimensions();

  const changeLocation = () => {
    setLocation("Porto Alegre, RS");
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="p-4">
        <Text className="text-red-500 text-xl mb-4">
          Localidade: {location}
        </Text>
        <TouchableOpacity
          onPress={changeLocation}
          className="bg-blue-500 p-2 rounded"
        >
          <Text className="text-white text-center">Trocar Localidade</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-4">
        <FlatList
          data={companies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CompanyCard onPress={() => console.log(item)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
