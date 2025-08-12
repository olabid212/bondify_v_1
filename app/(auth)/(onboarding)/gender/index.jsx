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
                What’s Your Gender?
              </Text>
              <Text className="text-app font-Satoshi">
                Tell us about your gender
              </Text>

              <View>
                <RadioSelect
                  value={gender}
                  onChange={setGender}
                  options={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                  ]}
                  className="mt-2"
                />
              </View>
              <Info title="You can change this details later from your profile" />
            </View>

            <View className="w-full items-end pb-6">
              <NextButton
                variant="gradient"
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
