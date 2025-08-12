import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import NextButton from "../../../../components/ui/NextButton";
import { useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const INTEREST_CATEGORIES = [
  {
    title: "🧠 Traits",
    items: ["Empathy", "Humor", "Confidence", "Kindness"],
  },
  {
    title: "🎮 Entertainment",
    items: ["Gaming", "Streaming", "Board Games", "Karaoke"],
  },
  {
    title: "⚽ Sports",
    items: ["Football", "Basketball", "Tennis", "Hiking", "Running"],
  },
  {
    title: "🎨 Art",
    items: ["Drawing", "Painting", "Photography", "Sculpting"],
  },
  {
    title: "📚 Reading",
    items: ["Fiction", "Non-fiction", "Manga", "Comics"],
  },
  {
    title: "🎬 Films and TV",
    items: ["Movies", "TV Shows", "Documentaries", "Anime"],
  },
  {
    title: "💡 Creativity",
    items: ["Writing", "Design", "DIY Projects", "Coding"],
  },
  {
    title: "🍔 Food and Drinks",
    items: ["Cooking", "Baking", "Wine Tasting", "Coffee Brewing"],
  },
  {
    title: "🐶 Pets",
    items: ["Dogs", "Cats", "Birds", "Aquariums"],
  },
  {
    title: "🎉 Hanging out",
    items: ["Travel", "Partying", "Picnics", "Volunteering"],
  },
];

const Interests = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const router = useRouter();

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="flex-1 px-4">
              <Text className="text-[25px] font-SatoshiBold text-app mt-8 mb-4">
                What are your interests?
              </Text>

              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingBottom: 90,
                  paddingTop: 4,
                }}
              >
                {INTEREST_CATEGORIES.map((category) => (
                  <View key={category.title} className="mb-6">
                    <Text className="text-app font-SatoshiBold text-lg mb-3">
                      {category.title}
                    </Text>
                    <View className="flex-row flex-wrap gap-2">
                      {category.items.map((interest) => {
                        const selected = selectedInterests.includes(interest);
                        return (
                          <TouchableOpacity
                            key={interest}
                            onPress={() => toggleInterest(interest)}
                            className={`px-4 py-2 rounded-full border ${
                              selected
                                ? "bg-[#FF0066] border-[#FF0066]"
                                : "bg-white border-[#D1D1D1]"
                            }`}
                          >
                            <Text
                              className={`font-SatoshiMedium ${
                                selected ? "text-white" : "text-app"
                              }`}
                            >
                              {interest}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </View>
                ))}
              </ScrollView>

              <View className="absolute bottom-6 right-4">
                <NextButton
                  variant="gradient"
                  onPress={() => router.push("/upload-photo")}
                  disabled={selectedInterests.length === 0}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Interests;
