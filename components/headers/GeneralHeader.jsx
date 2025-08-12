import { View, Text, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import {images} from "../../constant/images"

const HeaderWithLogo = ({ title }) => {
const router = useRouter()    

  return (
    <View className="flex-row items-center justify-between px-4 py-4 ">
    
      <Text className="text-black  text-3xl font-SatoshiBold">{title}</Text>
    </View>
  );
};

export default HeaderWithLogo;
