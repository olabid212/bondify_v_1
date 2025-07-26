// components/inputs/RadioSelect.jsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RadioSelect = ({
  label,
  options = [],
  value,
  onChange,
  error,
  horizontal = false,
  className = "",
}) => {
  return (
    <View className={`mb-4 w-full ${className}`}>
      {label && (
        <Text className="text-lg font-SatoshiMedium mb-2">{label}</Text>
      )}
      <View
        className={`flex ${horizontal ? "flex-row flex-wrap gap-4" : "flex-col gap-3"}`}
      >
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            className={`flex-row items-center justify-between gap-2 h-14 px-4 rounded-xl border border-ash ${className} `}
            onPress={() => onChange(option.value)}
          >
            <Text className="text-white text-lg font-Satoshi">
              {option.label}
            </Text>
            <Ionicons
              name={
                value === option.value ? "radio-button-on" : "radio-button-off"
              }
              size={20}
              color={value === option.value ? "#A80EC1" : "#A4A4A4"} // blue-600
            />
          </TouchableOpacity>
        ))}
      </View>
      {error && <Text className="text-red-500 text-xs mt-1">{error}</Text>}
    </View>
  );
};

export default RadioSelect;
