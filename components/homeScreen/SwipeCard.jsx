import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import {
  Star,
  Briefcase,
  GraduationCap,
  MapPin,
  ChevronRight,
} from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

const SwipeCard = ({ profile }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = profile?.images?.length || 1;

  const goNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const goPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handlePress = (e) => {
    const pressX = e.nativeEvent.locationX;
    if (pressX > width / 2) {
      goNext();
    } else {
      goPrev();
    }
  };

  return (
    <View className="rounded-3xl shadow-lg overflow-hidden  bg-white">
      <TouchableWithoutFeedback onPress={handlePress}>
        <View className="relative h-[580px] w-full">
          {/* Image */}
          <Image
            source={{ uri: profile?.images?.[currentImageIndex] }}
            className="w-full h-full"
            contentFit="cover"
          />

          {/* Overlay */}
          <View className="absolute inset-0 bg-black/30 rounded-3xl" />

          {/* Verified Badge */}
          {profile.verified && (
            <View className="absolute top-6 right-4 bg-white/10 rounded-full p-2">
              <Text className="text-white text-sm font-SatoshiMedium ml-2 capitalize">
                {profile.distance}
              </Text>
            </View>
          )}

          {/* Image Index Indicator 
          <View className="absolute top-10 left-4 flex-row gap-1">
            {profile.images?.map((_, idx) => (
              <View
                key={idx}
                className={`h-1.5 rounded-full  ${idx === currentImageIndex ? "w-12 bg-white" : "w-12 bg-white/50"}`}
              />
            ))}
          </View>*/}

          {/* Bottom Content */}
          {/* Bottom Gradient Overlay */}
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.6)"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 180,
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 24,
              paddingHorizontal: 24,
              paddingTop: 30,
              paddingBottom: 20,
              justifyContent: "flex-end",
            }}
          >
            <BlurView
              intensity={20}
              tint="light"
              className="absolute flex-row justify-between items-center bg-white/20 px-6 py-4 bottom-16 left-6 right-6 rounded-2xl overflow-hidden "
            >
              <View className="gap-1 relative">
                <View className="flex-row flex-1 items-center">
                  <Text className="text-white text-3xl font-SatoshiBold mr-2">
                    {profile.name}
                  </Text>
                  <Text className="text-white text-3xl font-Satoshi">
                    {profile.age}
                  </Text>
                  {profile.verified && (
                    <View className="absolute bottom-2 left-[114px]  rounded-full p-2">
                      <MaterialIcons
                        name="verified"
                        size={18}
                        color="#90D5FF"
                      />
                    </View>
                  )}
                </View>

                <View className="flex-row items-center flex-wrap gap-x-6 gap-y-2">
                  {profile.occupation && (
                    <View className="flex-row items-center">
                      <Briefcase size={16} color="white" />
                      <Text className="text-white font-SatoshiMedium ml-2 capitalize">
                        {profile.occupation}
                      </Text>
                    </View>
                  )}
                </View>
              </View>

              <View className="text-white">
                <View className="bg-white/20 flex-row justify-center items-center w-12 rounded-full h-12">
                  <ChevronRight size={30} color="white" />
                </View>
              </View>
            </BlurView>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SwipeCard;
