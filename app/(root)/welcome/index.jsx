import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import NextButton from "../../../components/ui/NextButton";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import ConfirmationScreen from "../../../components/ui/ConfirmationScreen";

const Welcome = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-app">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1">
          <ConfirmationScreen title="Yayy! your code is verified" subtitle="" />

            <View className="w-full items-end pb-6 pr-4">
              <NextButton
                variant="white"
                title="Setup account"
                onPress={() => router.push("/username")}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Welcome;
