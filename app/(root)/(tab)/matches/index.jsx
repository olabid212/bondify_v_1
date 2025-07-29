import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import {
  Heart,
  MessageCircle,
  Star,
  ArrowLeft,
  Filter,
} from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");
const CARD_MARGIN = 8;
const CARD_WIDTH = (width - 48) / 2; // Adjusted for padding and gap

const likesData = [
  {
    id: 1,
    name: "Emma",
    age: 26,
    distance: "2 miles away",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop",
    verified: true,
    isMatch: false,
    timeAgo: "2h",
  },
  {
    id: 2,
    name: "Sarah",
    age: 24,
    distance: "5 miles away",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
    verified: false,
    isMatch: false,
    timeAgo: "4h",
  },
];

const matchesData = [
  {
    id: 7,
    name: "Sophia",
    age: 29,
    distance: "3 miles away",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop",
    verified: true,
    isMatch: true,
    timeAgo: "1h",
  },
  {
    id: 8,
    name: "Isabella",
    age: 26,
    distance: "2 miles away",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop",
    verified: false,
    isMatch: true,
    timeAgo: "3h",
  },
  {
    id: 9,
    name: "Isabella",
    age: 26,
    distance: "2 miles away",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop",
    verified: false,
    isMatch: true,
    timeAgo: "3h",
  },
  {
    id: 10,
    name: "Isabella",
    age: 26,
    distance: "2 miles away",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop",
    verified: false,
    isMatch: true,
    timeAgo: "3h",
  },
];

export default function LikesMatches() {
  const [activeTab, setActiveTab] = useState("likes");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const currentData = activeTab === "likes" ? likesData : matchesData;

  const handleUserPress = (userId) => {
    if (activeTab === "likes") {
      setSelectedUsers((prev) =>
        prev.includes(userId)
          ? prev.filter((id) => id !== userId)
          : [...prev, userId]
      );
    }
  };

  const handleLikeBack = (userId) => {
    setSelectedUsers((prev) => prev.filter((id) => id !== userId));
  };

  const renderUserCard = ({ item: user }) => (
    <TouchableOpacity
      onPress={() => handleUserPress(user.id)}
      style={{
        width: CARD_WIDTH,
        marginBottom: 16,
        marginHorizontal: CARD_MARGIN / 2,
        opacity: selectedUsers.includes(user.id) ? 0.75 : 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 16,
          overflow: "hidden",
          elevation: 2,
        }}
      >
        <View style={{ position: "relative" }}>
          <Image
            source={{ uri: user.image }}
            style={{ width: "100%", height: 220 }}
            resizeMode="cover"
          />

          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.7)"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 100,
            }}
          />

          <View
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              backgroundColor: "rgba(0,0,0,0.4)",
              borderRadius: 12,
              paddingHorizontal: 8,
              paddingVertical: 4,
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>{user.timeAgo}</Text>
          </View>

          {user.verified && (
            <View
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "#3B82F6",
                padding: 6,
                borderRadius: 20,
              }}
            >
              <Star size={14} color="white" fill="white" />
            </View>
          )}

          {user.isMatch && (
            <View
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "#EC4899",
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 20,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 12, fontWeight: "bold" }}
              >
                MATCH
              </Text>
            </View>
          )}

          <View
            style={{
              padding: 12,
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              {user.name}, {user.age}
            </Text>
            <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>
              {user.distance}
            </Text>

            {activeTab === "likes" && (
              <TouchableOpacity
                onPress={() => handleLikeBack(user.id)}
                style={{
                  backgroundColor: "#EC4899",
                  padding: 8,
                  borderRadius: 20,
                  position: "absolute",
                  right: 10,
                  bottom: 10,
                }}
              >
                <Heart color="white" size={16} fill="white" />
              </TouchableOpacity>
            )}

            {activeTab === "matches" && (
              <TouchableOpacity
                style={{
                  backgroundColor: "#8B5CF6",
                  padding: 8,
                  borderRadius: 20,
                  position: "absolute",
                  right: 10,
                  bottom: 10,
                }}
              >
                <MessageCircle color="white" size={16} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 24,
          paddingTop: 56,
          paddingBottom: 16,
          backgroundColor: "white",
          elevation: 1,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#1F2937" }}>
          {activeTab === "likes" ? "People Who Like You" : "Your Matches"}
        </Text>
        <TouchableOpacity>
          <Filter size={24} color="#6B7280" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          borderBottomWidth: 1,
          borderColor: "#E5E7EB",
        }}
      >
        <TouchableOpacity
          onPress={() => setActiveTab("likes")}
          style={{
            flex: 1,
            paddingVertical: 14,
            alignItems: "center",
            borderBottomWidth: 2,
            borderColor: activeTab === "likes" ? "#EC4899" : "transparent",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Heart
              size={18}
              color={activeTab === "likes" ? "#EC4899" : "#6B7280"}
              fill={activeTab === "likes" ? "#EC4899" : "none"}
            />
            <Text
              style={{
                marginLeft: 6,
                fontWeight: "600",
                color: activeTab === "likes" ? "#EC4899" : "#6B7280",
              }}
            >
              Likes ({likesData.length})
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab("matches")}
          style={{
            flex: 1,
            paddingVertical: 14,
            alignItems: "center",
            borderBottomWidth: 2,
            borderColor: activeTab === "matches" ? "#8B5CF6" : "transparent",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Star
              size={18}
              color={activeTab === "matches" ? "#8B5CF6" : "#6B7280"}
              fill={activeTab === "matches" ? "#8B5CF6" : "none"}
            />
            <Text
              style={{
                marginLeft: 6,
                fontWeight: "600",
                color: activeTab === "matches" ? "#8B5CF6" : "#6B7280",
              }}
            >
              Matches ({matchesData.length})
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <View style={{ padding: 16 }}>
        {activeTab === "likes" && (
          <LinearGradient
            colors={["#EC4899", "#8B5CF6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderRadius: 16,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 4,
              }}
            >
              💕 {likesData.length} people like you!
            </Text>
            <Text style={{ color: "white", fontSize: 14 }}>
              Like them back to start a conversation.
            </Text>
          </LinearGradient>
        )}

        {activeTab === "matches" && (
          <LinearGradient
            colors={["#8B5CF6", "#EC4899"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderRadius: 16,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 4,
              }}
            >
              🎉 You have {matchesData.length} matches!
            </Text>
            <Text style={{ color: "white", fontSize: 14 }}>
              Start chatting and meet your match.
            </Text>
          </LinearGradient>
        )}
      </View>

      {/* Card Grid */}
      <FlatList
        data={currentData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUserCard}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Footer Like Button */}
      {activeTab === "likes" && selectedUsers.length > 0 && (
        <View
          style={{
            backgroundColor: "white",
            borderTopWidth: 1,
            borderColor: "#E5E7EB",
            padding: 16,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#EC4899",
              paddingVertical: 14,
              borderRadius: 16,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Like {selectedUsers.length}{" "}
              {selectedUsers.length === 1 ? "Person" : "People"} Back
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
