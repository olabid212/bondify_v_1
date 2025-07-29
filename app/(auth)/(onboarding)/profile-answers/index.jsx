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
import Info from "../../../../components/ui/Info";
import AccordionItem from "../../../../components/ui/AccordionItem";

const ProfileAnswers = () => {

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
                Write your profile answers
              </Text>
              <Text className="text-app font-Satoshi">
                Select a prompt that excites you the list below and write your
                answers
              </Text>

              <View className="mt-4">
                <AccordionItem question="What’s one thing you’re currently obsessed with?">
                  <TextInput placeholder="Type your answer..." />
                </AccordionItem>

                <AccordionItem question="What makes you laugh the most...">
                  <TextInput placeholder="Type your answer..." />
                </AccordionItem>

                <AccordionItem question="What's a fun fact about you?">
                  <TextInput placeholder="Type your answer..." />
                </AccordionItem>
                <AccordionItem question="My biggest obssesion in life is...">
                  <TextInput placeholder="Type your answer..." />
                </AccordionItem>
                <AccordionItem question="One thing i am looking for in a partner..">
                  <TextInput placeholder="Type your answer..." />
                </AccordionItem>
              </View>
              <Info title="Pick a maximum of 3 questions for your profile" />
            </View>

            <View className="w-full items-end pb-6">
              <NextButton variant="gradient" onPress={() => router.push("/root-tabs")} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileAnswers;
