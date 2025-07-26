import React from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import { Star, MapPin } from "lucide-react-native";

const ProfileCard = ({ profile }) => {
  if (!profile) return null;

  return (
    <View className="px-4 py-6">
      <View className="rounded-3xl shadow-lg overflow-hidden bg-white">
        <View className="relative h-[500px] w-full">
          <View className="w-full h-full">
            <Image
              source={{ uri: profile?.images?.[0] }}
              className="w-full h-full"
              contentFit="cover"
              style={{ borderRadius: 24 }}
            />
            <View className="absolute inset-0 bg-black/30" />
          </View>

          {profile.verified && (
            <View className="absolute top-4 right-4 bg-blue-500 rounded-full p-2">
              <Star color="white" size={16} fill="white" />
            </View>
          )}

          <View className="absolute bottom-0 left-0 right-0 p-6">
            <View className="flex-row items-center mb-2">
              <Text className="text-white text-3xl font-bold mr-2">
                {profile.name}
              </Text>
              <Text className="text-white text-3xl font-light">
                {profile.age}
              </Text>
            </View>

            <View className="flex-row items-center mb-2">
              <MapPin color="white" size={16} />
              <Text className="text-white ml-1">
                {profile.distance || "5km away"}
              </Text>
            </View>

            {profile.bio && (
              <Text className="text-white text-base mb-4">{profile.bio}</Text>
            )}

            {Array.isArray(profile.interests) && (
              <View className="flex-row flex-wrap">
                {profile.interests.map((interest, i) => (
                  <View
                    key={i}
                    className="bg-white/20 rounded-full px-3 py-1 mr-2 mb-2"
                  >
                    <Text className="text-white text-sm">{interest}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;
