import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tab)" />
      <Stack.Screen name="splash-screen" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="welcome" />
    </Stack>
  );
}