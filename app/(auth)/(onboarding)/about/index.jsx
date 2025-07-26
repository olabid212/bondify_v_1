import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import NextButton from "../../../../components/ui/NextButton";
import { useRouter } from "expo-router";
import Info from "../../../../components/ui/Info";

const About = () => {
  const [aboutText, setAboutText] = useState("");
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-app">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 px-3">
            <View className="flex-1 mt-8">
              <Text className="text-[25px] font-SatoshiBold text-white mb-2">
                Write a small intro about yourself
              </Text>

              <TextInput
                placeholder="Write your cool intro here..."
                placeholderTextColor="#999"
                value={aboutText}
                onChangeText={setAboutText}
                multiline
                numberOfLines={6}
                style={{
                  backgroundColor: "#1E1E1E",
                  color: "#FFF",
                  padding: 16,
                  borderRadius: 12,
                  textAlignVertical: "top",
                  fontSize: 16,
                }}
              />
            </View>

            <View className="w-full items-end pb-6">
              <NextButton
                variant="white"
                onPress={() => {
                  // Optional: validate before routing
                  router.push("/interests");
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default About;
