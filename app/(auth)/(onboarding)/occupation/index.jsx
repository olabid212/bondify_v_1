import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import NextButton from "../../../../components/ui/NextButton";
import { useRouter } from "expo-router";
import TextInput from "../../../../components/inputs/TextInput"


const Occupation = () => {


  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      >
      
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="flex-1 px-2">
              <View className="flex-1 mt-8">
                <Text className="text-[25px] font-SatoshiBold text-app mb-4">
                  Whats your occupation?
                </Text>

              <TextInput placeholder="input your occupation" />
              
              </View>

              <View className="w-full items-end pb-6">
                <NextButton
                  variant="gradient"
                  onPress={() => router.push("/smoke")}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
          
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Occupation;
