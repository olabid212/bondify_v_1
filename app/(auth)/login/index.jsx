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
import GlobalPhoneInput from "../../../components/inputs/PhoneInput";
import { Image } from "expo-image";
import NextButton from "../../../components/ui/NextButton";
import HeaderWithLogo from "../../../components/headers/HeaderWithLogo";
import { useRouter } from "expo-router";

const PhoneLogin = () => {
  const handlePhoneChange = (phone) => {
    console.log("Formatted Phone Number:", phone);
  };

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
              <Text className="text-2xl font-SatoshiBold text-black mb-2">
                My number is
              </Text>
              <Text className="mb-7 text-black font-SatoshiMedium">
                We'll need your phone number to send an OTP for verification.
              </Text>

              <GlobalPhoneInput
                onChangePhone={(phone) => console.log(phone)}
                onChangeCountry={(country) => console.log(country)}
              />
            </View>

            <View className="w-full items-end pb-6">
              <NextButton
                variant="gradient"
                onPress={() => router.push("/validation")}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PhoneLogin;
