import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../../constant/colors";

// Enable animation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AccordionItem = ({ question, children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  return (
    <View className="mb-3 bg-white/10 px-4 py-3 rounded-xl">
      <TouchableOpacity
        onPress={toggleOpen}
        className="flex-row justify-between items-center"
      >
        <Text className="text-white w-[300px] font-SatoshiMedium text-base">
          {question}
        </Text>
        <Feather
          name={open ? "chevron-up" : "chevron-down"}
          size={20}
          color={"#fff"}
        />
      </TouchableOpacity>
      {open && <View className="mt-2">{children}</View>}
    </View>
  );
};

export default AccordionItem;
