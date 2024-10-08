import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet } from "react-native";

interface LocalityOptionsModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function LocalityOptionsModal({
  opened,
  onClose,
}: LocalityOptionsModalProps) {

  //TODO: DINAMIZAR
  const countryStates = [
    {uf: 'RS'},
    {uf: 'SC'},
  ];

  const [cities, setCities] = useState([
    {name: 'Selecione um estado'}
  ]);

  const loadCities = (uf: string) => {
    
    //TODO: DINAMIZAR
    if (uf === 'RS') {
      setCities([
        {name: 'Lajeado'},
        {name: 'Estrela'},
      ]);
    } else {
      setCities([
        {name: 'Florianópolis'},
        {name: 'Blumenau'},
      ]);
    }
  };

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
            <SelectDropdown
              data={countryStates}
              onSelect={(selectedItem, index) => {
                loadCities(selectedItem.uf);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={styles.dropdownButtonStyle}>
                    <Text style={styles.dropdownButtonTxtStyle}>
                      {(selectedItem && selectedItem.uf) || 'Selecione'}
                    </Text>
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
                    <Text style={styles.dropdownItemTxtStyle}>{item.uf}</Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
            />
            </TouchableOpacity>
          </View>

          <View className="mb-6">
            <Text className="text-gray-600 mb-2">Selecione sua cidade</Text>
            <TouchableOpacity className="border border-gray-300 rounded p-2">
            <SelectDropdown
              data={cities}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={styles.dropdownButtonStyle}>
                    <Text style={styles.dropdownButtonTxtStyle}>
                      {(selectedItem && selectedItem.name) || 'Selecione'}
                    </Text>
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
                    <Text style={styles.dropdownItemTxtStyle}>{item.name}</Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
              />
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

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});