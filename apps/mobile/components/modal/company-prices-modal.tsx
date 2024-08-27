import { Modal, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface PriceInfo {
	sport: string;
	normalPrice: number;
	peakPrice: number;
}

interface CompanyPricesModalProps {
	isVisible: boolean;
	onClose: () => void;
	prices: PriceInfo[];
}

const CompanyPricesModal: React.FC<CompanyPricesModalProps> = ({
	isVisible,
	onClose,
	prices,
}) => {
	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={isVisible}
			onRequestClose={onClose}
		>
			<View className="flex-1 justify-center items-center bg-[#00000059]">
				<View className="bg-white rounded-3xl p-5 w-11/12 max-h-[80%] shadow-lg">
					<TouchableOpacity
						className="absolute right-3 top-3 z-10"
						onPress={onClose}
					>
						<Ionicons name="close" size={24} color="black" />
					</TouchableOpacity>
					<Text className="text-2xl font-bold mb-4 text-center">
						Preços das Quadras
					</Text>
					<ScrollView>
						{prices.map((price) => (
							<View
								key={price.sport}
								className="mb-5 border-b border-gray-200 pb-3"
							>
								<Text className="text-lg font-bold mb-1">{price.sport}</Text>
								<View className="flex-row justify-between mb-1">
									<Text className="text-base">Horário Normal:</Text>
									<Text className="text-base font-semibold">
										R$ {price.normalPrice.toFixed(2)}
									</Text>
								</View>
								<View className="flex-row justify-between">
									<Text className="text-base">Horário de Pico:</Text>
									<Text className="text-base font-semibold">
										R$ {price.peakPrice.toFixed(2)}
									</Text>
								</View>
							</View>
						))}
					</ScrollView>
				</View>
			</View>
		</Modal>
	);
};

export default CompanyPricesModal;
