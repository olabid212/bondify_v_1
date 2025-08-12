import { View } from "react-native";
import React from "react";
import { Stack, useSegments } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AccountSetupHeader from "../../../components/headers/SetupAccountHeader";
import { ProgressBar } from "../../../components/ui/ProgressBar";

export default function OnboardingLayout() {
  const segments = useSegments(); // example: ['auth', '(onboarding)', 'gender']
  const currentStep = segments[segments.length - 1];

  const steps = [
    "agreement",
    "username",
    "age",
    "height",
    "gender",
    "meet",
    "marital-status",
    "kids",
    "preference",
    "religion",
    "religion-question",
    "education",
    "occupation",
    "smoke",
    "drink",
    "about",
    "interests",
    "upload-photo",
    "profile-answers",
  ];

  const currentIndex = steps.indexOf(currentStep);
  const progress = (currentIndex + 1) / steps.length;

  return (
    <View className="flex-1 bg-white">
      <AccountSetupHeader title="Account Setup" />
      {steps.includes(currentStep) && <ProgressBar progress={progress} />}

      <Stack screenOptions={{ headerShown: false }}>
        {steps.map((step) => (
          <Stack.Screen key={step} name={step} />
        ))}
        <Stack.Screen name="location" />
      </Stack>
    </View>
  );
}
