import { View, Text } from 'react-native'
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../../constant/colors";
import React from 'react'

const Info = ({title}) => {
  return (
    <View className="flex-row items-center gap-1 ">
      <Feather name="info" size={14} color={colors.gray} />
      <Text className="text-sm text-ash font-Satoshi">
    {title}
      </Text>
    </View>
  );
}

export default Info