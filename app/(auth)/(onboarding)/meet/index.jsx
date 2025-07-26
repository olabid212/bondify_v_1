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
import CheckboxSelect from "../../../../components/inputs/CheckboxSelect";


const Meet = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

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
                I would like to meet
              </Text>

              <View>
                <CheckboxSelect
  
                  options={[
                    { label: "Woman", value: "woman" },
                    { label: "Man", value: "man" },
                  ]}
                  value={selectedOptions}
                  onChange={setSelectedOptions}
                  className="mt-2"
                />
              </View>
              <Info title="You can change this details later from your profile" />
            </View>

            <View className="w-full items-end pb-6">
              <NextButton
                variant="white"
                onPress={() => router.push("/preference")}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Meet;
