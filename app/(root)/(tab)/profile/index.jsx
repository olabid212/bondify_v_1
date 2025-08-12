import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

const DatingProfileScreen = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSuperLiked, setIsSuperLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [isExpanded, setIsExpanded] = useState(false);

  const interests = [
    "Art",
    "Music",
    "Travel",
    "Photography",
    "Foodie",
    "Gaming",
    "Fitness",
    "Movies",
  ];
  const photos = [
    {
      id: 1,
      uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop",
    },
    {
      id: 2,
      uri: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&h=800&fit=crop",
    },
    {
      id: 3,
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop",
    },
    {
      id: 4,
      uri: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=800&fit=crop",
    },
  ];

  const toggleLike = () => {
    setIsLiked(!isLiked);
    if (isSuperLiked) setIsSuperLiked(false);
  };

  const toggleSuperLike = () => {
    setIsSuperLiked(!isSuperLiked);
    if (isLiked) setIsLiked(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>About Me</Text>
            <Text style={styles.bioText}>
              Creative soul exploring life one adventure at a time ✨ Digital
              artist by day, coffee enthusiast 24/7. Looking for someone to
              share memes and meaningful conversations with.
              {isExpanded
                ? " Passionate about sustainable fashion and street photography. Currently studying graphic design at Parsons."
                : null}
            </Text>
            <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
              <Text style={styles.readMore}>
                {isExpanded ? "Show less" : "Read more"}
              </Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Details</Text>
            <View style={styles.detailsGrid}>
              <View style={styles.detailItem}>
                <MaterialIcons name="location-on" size={20} color="#FF0066" />
                <Text style={styles.detailText}>3 miles away</Text>
              </View>
              <View style={styles.detailItem}>
                <Ionicons name="body" size={20} color="#FF0066" />
                <Text style={styles.detailText}>5'7"</Text>
              </View>
              <View style={styles.detailItem}>
                <Feather name="coffee" size={20} color="#FF0066" />
                <Text style={styles.detailText}>Socially</Text>
              </View>
              <View style={styles.detailItem}>
                <Ionicons name="paw" size={20} color="#FF0066" />
                <Text style={styles.detailText}>Dog lover</Text>
              </View>
            </View>
          </View>
        );
      case "interests":
        return (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>My Interests</Text>
            <View style={styles.interestsContainer}>
              {interests.map((interest, index) => (
                <LinearGradient
                  key={index}
                  colors={["#FF0066", "#A80EC1"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.interestPill}
                >
                  <Text style={styles.interestText}>{interest}</Text>
                </LinearGradient>
              ))}
            </View>

            <Text style={styles.sectionTitle}>Looking For</Text>
            <View style={styles.lookingForCard}>
              <Text style={styles.lookingForText}>
                Something meaningful but open to seeing where things go ✨
              </Text>
            </View>
          </View>
        );
      case "photos":
        return (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>My Photos</Text>
            <View style={styles.photosGrid}>
              {photos.map((photo) => (
                <View key={photo.id} style={styles.photoItem}>
                  <Image source={{ uri: photo.uri }} style={styles.photo} />
                </View>
              ))}
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0f0f1a", "#1a1a2e"]}
        style={styles.background}
      />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop",
            }}
            style={styles.profileImage}
          />
          <View style={styles.verifiedBadge}>
            <MaterialIcons name="verified" size={20} color="#1DA1F2" />
          </View>

          <Text style={styles.name}>Alexis, 24</Text>
          <Text style={styles.handle}>@alexismarquez</Text>

          <View style={styles.connectionStats}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>86%</Text>
              <Text style={styles.statLabel}>Match</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>1.2K</Text>
              <Text style={styles.statLabel}>Likes</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.actionButton, styles.dislikeButton]}
            onPress={() => console.log("Dislike")}
          >
            <AntDesign name="close" size={28} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.actionButton,
              styles.superLikeButton,
              isSuperLiked && styles.activeSuperLike,
            ]}
            onPress={toggleSuperLike}
          >
            <AntDesign
              name="star"
              size={28}
              color={isSuperLiked ? "white" : "#FFD700"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.actionButton,
              styles.likeButton,
              isLiked && styles.activeLike,
            ]}
            onPress={toggleLike}
          >
            <AntDesign
              name="heart"
              size={28}
              color={isLiked ? "white" : "#FF0066"}
            />
          </TouchableOpacity>
        </View>

        {/* Tab Navigation */}
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "about" && styles.activeTab]}
            onPress={() => setActiveTab("about")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "about" && styles.activeTabText,
              ]}
            >
              About
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "interests" && styles.activeTab]}
            onPress={() => setActiveTab("interests")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "interests" && styles.activeTabText,
              ]}
            >
              Interests
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "photos" && styles.activeTab]}
            onPress={() => setActiveTab("photos")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "photos" && styles.activeTabText,
              ]}
            >
              Photos
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        {renderTabContent()}

        {/* Prompt Section */}
        <View style={styles.promptCard}>
          <Text style={styles.promptQuestion}>My ideal first date...</Text>
          <Text style={styles.promptAnswer}>
            Coffee and a walk in the park, or checking out a new art exhibit 🎨
          </Text>
        </View>
      </ScrollView>

      {/* Message Button */}
      <TouchableOpacity style={styles.messageButton}>
        <FontAwesome name="send" size={20} color="white" />
        <Text style={styles.messageButtonText}>Message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f1a",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    paddingTop: 50,
    paddingBottom: 100,
  },
  profileHeader: {
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: "#FF0066",
  },
  verifiedBadge: {
    position: "absolute",
    top: 120,
    right: 130,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 4,
  },
  name: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 15,
  },
  handle: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
    marginTop: 5,
  },
  connectionStats: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  statItem: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  statValue: {
    color: "#FF0066",
    fontSize: 24,
    fontWeight: "bold",
  },
  statLabel: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  actionButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 2,
  },
  dislikeButton: {
    borderColor: "#FF5252",
  },
  superLikeButton: {
    borderColor: "#FFD700",
  },
  likeButton: {
    borderColor: "#FF0066",
  },
  activeSuperLike: {
    backgroundColor: "#FFD700",
  },
  activeLike: {
    backgroundColor: "#FF0066",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  tab: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#FF0066",
  },
  tabText: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 16,
    fontWeight: "bold",
  },
  activeTabText: {
    color: "white",
  },
  tabContent: {
    padding: 20,
  },
  sectionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  bioText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  readMore: {
    color: "#FF0066",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
  detailsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  detailItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  detailText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  interestPill: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  interestText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  lookingForCard: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 20,
    borderRadius: 15,
  },
  lookingForText: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
  },
  photosGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  photoItem: {
    width: "48%",
    aspectRatio: 0.7,
    marginBottom: 15,
  },
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  promptCard: {
    backgroundColor: "rgba(255, 0, 102, 0.1)",
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 0, 102, 0.3)",
  },
  promptQuestion: {
    color: "#FF0066",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  promptAnswer: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
  },
  messageButton: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    backgroundColor: "#FF0066",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 30,
  },
  messageButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default DatingProfileScreen;
