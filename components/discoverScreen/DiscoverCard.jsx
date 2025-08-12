import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const DiscoverCard = ({ title, description, image, route }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(route)}
      className="bg-white rounded-xl mb-4 overflow-hidden shadow-md"
    >
      <Image source={image} className="w-full h-48" resizeMode="cover" />
      <View className="p-4">
        <Text className="text-lg font-bold text-gray-900">{title}</Text>
        <Text className="text-sm text-gray-600 mt-1">{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DiscoverCard;
