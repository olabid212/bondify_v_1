import React from "react";
import {

  Text,
  View,

} from "react-native";
import { useRouter } from "expo-router";
import { Image } from "expo-image";

const ConfirmationScreen = ({title, subtitle}) => {


  return (
    <View className="flex-1 px-4">
      <View className="flex-1 justify-center  mt-32">
        <Image
          source={require("../../assets/images/B-icon.png")}
          contentFit="contain"
          style={{ width: 100, height: 80, marginBottom: 10 }}
        />
        <Text className="text-[50px] font-SatoshiBold text-white mb-2 leading-[55px] ">
          {title}
        </Text>
        <Text className="mb-7 text-white font-SatoshiMedium">{subtitle}</Text>
      </View>
    </View>
  );
};

export default ConfirmationScreen;
