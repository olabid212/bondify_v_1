import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="about" />
      <Stack.Screen name="gender" />
      <Stack.Screen name="interests" />
      <Stack.Screen name="meet" />
      <Stack.Screen name="username" />
      <Stack.Screen name="preference" />
      <Stack.Screen name="age" />
      <Stack.Screen name="upload-photo" />
      <Stack.Screen name="questions" />
      <Stack.Screen name="profile-answers" />
    </Stack>
  );
}
