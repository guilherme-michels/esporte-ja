import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
} from 'react-native';
import { trpc } from '@/api';

const EditProfileScreen = () => {
  const utils = trpc.useContext();

  //Dinamizar o id do usuário
  const { data: userData, isLoading } = trpc.user.getById.useQuery({ id: '1' });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (userData) {
      setName(userData.name || '');
      setEmail(userData.email || '');
    }
  }, [userData]);

  const updateUser = trpc.user.update.useMutation({
    onSuccess: () => {
      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    },
    onError: () => {
      Alert.alert('Erro', 'Não foi possível atualizar o perfil.');
    },
  });

  const handleSave = () => {
    //@ts-ignore
    updateUser.mutate({ id: userData.id, name, email });
  };

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-white">
        <Text>Carregando...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 px-4 py-6 bg-white">
      <View className="mb-4">
        <Text className="text-lg">Nome</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          className="border-b border-gray-300 p-2"
        />
      </View>
      <View className="mb-4">
        <Text className="text-lg">Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          className="border-b border-gray-300 p-2"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity
        onPress={handleSave}
        className="bg-blue-600 p-4 rounded-md"
      >
        <Text className="text-white text-center text-lg">Salvar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditProfileScreen;