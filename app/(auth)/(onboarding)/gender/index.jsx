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
import TextInput from "../../../../components/inputs/TextInput";

import RadioSelect from "../../../../components/inputs/RadioSelect";
import Info from "../../../../components/ui/Info";


const Gender = () => {
  const [gender, setGender] = useState("");

  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-app">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 px-2">
            <View className="flex-1 mt-8">
              <Text className="text-[25px] font-SatoshiBold text-white mb-2">
                What’s Your Gender?
              </Text>
              <Text className="text-white font-Satoshi">
                Tell us about your gender
              </Text>

              <View>
                <RadioSelect
                  value={gender}
                  onChange={setGender}
                  options={[
                    { label: "Man", value: "man" },
                    { label: "Woman", value: "woman" },
                  ]}
                  className="mt-2"
                />
              </View>
              <Info title="You can change this details later from your profile" />
            </View>

            <View className="w-full items-end pb-6">
              <NextButton
                variant="white"
                onPress={() => router.push("/meet")}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Gender;
