import React from 'react';
import { SafeAreaView, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { trpc } from '@/api';

export default function NotificationsScreen() {
    //Dinamizar o id do usuário
    const { data: notifications, isLoading, error } = trpc.notification.getAll.useQuery({ id: '1' });

    if (isLoading) {
        return (
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
                <ActivityIndicator size="large" color="#0000ff" />
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
                <Text>Erro ao carregar notificações</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="p-4">
                <Text className="text-xl font-bold">Notificações</Text>
                <FlatList
                    data={notifications}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View className="mt-4">
                            <Text className="font-semibold">{item.message}</Text>
                            <Text>{item.message}</Text>
                            <Text className="text-gray-500 text-xs">{item.createdAt}</Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}