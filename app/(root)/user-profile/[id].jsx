import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { profiles } from "../../../data/profileData";
import ProfileCard from "../../../components/homeScreen/ProfileCard";
import ActionButtons from "../../../components/homeScreen/ActionButtons";


const UserProfile = () => {
  const { id } = useLocalSearchParams();
    const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
    const [matches, setMatches] = useState(12);
    const [likes, setLikes] = useState(48);
  
    const currentProfile = profiles[currentProfileIndex];
  
    const handleSwipe = (direction) => {
      if (direction === "right") setMatches((prev) => prev + 1);
      setTimeout(() => {
        setCurrentProfileIndex((prev) => (prev + 1) % profiles.length);
      }, 300);
    };
  
    const handleSuperLike = () => {
      setMatches((prev) => prev + 1);
      setTimeout(() => {
        setCurrentProfileIndex((prev) => (prev + 1) % profiles.length);
      }, 300);
    };

  const profile = profiles.find((item) => item.id === Number(id));

  if (!profile) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-black">
        <Text className="text-white">Profile not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <View className="flex-1 ">
      <View className="">
        <ProfileCard profile={profile} />
        <View style={styles.actionButtonWrapper}>
          <ActionButtons onSwipe={handleSwipe} onSuperLike={handleSuperLike} />
        </View>
      </View>
    </View>
  );
};

export default UserProfile;


const styles = StyleSheet.create({
  actionButtonWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    alignItems: "center",
    zIndex: 10,
  },
});

