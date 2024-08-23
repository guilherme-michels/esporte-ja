import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

import { SportTypeBadge } from "@/components/ui/SportTypeBadge";
import { Company, SportTypeSchema } from "@/schemas";

const company: Company = {
  id: "1",
  name: "Arena 08",
  slug: "empresa-a",
  avatarUrl:
    "https://scontent.fcxj13-1.fna.fbcdn.net/v/t39.30808-6/275041833_112047398079581_4432519264775942829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=o9iqd5D8I0gQ7kNvgGt3bp2&_nc_ht=scontent.fcxj13-1.fna&oh=00_AYAjHSyWo5lPXz4H0V4J283Q7eewNhwtBLnHGYb8JA-y-A&oe=66CD87D2",
  cityId: "1",
  createdAt: new Date(),
  updatedAt: new Date(),
  domain: "empresa-a.com",
  ownerId: "1",
};

export default function CompanyScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const sportTypes = SportTypeSchema.options as string[];
  const [selectedSportType, setSelectedSportType] = useState<string | null>(
    null
  );

  if (!company) {
    return (
      <SafeAreaView className="flex-1 p-4 justify-center items-center">
        <Text className="text-lg">Empresa não encontrada</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="px-4 bg-white size-full">
        <View className="mt-4 bg-white rounded-lg shadow-md mb-4">
          <Image
            source={{ uri: company.avatarUrl! }}
            className="w-full h-60 rounded-lg"
            resizeMode="cover"
            alt="event-image"
          />
          <View className="flex-row justify-between items-center mt-4">
            <Text className="text-2xl font-bold mt-2">{company.name}</Text>
            <TouchableOpacity
              onPress={() => router.push(`/reviews?id=${company.id}`)}
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text className="text-sm font-extralight text-zinc-800">
                (12 avaliações)
              </Text>
              <Text className="text-xl text-[#e9a20a] font-extrabold">4,8</Text>
              <Ionicons name="star" size={20} color="#e9a20a" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="border-t border-gray-200">
          <FlatList
            data={sportTypes}
            keyExtractor={(sportType) => sportType}
            renderItem={({ item: sportType }) => (
              <SportTypeBadge
                sportType={sportType}
                selected={selectedSportType === sportType}
                onPress={() =>
                  setSelectedSportType(
                    selectedSportType === sportType ? null : sportType
                  )
                }
              />
            )}
            contentContainerStyle={{ gap: 16, marginTop: 8 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
