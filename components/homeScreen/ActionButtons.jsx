import React from "react";
import { View, TouchableOpacity } from "react-native";
import { X, Heart, Star, MessageCircle } from "lucide-react-native";

const ActionButtons = ({ onSwipe, onSuperLike }) => (
  <View className="flex-row justify-center items-center gap-4 px-8 py-6">
    <TouchableOpacity
      onPress={() => onSwipe("left")}
      className="w-16 h-16 bg-gray-100 rounded-full items-center justify-center shadow-md"
    >
      <X color="#6B7280" size={28} />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={onSuperLike}
      className="w-14 h-14 bg-blue-500 rounded-full items-center justify-center shadow-md"
    >
      <Star color="white" size={24} fill="white" />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => onSwipe("right")}
      className="w-16 h-16 bg-pink-500 rounded-full items-center justify-center shadow-md"
    >
      <Heart color="white" size={28} fill="white" />
    </TouchableOpacity>


  </View>
);

export default ActionButtons;
