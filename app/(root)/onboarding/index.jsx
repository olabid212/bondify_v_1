import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import Button from "../../../components/ui/Button";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const Onboarding = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#FD465C", "#A80EC1"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <View className="flex-1 justify-between pb-4">
          {/* Logo at top */}
          <View className="justify-center items-center pt-4">
            <Image
              source={require("../../../assets/images/Bondify-white.png")}
              style={{ width: 120, height: 40 }}
              resizeMode="contain"
            />
          </View>

          {/* Main Image */}
          <View className="-mt-48">
            <Image
              source={require("../../../assets/images/l-image.png")}
              style={{ width: "100%", height: 450 }}
              contentFit="cover"
            />
          </View>

          {/* Text + Buttons */}
          <View className="items-center -mt-56 px-3">
            <Text className="text-white font-SatoshiBold text-4xl text-center mb-4">
              Discover Love where your story begins.
            </Text>
            <Text className="text-white font-SatoshiMedium text-sm text-center mb-4 px-4">
              Bondies are waiting for you, Join us to discover your ideal
              partner and ignite the sparks of romance in your journey.
            </Text>

            {/* Buttons */}
            <View className="w-full">
              <Button
                title="Continue with phone"
                onPress={() => router.push("/login")}
                className="mb-3"
                textClassName="font-santoshiMedium"
                variant="white"
              />

              <View className='items-center justify-center'>
                <Text className="text-white font-SatoshiMedium">
                  Don’t have an account?{" "}
            
                    <Text className="text-white font-SatoshiBold" onPress={() => router.push('/register')}>Sign Up</Text>
          
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Onboarding;
