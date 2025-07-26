import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import {
  Home,
  Heart,
  MessageCircle,
  MessageSquareText,
  MessageSquareMore,
  Compass,
  User,
} from "lucide-react-native";

import HomeScreen from "./(root)/(tab)/home";
import DiscoverScreen from "./(root)/(tab)/discover";
import ChatScreen from "./(root)/(tab)/chats";
import ProfileScreen from "./(root)/(tab)/profile";
import MatchesScreen from "./(root)/(tab)/matches";

// ✅ TabIcon Component
const TabIcon = ({ focused, Icon }) => (
  <View style={styles.iconContainer}>
    <Icon size={26} color={focused ? "#fff" : "#8E8E8E"} />
  </View>
);

const Tab = createBottomTabNavigator();

const RootTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          paddingBottom: 40,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          paddingTop: 10,
          backgroundColor: "#111111",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} Icon={Home} />,
        }}
      />

      <Tab.Screen
        name="Matches"
        component={MatchesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} Icon={Heart} />,
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} Icon={MessageSquareText} />,
        }}
      />

      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} Icon={Compass} />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} Icon={User} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default RootTabs;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
  },
});
