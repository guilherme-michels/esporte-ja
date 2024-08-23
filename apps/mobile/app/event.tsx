import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Event } from "@/schemas";

const event: Event = {
  companyId: "1",
  createdAt: new Date(),
  date: new Date(),
  id: "1",
  title: "Torneio de Beach Tennis - Dinápoli",
  dateTime: new Date(),
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  type: "TOURNAMENT",
};

export default function EventScreen() {
  const router = useRouter();

  const { id } = useLocalSearchParams<{ id: string }>();

  if (!event) {
    return (
      <SafeAreaView className="flex-1 p-4 justify-center items-center">
        <Text className="text-lg">Evento não encontrado</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="px-4 bg-white size-full">
        <View className="mt-4 bg-white rounded-lg shadow-md mb-4">
          <Image
            source={{
              uri: "https://itaguara.com/wp-content/uploads/2023/06/inscricoes-abertas.jpg",
            }}
            className="w-full h-60 rounded-lg"
            resizeMode="cover"
          />
          <Text className="text-2xl font-bold text-gray-800 mt-4">
            {event.title}
          </Text>

          <View className="flex gap-4 flex-col mt-2 items-center">
            <Text className="text-gray-600">{event.description}</Text>

            <View className="flex-row items-center justify-center w-full gap-4">
              <View className="flex-row items-center gap-1">
                <Ionicons
                  name={"calendar-outline"}
                  size={20}
                  color={"#000000"}
                />
                <Text className="text-base font-extralight">
                  {event.date.toLocaleDateString()}
                </Text>
              </View>

              <View className="flex-row items-center gap-1">
                <Ionicons name={"time-outline"} size={20} color={"#000000"} />
                <Text className="text-base font-extralight">
                  {event.dateTime.toLocaleTimeString().slice(0, 5)}
                </Text>
              </View>

              <View className="flex-row items-center gap-1">
                <Ionicons name={"cash-outline"} size={20} color={"#000000"} />
                <Text className="text-base font-extralight">
                  R$ 50,00 (Dupla)
                </Text>
              </View>
            </View>
          </View>

          <View className="mt-12">
            <Text className="text-base font-extralight">Regras do Evento</Text>
          </View>
          <View className="mt-4">
            <Text className="text-base font-extralight">Premiações</Text>
          </View>

          <TouchableOpacity
            style={{
              marginTop: 40,
              justifyContent: "center",
            }}
            onPress={() => router.push(`/find-players`)}
          >
            <View className="ml-2">
              <Text className="text-zinc-500 text-sm">
                Não possui uma dupla mas gostaria de participar?
              </Text>

              <Text className="text-blue-600 text-sm">
                Com Esporte Já, você pode se conectar com outros jogadores da
                sua categoria para participar de eventos e evoluir dentro do
                esporte!
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
