import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import {
  Star,
  MapPin,
  Briefcase,
  GraduationCap,
  Ruler,
  Wine,
  Cigarette,
  Dog,
  Dumbbell,
  Info,
  User,
  Sparkles,
} from "lucide-react-native";
import { colors } from "../../constant/colors";

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
                  <Text className="text-white font-SatoshiMedium ml-2">
                    {profile.education}
                  </Text>
                </View>
              )}

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
        </View>
      </View>

      {/* Looking for */}
      <View className="py-6">
        <View className="bg-white/5 rounded-xl p-4 mb-4">
          <View className="flex-row items-center mb-2">
            <User size={18} color="white" />
            <Text className="text-lg font-SatoshiMedium text-white ml-2">
              Looking for
            </Text>
          </View>
          <Text className="text-xl font-SatoshiBold text-white">
            {profile.lookingFor}
          </Text>
        </View>

        {/* About me */}
        {profile.bio && (
          <View className="bg-white/5 border-[0.5px] border-gray-800 mb-5 p-6 rounded-2xl">
            <View className="flex-row items-center mb-3">
              <Info size={18} color="white" />
              <Text className="text-lg font-SatoshiBold text-white ml-2">
                About me
              </Text>
            </View>
            <Text className="text-white font-Satoshi text-base">
              {displayedBio}
            </Text>
            {isBioLong && (
              <TouchableOpacity onPress={() => setShowFullBio(!showFullBio)}>
                <Text className="text-primary mt-1 font-medium">
                  {showFullBio ? "Show less" : "Read more"}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}

      
        {/* Essentials */}
        <View className="bg-white/5 border-[0.5px] border-gray-800 p-6 mb-5 rounded-2xl">
          <View className="flex-row items-center mb-2">
            <Info size={18} color="white" />
            <Text className="text-lg font-SatoshiBold text-white ml-2">
              Essentials
            </Text>
          </View>

          <View className="flex-row items-center mt-4 gap-3">
            <MapPin color={colors.primary} size={16} />
            <Text className="text-white">{profile.distance || "5km away"}</Text>
          </View>
          <View className="flex-row items-center gap-3 mt-4">
            <Briefcase color={colors.primary} size={16} />
            <Text className="text-white capitalize">{profile.occupation}</Text>
          </View>

          <View className="flex-row items-center gap-3 mt-4">
            <Ruler color={colors.primary} size={16} />
            <Text className="text-white  capitalize">{profile.height}</Text>
          </View>

          <View className="flex-row items-center gap-3 mt-4">
            <Wine color={colors.primary} size={16} />
            <Text className="text-white  capitalize">{profile.drinking}</Text>
          </View>

          <View className="flex-row items-center gap-3 mt-4">
            <Cigarette color={colors.primary} size={16} />
            <Text className="text-white  capitalize">{profile.smoking}</Text>
          </View>

          <View className="flex-row items-center gap-3 mt-4">
            <Dog color={colors.primary} size={16} />
            <Text className="text-white  capitalize">{profile.pets}</Text>
          </View>

          <View className="flex-row items-center gap-3 mt-4">
            <Dumbbell color={colors.primary} size={16} />
            <Text className="text-white  capitalize">{profile.exercise}</Text>
          </View>
        </View>


        

        {/* Education */}
        {profile.school && (
          <View className="bg-white/5 border-[0.5px] border-gray-800 mb-5 p-6 rounded-2xl">
            <View className="flex-row items-center mb-3">
              <GraduationCap size={18} color="white" />
              <Text className="text-lg font-SatoshiBold text-white ml-2">
                Education
              </Text>
            </View>
            <Text className="text-white font-Satoshi text-base">
              {profile.school}
            </Text>
          </View>
        )}

        {/* Questions and Answer */}
        {profile.questions?.length > 0 && (
          <>
            {profile.questions.map((item, index) => (
              <View
                key={index}
                className="bg-white/5 border-[0.5px] border-gray-800 mb-4 p-5 rounded-2xl"
              >
                <Text className="text-white font-SatoshiMedium text-base mb-2">
                  {item.question}
                </Text>
                <Text className="text-white font-SatoshiBold text-2xl leading-relaxed">
                  {item.answer}
                </Text>
              </View>
            ))}
          </>
        )}

        {/* Interests */}
        <View className="mb-6 bg-white/5 border-[0.5px] border-gray-800  p-6 rounded-2xl">
          <View className="flex-row items-center mb-3">
            <Sparkles size={18} color="white" />
            <Text className="text-lg font-SatoshiBold text-white ml-2">
              Interests
            </Text>
          </View>
          <View className="flex-row flex-wrap">
            {profile.interests.map((interest, index) => (
              <View
                key={index}
                className={`rounded-full px-4 py-2 mr-2 mb-2 ${
                  profile.mutualInterests.includes(interest)
                    ? "bg-pink-50 border border-primary"
                    : "bg-gray-100"
                }`}
              >
                <Text
                  className={`font-SatoshiMedium ${
                    profile.mutualInterests.includes(interest)
                      ? "text-primary"
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
      </View>
    </View>
  );
};

export default ProfileCard;
