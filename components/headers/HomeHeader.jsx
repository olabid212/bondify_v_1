import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { images } from "../../constant/images";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ListFilter, RotateCcw, SlidersHorizontal } from "lucide-react-native";

const HomeHeader = ({ title }) => {
  return (
    <View className="flex-row items-center justify-between bg-transparent  py-4">
      <Image
        source={images.bondifyLogo}
        style={{ width: 120, height: 40 }}
        contentFit="contain"
      />
      <View className="flex-row gap-4">
        <RotateCcw size={24} color="white" />
        <SlidersHorizontal size={24} color="white" />
      </View>
    </View>
  );
};

export default HomeHeader;
