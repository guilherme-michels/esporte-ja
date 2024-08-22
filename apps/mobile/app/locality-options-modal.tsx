import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface LocalityOptionsModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function LocalityOptionsModal({
  opened,
  onClose,
}: LocalityOptionsModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={opened}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-[#00000059]">
        <View className="bg-white rounded-lg p-6 w-4/5 max-w-md shadow-lg">
          <Text className="text-lg font-bold text-gray-800 mb-4">
            Alterar Localização
          </Text>

          <View className="mb-6">
            <Text className="text-gray-600 mb-2">Selecione seu estado</Text>
            <TouchableOpacity className="border border-gray-300 rounded p-2">
              <Text className="text-gray-700">Estado</Text>
            </TouchableOpacity>
          </View>

          <View className="mb-6">
            <Text className="text-gray-600 mb-2">Selecione sua cidade</Text>
            <TouchableOpacity className="border border-gray-300 rounded p-2">
              <Text className="text-gray-700">Cidade</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-col justify-between items-center mt-4 gap-2">
            <TouchableOpacity
              onPress={onClose}
              style={{
                backgroundColor: "#3b82f6",
                borderRadius: 10,
                width: "100%",
                height: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text className="text-center font-bold text-white">Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onClose}
              style={{
                backgroundColor: "#ececec",
                borderRadius: 10,
                width: "100%",
                height: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text className="text-center text-gray-500">Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
