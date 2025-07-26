import { View, Text, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";

const HeaderWithLogo = ({ title }) => {
const router = useRouter()    

  return (
    <View className="flex-row items-center justify-between ">
      <Pressable onPress={() => router.back()}>
        <Entypo name="chevron-small-left" size={24} color="#fff" />
      </Pressable>

      <Image
        source={require("../../assets/images/B-logo.png")}
        style={{ width: 100, height: 40 }}
        contentFit="contain"
      />
      <Text className="text-white font-SatoshiMedium">{title}</Text>
    </View>
  );
};

export default HeaderWithLogo;
