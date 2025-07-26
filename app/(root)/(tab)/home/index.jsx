import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../../../../components/headers/HomeHeader'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

import DetailedProfile from '../../../../components/homeScreen/DetailedProfile'
import UsersCard from '../../../../components/homeScreen/UsersCard'
import Status from '../../../../components/homeScreen/Status'
import ActionButtons from '../../../../components/homeScreen/ActionButtons'
import ProfileCard from '../../../../components/homeScreen/ProfileCard'
import { images } from '../../../../constant/images'






const profiles = [
  {
    id: 1,
    name: "Emma",
    age: 26,
    location: "New York, NY",
    distance: "2 miles away",
    bio: "Adventure seeker, coffee enthusiast, and dog lover.",
    images:["https://i.pravatar.cc/150?img=1", "https://i.pravatar.cc/150?img=2",],
    interests: ["Travel", "Photography", "Hiking", "Coffee"],
    verified: true,
  },
  {
    id: 2,
    name: "Sarah",
    age: 24,
    location: "Brooklyn, NY",
    distance: "5 miles away",
    bio: "Artist by day, foodie by night.",
    images: [images.userImage],
    interests: ["Art", "Food", "Music", "Dancing"],
    verified: false,
  },
];

const Home = () => {

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





  return (
    <SafeAreaProvider>
      <SafeAreaView className="bg-app flex-1 px-4">
        <View style={{ flex: 1 }}>
          <HomeHeader title="Home" />
       
          <ScrollView
            className="pt-3 flex-1"
            contentContainerStyle={{ paddingBottom: 100 }} // add extra bottom space for buttons
            showsVerticalScrollIndicator={false}
          >
               <Status />
                  <ProfileCard profile={currentProfile} />
   
          </ScrollView>

          {/* ✅ Fixed Action Buttons at bottom */}
          <View style={styles.actionButtonWrapper}>
            <ActionButtons onSwipe={handleSwipe} onSuperLike={handleSuperLike} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home

const styles = StyleSheet.create({
  actionButtonWrapper: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    alignItems: 'center',
    zIndex: 10,
  },
});
