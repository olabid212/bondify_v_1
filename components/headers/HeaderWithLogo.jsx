import { View, Text, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";

const HeaderWithLogo = ({ title }) => {
const router = useRouter()    

  return (
    <View className="flex-row items-center justify-between pt-3">
      <Pressable onPress={() => router.back()}>
        <Entypo name="chevron-small-left" size={30} color="#000" />
      </Pressable>

      <Image
        source={require("../../assets/images/bondify-icon-color.png")}
        style={{ width: 80, height: 40 }}
        contentFit="contain"
      />
      <Text className="text-white font-SatoshiMedium">{title}</Text>
    </View>
  );
};

export default HeaderWithLogo;
