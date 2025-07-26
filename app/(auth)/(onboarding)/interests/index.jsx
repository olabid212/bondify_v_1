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
  TextInput
} from "react-native";
import NextButton from "../../../../components/ui/NextButton";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
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
  // const [searchTerm, setSearchTerm] = useState("");
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
    <SafeAreaView className="flex-1 bg-app">
   
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 px-3">
            <View className="mt-8">
              <Text className="text-[25px] font-SatoshiBold text-white mb-4">
                What are your interests?
              </Text>

              {/* Search 
              <View className="flex-row items-center bg-app border border-[#A4A4A4] rounded-lg px-4 py-3 mb-8">
                <Ionicons name="search" size={20} color="#A4A4A4" />
                <TextInput
                  placeholder="Search your interests"
                  placeholderTextColor="#A4A4A4"
                  className="ml-2 flex-1 text-white"
                  onChangeText={setSearchTerm}
                  value={searchTerm}
                />
              </View>*/}
            </View>

            <ScrollView
              className="flex-1"
             showsVerticalScrollIndicator={false}
            >
              {INTEREST_CATEGORIES.map((category) => (
                <View key={category.title} className="mb-6">
                  <Text className="text-white font-SatoshiBold text-base mb-3">
                    {category.title}
                  </Text>
                  <View className="flex-row flex-wrap gap-2">
                    {category.items.map((interest) => {
                      const selected = selectedInterests.includes(interest);
                      return (
                        <TouchableOpacity
                          key={interest}
                          onPress={() => toggleInterest(interest)}
                          className={`px-4 py-2 rounded-full ${
                            selected
                              ? "border border-primary bg-app text-white"
                              : "bg-gray-400/20"
                          }`}
                        >
                          <Text
                            className={`font-Satoshi ${
                              selected ? "text-white" : "text-white"
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

            <View className="w-full items-end pb-6">
              <NextButton
                variant="white"
                onPress={() => {
                  // You can handle selectedInterests here before moving
                  router.push("/upload-photo");
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>

    </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Interests;
