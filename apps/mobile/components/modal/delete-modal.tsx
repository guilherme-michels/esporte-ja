import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface DeleteModalProps {
	opened: boolean;
	onClose: () => void;
}

export default function DeleteModal({ opened, onClose }: DeleteModalProps) {
	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={opened}
			onRequestClose={onClose}
		>
			<View className="flex-1 justify-center items-center bg-[#00000059]">
				<Text>a</Text>
			</View>
		</Modal>
	);
}
