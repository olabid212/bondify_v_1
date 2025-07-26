import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import {
  Star,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react-native";

const MAX_BIO_LENGTH = 120;

const ProfileCard = ({ profile }) => {
  const [showFullBio, setShowFullBio] = useState(false);

  if (!profile) return null;

  const isBioLong = profile.bio?.length > MAX_BIO_LENGTH;
  const displayedBio = showFullBio
    ? profile.bio
    : profile.bio?.slice(0, MAX_BIO_LENGTH) + (isBioLong ? "..." : "");

  return (
    <View className="py-6">
      <View className="rounded-3xl shadow-lg overflow-hidden bg-white">
        <View className="relative h-[500px] w-full">
          {/* Image */}
          <Image
            source={{ uri: profile?.images?.[0] }}
            className="w-full h-full"
            contentFit="cover"
            style={{ borderRadius: 24 }}
          />

          {/* Dark Overlay */}
          <View className="absolute inset-0 bg-black/30 rounded-3xl" />

          {/* Verified Badge */}
          {profile.verified && (
            <View className="absolute top-4 right-4 bg-blue-500 rounded-full p-2">
              <Star color="white" size={16} fill="white" />
            </View>
          )}

          {/* Name, Age, Education, Occupation */}
          <View className="absolute bottom-6 left-6 right-6">
            <View className="flex-row items-center mb-2">
              <Text className="text-white text-3xl font-SatoshiBold mr-2">
                {profile.name}
              </Text>
              <Text className="text-white text-3xl font-Satoshi">
                {profile.age}
              </Text>
            </View>

            <View className="flex-row items-center flex-wrap gap-x-6 gap-y-2">
              {profile.education && (
                <View className="flex-row items-center">
                  <GraduationCap size={16} color="white" />
                  <Text className="text-white font-SatoshiLight ml-2">{profile.education}</Text>
                </View>
              )}

              {profile.occupation && (
                <View className="flex-row items-center">
                  <Briefcase size={16} color="white" />
                  <Text className="text-white font-Satoshi ml-2">{profile.occupation}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>

      {/* Bio, Interests, Distance, Mutual Friends */}
      <View className="py-6">
        {profile.mutualFriends > 0 && (
          <View className="bg-pink-50 rounded-xl p-4 mb-4">
            <Text className="text-pink-700 font-SatoshiMedium">
              You have {profile.mutualFriends} mutual friend
              {profile.mutualFriends > 1 ? "s" : ""}
            </Text>
            {profile.mutualInterests.length > 0 && (
              <Text className="text-pink-600 font-SatoshiMedium text-sm mt-1">
                Shared interests: {profile.mutualInterests.join(", ")}
              </Text>
            )}
          </View>
        )}

        <View className="bg-white/5 border-[0.5px] border-gray-900 p-6 rounded-2xl">
          {/* Bio with toggle */}
          {profile.bio && (
            <View className="mb-4">
              <Text className="text-white font-Satoshi text-base">{displayedBio}</Text>
              {isBioLong && (
                <TouchableOpacity onPress={() => setShowFullBio(!showFullBio)}>
                  <Text className="text-pink-400 mt-1 font-medium">
                    {showFullBio ? "Show less" : "Read more"}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}

          {/* Interests */}

          {/* Interests */}
          <View className="mb-6">
            <Text className="text-lg font-SatoshiBold text-white mb-3">
              Interests
            </Text>
            <View className="flex-row flex-wrap">
              {profile.interests.map((interest, index) => (
                <View
                  key={index}
                  className={`rounded-full px-4 py-2 mr-2 mb-2 ${profile.mutualInterests.includes(interest)
                      ? "bg-pink-100 border border-pink-300"
                      : "bg-gray-100"
                    }`}
                >
                  <Text
                    className={`font-SatoshiMedium ${profile.mutualInterests.includes(interest)
                        ? "text-pink-700"
                        : "text-gray-700"
                      }`}
                  >
                    {interest}
                    {profile.mutualInterests.includes(interest) && " ✨"}
                  </Text>
                </View>
              ))}
            </View>
          </View>


          {/* Distance */}
          <View className="flex-row items-center mt-4">
            <MapPin color="white" size={16} />
            <Text className="text-white ml-1">
              {profile.distance || "5km away"}
            </Text>
          </View>
        </View>


        {/* Image */}
        {/* Second Image */}
        {profile.images?.length > 1 && profile.images[1] && (
          <View className="w-full h-[500px]  bg-slate-50 mt-6 rounded-3xl overflow-hidden">
            <Image
              key={profile.images[1]} // force re-render
              source={{ uri: profile.images[1] }}
              className="w-full h-full"
              contentFit="cover"
            />
          </View>
        )}



      </View>
    </View>
  );
};

export default ProfileCard;
