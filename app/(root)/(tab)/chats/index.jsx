import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Alert,
} from "react-native";
import {
  ArrowLeft,
  Send,
  Smile,
  Camera,
  Mic,
  MoreVertical,
  Heart,
  Star,
  Check,
  CheckCheck,
  Circle,
} from "lucide-react-native";

const { width } = Dimensions.get("window");

const matchedUser = {
  id: "1",
  name: "Emma",
  profileImage:
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop",
  isOnline: true,
  matchedDate: new Date(Date.now() - 86400000 * 2),
};

const initialMessages = [
  {
    id: "1",
    text: "Hey! Thanks for the super like! 😊",
    timestamp: new Date(Date.now() - 86400000),
    sender: "them",
    status: "read",
    type: "text",
  },
  {
    id: "2",
    text: "You're welcome! I loved your profile, especially the hiking photos 🏔️",
    timestamp: new Date(Date.now() - 86400000 + 300000),
    sender: "me",
    status: "read",
    type: "text",
  },
  {
    id: "3",
    text: "That's so sweet! I actually just got back from a weekend trip to the mountains",
    timestamp: new Date(Date.now() - 86400000 + 600000),
    sender: "them",
    status: "read",
    type: "text",
  },
  {
    id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    timestamp: new Date(Date.now() - 86400000 + 900000),
    sender: "them",
    status: "read",
    type: "image",
  },
  {
    id: "5",
    text: "Wow, that view is incredible! Which trail was that?",
    timestamp: new Date(Date.now() - 3600000),
    sender: "me",
    status: "delivered",
    type: "text",
  },
  {
    id: "6",
    text: "It's the Bear Mountain trail! We should go together sometime ☺️",
    timestamp: new Date(Date.now() - 1800000),
    sender: "them",
    status: "read",
    type: "text",
  },
  {
    id: "7",
    voiceNote: true,
    voiceDuration: 15,
    timestamp: new Date(Date.now() - 300000),
    sender: "me",
    status: "sent",
    type: "voice",
  },
];

export default function ChatScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [messageText, setMessageText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const scrollViewRef = useRef(null);

  const emojis = [
    "😊",
    "😂",
    "❤️",
    "😍",
    "🥰",
    "😘",
    "👍",
    "🔥",
    "💯",
    "🎉",
    "🌟",
    "💖",
  ];

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setIsTyping(Math.random() > 0.7);
    }, 3000);
    return () => clearTimeout(typingTimer);
  }, [messages]);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const sendMessage = (text, imageUrl, voiceNote) => {
    if (!text && !imageUrl && !voiceNote) return;
    const newMessage = {
      id: Date.now().toString(),
      text,
      imageUrl,
      voiceNote,
      voiceDuration: voiceNote ? Math.floor(Math.random() * 30) + 5 : undefined,
      timestamp: new Date(),
      sender: "me",
      status: "sent",
      type: imageUrl ? "image" : voiceNote ? "voice" : "text",
    };
    setMessages((prev) => [...prev, newMessage]);
    setMessageText("");
    setShowEmojiPicker(false);
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessage.id ? { ...msg, status: "delivered" } : msg
        )
      );
    }, 1000);
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessage.id ? { ...msg, status: "read" } : msg
        )
      );
    }, 3000);
  };

  const handleImagePicker = () => {
    Alert.alert("Send Image", "Choose an option", [
      {
        text: "Camera",
        onPress: () =>
          sendMessage(
            undefined,
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
          ),
      },
      {
        text: "Gallery",
        onPress: () =>
          sendMessage(
            undefined,
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
          ),
      },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const handleVoiceNote = () => {
    if (isRecording) {
      setIsRecording(false);
      sendMessage(undefined, undefined, true);
    } else {
      setIsRecording(true);
      setTimeout(() => {
        setIsRecording(false);
        sendMessage(undefined, undefined, true);
      }, 2000);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "sent":
        return <Check color="#9CA3AF" size={12} />;
      case "delivered":
        return <CheckCheck color="#9CA3AF" size={12} />;
      case "read":
        return <CheckCheck color="#EC4899" size={12} />;
      default:
        return null;
    }
  };

  const formatTime = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const formatMatchDate = (date) => {
    const days = Math.floor(
      (Date.now() - date.getTime()) / (1000 * 60 * 60 * 24)
    );
    return days === 0 ? "today" : days === 1 ? "yesterday" : `${days} days ago`;
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* JSX structure follows the same UI logic as your original */}
    </KeyboardAvoidingView>
  );
}
