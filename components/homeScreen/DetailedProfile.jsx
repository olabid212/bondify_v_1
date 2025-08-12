import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import {
  ArrowLeft,
  Star,
  MapPin,
  Heart,
  X,
  MessageCircle,
  Share,
  MoreHorizontal,
  Calendar,
  Briefcase,
  GraduationCap,
  Music,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react-native";

const { width, height } = Dimensions.get("window");

const profileData = {
  id: 1,
  name: "Emma Rodriguez",
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
  occupation: "UX Designer at Tech Startup",
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
};

export default function DetailedProfile() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullBio, setShowFullBio] = useState(false);
  const [liked, setLiked] = useState(false);
  const [superLiked, setSuperLiked] = useState(false);

  const carouselRef = useRef(null);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const renderCarouselImage = ({ item, index }) => (
    <View className="relative">
      <Image
        source={{ uri: item }}
        className="w-full h-96"
        style={{ width }}
        resizeMode="cover"
      />

      {/* Image counter */}
      <View className="absolute top-4 right-4 bg-black/50 rounded-full px-3 py-1">
        <Text className="text-white text-sm font-medium">
          {index + 1}/{profileData.images.length}
        </Text>
      </View>

      {/* Navigation arrows */}
      {index > 0 && (
        <TouchableOpacity
          className="absolute left-4 top-1/2 -mt-6 bg-black/30 rounded-full p-2"
          onPress={() => {
            carouselRef.current?.scrollToIndex({
              index: index - 1,
              animated: true,
            });
            setCurrentImageIndex(index - 1);
          }}
        >
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
      )}

      {index < profileData.images.length - 1 && (
        <TouchableOpacity
          className="absolute right-4 top-1/2 -mt-6 bg-black/30 rounded-full p-2"
          onPress={() => {
            carouselRef.current?.scrollToIndex({
              index: index + 1,
              animated: true,
            });
            setCurrentImageIndex(index + 1);
          }}
        >
          <ChevronRight color="white" size={24} />
        </TouchableOpacity>
      )}

      {/* Image indicator dots */}
      <View className="absolute bottom-4 left-0 right-0 flex-row justify-center space-x-2">
        {profileData.images.map((_, dotIndex) => (
          <TouchableOpacity
            key={dotIndex}
            onPress={() => {
              carouselRef.current?.scrollToIndex({
                index: dotIndex,
                animated: true,
              });
              setCurrentImageIndex(dotIndex);
            }}
          >
            <View
              className={`w-2 h-2 rounded-full ${
                dotIndex === currentImageIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const onCarouselScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    if (roundIndex !== currentImageIndex) {
      setCurrentImageIndex(roundIndex);
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleSuperLike = () => {
    setSuperLiked(!superLiked);
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const bioLines = profileData.bio.split("\n");
  const shortBio = bioLines[0];
  const hasMoreContent = bioLines.length > 1 || bioLines[0].length > 150;

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="absolute top-0 left-0 right-0 z-10 flex-row items-center justify-between px-6 pt-12 pb-4 bg-gradient-to-b from-black/50 to-transparent">
        <TouchableOpacity className="p-2 bg-black/30 rounded-full">
          <ArrowLeft color="white" size={24} />
        </TouchableOpacity>

        <View className="flex-row space-x-3">
          <TouchableOpacity className="p-2 bg-black/30 rounded-full">
            <Share color="white" size={20} />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-black/30 rounded-full">
            <MoreHorizontal color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Photo Carousel */}
        <FlatList
          ref={carouselRef}
          data={profileData.images}
          renderItem={renderCarouselImage}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onCarouselScroll}
          scrollEventThrottle={16}
        />

        {/* Profile Information */}
        <View className="px-6 py-6">
          {/* Name, Age, and Verification */}
          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center">
              <Text className="text-3xl font-bold text-gray-800 mr-2">
                {profileData.name}
              </Text>
              <Text className="text-3xl font-light text-gray-600">
                {profileData.age}
              </Text>
              {profileData.verified && (
                <View className="ml-2 bg-blue-500 rounded-full p-1">
                  <Star color="white" size={16} fill="white" />
                </View>
              )}
            </View>
            <Text className="text-sm text-green-600 font-medium">
              {profileData.lastActive}
            </Text>
          </View>

          {/* Location */}
          <View className="flex-row items-center mb-4">
            <MapPin color="#6B7280" size={16} />
            <Text className="text-gray-600 ml-2">{profileData.distance}</Text>
          </View>


          {/* Bio */}
          <View className="mb-6">
            <Text className="text-gray-800 leading-6 text-base">
              {showFullBio ? profileData.bio : shortBio}
            </Text>
            {hasMoreContent && (
              <TouchableOpacity
                onPress={() => setShowFullBio(!showFullBio)}
                className="mt-2"
              >
                <Text className="text-pink-600 font-semibold">
                  {showFullBio ? "Show less" : "Read more"}
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Basic Info */}
          <View className="bg-gray-50 rounded-xl p-4 mb-6">
            <Text className="text-lg font-bold text-gray-800 mb-3">
              About Emma
            </Text>

            <View className="space-y-3">
              <View className="flex-row items-center">
                <Briefcase color="#6B7280" size={16} />
                <Text className="text-gray-700 ml-3">
                  {profileData.occupation}
                </Text>
              </View>

              <View className="flex-row items-center">
                <GraduationCap color="#6B7280" size={16} />
                <Text className="text-gray-700 ml-3">
                  {profileData.education}
                </Text>
              </View>

              <View className="flex-row items-center">
                <Calendar color="#6B7280" size={16} />
                <Text className="text-gray-700 ml-3">{profileData.height}</Text>
              </View>
            </View>
          </View>

          {/* Interests */}
          <View className="mb-6">
            <Text className="text-lg font-bold text-gray-800 mb-3">
              Interests
            </Text>
            <View className="flex-row flex-wrap">
              {profileData.interests.map((interest, index) => (
                <View
                  key={index}
                  className={`rounded-full px-4 py-2 mr-2 mb-2 ${
                    profileData.mutualInterests.includes(interest)
                      ? "bg-pink-100 border border-pink-300"
                      : "bg-gray-100"
                  }`}
                >
                  <Text
                    className={`font-medium ${
                      profileData.mutualInterests.includes(interest)
                        ? "text-pink-700"
                        : "text-gray-700"
                    }`}
                  >
                    {interest}
                    {profileData.mutualInterests.includes(interest) && " ✨"}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Lifestyle */}
          <View className="bg-gray-50 rounded-xl p-4 mb-6">
            <Text className="text-lg font-bold text-gray-800 mb-3">
              Lifestyle
            </Text>

            <View className="space-y-3">
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Looking for</Text>
                <Text className="text-gray-800 font-medium">
                  {profileData.lookingFor}
                </Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-gray-600">Relationship type</Text>
                <Text className="text-gray-800 font-medium">
                  {profileData.relationshipType}
                </Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-gray-600">Drinking</Text>
                <Text className="text-gray-800 font-medium">
                  {profileData.drinking}
                </Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-gray-600">Smoking</Text>
                <Text className="text-gray-800 font-medium">
                  {profileData.smoking}
                </Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-gray-600">Exercise</Text>
                <Text className="text-gray-800 font-medium">
                  {profileData.exercise}
                </Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-gray-600">Pets</Text>
                <Text className="text-gray-800 font-medium">
                  {profileData.pets}
                </Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-gray-600">Children</Text>
                <Text className="text-gray-800 font-medium">
                  {profileData.children}
                </Text>
              </View>
            </View>
          </View>

          {/* Photo Grid */}
          <View className="mb-6">
            <Text className="text-lg font-bold text-gray-800 mb-3">
              More Photos
            </Text>
            <View className="flex-row flex-wrap">
              {profileData.images.slice(1, 7).map((image, index) => (
                <TouchableOpacity
                  key={index}
                  className="w-1/3 aspect-square p-1"
                  onPress={() => {
                    setCurrentImageIndex(index + 1);
                    carouselRef.current?.scrollToIndex({
                      index: index + 1,
                      animated: true,
                    });
                  }}
                >
                  <Image
                    source={{ uri: image }}
                    className="w-full h-full rounded-lg"
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Bottom spacing for action buttons */}
          <View className="h-20" />
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4">
        <View className="flex-row justify-center items-center space-x-6">
          {/* Pass Button */}
          <TouchableOpacity className="w-16 h-16 bg-gray-100 rounded-full items-center justify-center shadow-md">
            <X color="#6B7280" size={28} />
          </TouchableOpacity>

          {/* Super Like Button */}
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <TouchableOpacity
              onPress={handleSuperLike}
              className={`w-14 h-14 rounded-full items-center justify-center shadow-md ${
                superLiked ? "bg-blue-600" : "bg-blue-500"
              }`}
            >
              <Star
                color="white"
                size={24}
                fill={superLiked ? "white" : "none"}
              />
            </TouchableOpacity>
          </Animated.View>

          {/* Like Button */}
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <TouchableOpacity
              onPress={handleLike}
              className={`w-16 h-16 rounded-full items-center justify-center shadow-md ${
                liked ? "bg-pink-600" : "bg-pink-500"
              }`}
            >
              <Heart color="white" size={28} fill={liked ? "white" : "none"} />
            </TouchableOpacity>
          </Animated.View>

          {/* Message Button */}
          <TouchableOpacity className="w-14 h-14 bg-purple-500 rounded-full items-center justify-center shadow-md">
            <MessageCircle color="white" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
