import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Button from "../../../../components/ui/Button";
import { router, useRouter } from "expo-router";

const LocationAccess = () => {
  const router = useRouter();
  
  return (
    <View className="bg-white flex-1 px-6 justify-center items-center">
      <Image
        source={require("../../../../assets/images/location.png")}
        style={{ width: 150, height: 150 }}
        resizeMode="contain"
      />

      <Text className="text-2xl font-SatoshiBold text-center mt-6 ">
        Enable Location Access
      </Text>

      <Text className="text-center font-Satoshi mt-2 text-lg ">
        We use your location to show nearby users and matches based on
        proximity.
      </Text>

      <View className="w-full mt-8">
        <Button
          onPress={() => {
        router.replace("root-tabs")
            console.log("Requesting location access...");
          }}
          variant="gradient"
          title="Allow Location Access"
        />
      </View>
    </View>
  );
};

export default LocationAccess;
