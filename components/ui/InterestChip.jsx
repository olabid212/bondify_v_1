import React from "react";
import { TouchableOpacity, Text } from "react-native";

const InterestChip = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-4 py-2 rounded-full border ${
        selected ? "border-pink-500" : "border-transparent"
      } ${selected ? "bg-black" : "bg-[#2e2e2e]"}`}
    >
      <Text className={`text-sm ${selected ? "text-pink-400" : "text-white"}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default InterestChip;
