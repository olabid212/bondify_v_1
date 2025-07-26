import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { images } from "../../constant/images";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const HomeHeader = ({ title }) => {
  return (
    <View className="flex-row items-center justify-between ">
      <Image
        source={images.logo}
        style={{ width: 80, height: 40 }}
        contentFit="contain"
      />
      <MaterialCommunityIcons name="filter" size={24} color="white" />
    </View>
  );
};

export default HomeHeader;
