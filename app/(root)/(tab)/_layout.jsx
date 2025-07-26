import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function TabsLayout() {
  return (
    <View className='bg-app flex-1 px-4'>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" />
        <Stack.Screen name="chats" />
        <Stack.Screen name="discover" />
        <Stack.Screen name="matches" />
        <Stack.Screen name="profile" />
      </Stack>
    </View>
  );
}