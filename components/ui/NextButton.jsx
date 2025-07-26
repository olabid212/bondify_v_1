import React from "react";
import { Text, TouchableOpacity, ActivityIndicator, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const NextButton = ({
  title = "", // Default to no text
  onPress,
  loading = false,
  disabled = false,
  className = "",
  variant = "primary",
  textClassName = "",
  icon = <Entypo name="chevron-small-right" size={24} color="black" />, // Default icon
}) => {
  const baseStyle =
    variant === "primary"
      ? "bg-primary"
      : variant === "white"
        ? "bg-white"
        : variant === "secondary"
          ? "bg-secondary"
          : variant === "danger"
            ? "bg-red-700"
            : variant === "neutral"
              ? "bg-white border border-[#E8E8E8] "
              : "bg-black";

  const textStyle =
    variant === "primary"
      ? "text-white"
      : variant === "white"
        ? "text-black"
        : variant === "secondary"
          ? "text-primary"
          : variant === "neutral"
            ? "text-[#1E4234]"
            : "text-white";

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading || disabled}
      className={`flex-row gap-2 items-center justify-center py-3 px-4 rounded-md ${baseStyle} ${
        disabled ? "opacity-50" : ""
      } ${className}`}
    >
      {loading ? (
        <ActivityIndicator color={variant === "secondary" ? "#000" : "#fff"} />
      ) : (
        <View className="flex-row items-center justify-center">
          {title !== "" && (
            <Text
              className={`text-lg font-SatoshiMedium ml-2 ${textStyle} ${textClassName}`}
            >
              {title}
            </Text>
          )}
          {icon}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default NextButton;
