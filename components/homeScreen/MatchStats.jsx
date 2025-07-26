import { View, Text } from "react-native";
import React from "react";

const MatchStats = ({ matches, likes }) => (
  <View className="flex-row justify-center gap-7 py-4 bg-white border-b border-gray-100">
    <View className="items-center">
      <Text className="text-2xl font-bold text-pink-600">{matches}</Text>
      <Text className="text-sm text-gray-500">Matches</Text>
    </View>
    <View className="items-center">
      <Text className="text-2xl font-bold text-purple-600">{likes}</Text>
      <Text className="text-sm text-gray-500">Likes</Text>
    </View>
    <View className="items-center">
      <Text className="text-2xl font-bold text-blue-600">156</Text>
      <Text className="text-sm text-gray-500">Views</Text>
    </View>
  </View>
);

export default MatchStats;
