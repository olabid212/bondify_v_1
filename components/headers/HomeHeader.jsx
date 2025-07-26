import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { images } from "../../constant/images";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
 ListFilter,
 RotateCcw
} from "lucide-react-native";

const HomeHeader = ({ title }) => {
  return (
    <View className="flex-row items-center justify-between bg-transparent px-4 py-4">
         
      <Image
        source={images.logo}
        style={{ width: 100, height: 40 }}
        contentFit="contain"
      />
      <View className='flex-row gap-4'>
       <RotateCcw size={24} color="white" />
      <ListFilter size={28} color="white" />
      </View>

    </View>
  );
};

export default HomeHeader;
