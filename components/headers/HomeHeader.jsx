import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { images } from "../../constant/images";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ListFilter, RotateCcw, SlidersHorizontal } from "lucide-react-native";

const HomeHeader = ({ title }) => {
  return (
    <View className="flex-row items-center justify-between bg-transparent  py-2">
      <View className="w-10 h-10  bg-white  justify-center items-center rounded-full">
        <RotateCcw size={24} color="gray" />
      </View>
      <Image
        source={images.bondifyLogoColored}
        style={{ width: 110, height: 40 }}
        contentFit="contain"
      />

      <View className="w-10 h-10  bg-white  justify-center items-center rounded-full">
        <SlidersHorizontal size={24} color="gray" />
      </View>
    </View>
  );
};

export default HomeHeader;
