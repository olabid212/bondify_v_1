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

import RadioSelect from "../../../../components/inputs/RadioSelect";
import Info from "../../../../components/ui/Info";


const Drink = () => {
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
          Do you Drink?
              </Text>

              <View>
                <RadioSelect
                  value={gender}
                  onChange={setGender}
                  options={[
                    { label: "No, i don't drink", value: "no" },
                    { label: "Socially", value: "socially" },
                    { label: "Occassionally", value: "occassionally" },
                    { label: "Often", value: "often" },
                    { label: "A lot", value: "a-lot" },
                  ]}
                  className="mt-2"
                />
              </View>
              <Info title="You can change this details later from your profile" />
            </View>

            <View className="w-full items-end pb-6">
              <NextButton
                variant="gradient"
                onPress={() => router.push("/about")}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Drink;
