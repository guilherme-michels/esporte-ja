import { Text, View } from "react-native";

export const CompanyCard = ({ onPress }: { onPress: () => void }) => {
  return (
    <View>
      <Text className="text-white text-center size-28 bg-white">Empresa</Text>
    </View>
  );
};
