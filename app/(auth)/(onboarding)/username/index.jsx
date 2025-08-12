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
import NextButton from "../../../../components/ui/NextButton";
import { useRouter } from "expo-router";
import TextInput from "../../../../components/inputs/TextInput";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../../../../constant/colors";
import Info from "../../../../components/ui/Info";

const Username = () => {

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
              <Text className="text-[25px] font-SatoshiBold text-app mb-2">
                What is your name?
              </Text>
              <Text className="text-app font-Satoshi">
                Let's Get to Know Each Other
              </Text>
              <View>
                <TextInput
                  placeholder="First name"
                  className="mt-4"
                  keyboardType="default"
                />
                <TextInput placeholder="Last name" className="" />
              </View>
              <Info title="This would be used to match people" />
            </View>

            <View className="w-full items-end pb-6">
              <NextButton
                variant="gradient"
                onPress={() => router.push("/age")}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Username;
