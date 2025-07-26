import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import HeaderWithLogo from "../../components/headers/HeaderWithLogo";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <SafeAreaView className="flex-1 bg-app px-4">
      <HeaderWithLogo  />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="reset-password" />
        <Stack.Screen name="validation" />
        <Stack.Screen name="(onboarding)" />
      </Stack>
    </SafeAreaView>
  );
}
