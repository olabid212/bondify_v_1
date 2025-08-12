import { View, Text, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import {images} from "../../constant/images"

const HeaderWithLogo = ({ title }) => {
const router = useRouter()    

  return (
    <View className="flex-row items-center justify-between pt-3">
      <Pressable onPress={() => router.back()}>
        <Image
          source={images.backButtonBlack}
          style={{ width: 25, height: 25 }}
          contentFit="contain"
        />
      </Pressable>

      <Image
        source={require("../../assets/images/bondify-icon-color.png")}
        style={{ width: 60, height: 40 }}
        contentFit="contain"
      />
      <Text className="text-white font-SatoshiMedium">{title}</Text>
    </View>
  );
};

export default HeaderWithLogo;
