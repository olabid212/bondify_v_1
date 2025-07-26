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
  name: "Badejo tayo",
  age: 26,
  location: "New York, NY",
  distance: "2 miles away",
  bio: "Adventure seeker, coffee enthusiast, and dog lover. Looking for someone to explore the city with! I love hiking on weekends, trying new restaurants, and capturing beautiful moments through photography. Life is too short not to laugh every day! 🌟\n\nCurrently working as a UX designer and passionate about creating meaningful experiences. When I'm not designing, you'll find me at a local coffee shop, planning my next adventure, or cuddling with my golden retriever, Max.",
  images: [
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
  ],
  interests: [
    "Travel",
    "Photography",
    "Hiking",
    "Coffee",
    "Dogs",
    "Art",
    "Music",
    "Yoga",
    "Cooking",
    "Reading",
  ],
  verified: true,
  occupation: "photography",
  education: "Master's in Design, NYU",
  height: "5'6\"",
  lookingFor: "Long-term relationship",
  relationshipType: "Monogamous",
  drinking: "Socially",
  smoking: "Never",
  exercise: "Regularly",
  pets: "Dog lover",
  children: "Want someday",
  lastActive: "Active today",
  mutualFriends: 3,
  mutualInterests: ["Photography", "Coffee", "Travel"],
  },
  {
    id: 2,
    name: "Sarah",
    age: 24,
    occupation: "Baker",
    religion: "Muslim",
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
