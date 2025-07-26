import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, StyleSheet } from "react-native";
import {
  Ionicons,
  FontAwesome,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import HomeScreen from "./(root)/(tab)/home";
import DiscoverScreen from "./(root)/(tab)/discover";
import ChatScreen from "./(root)/(tab)/chats";
import ProfileScreen from "./(root)/(tab)/profile";
import MatchesScreen from "./(root)/(tab)/matches";



// ✅ TabIcon Component (no label)
const TabIcon = ({ focused, icon, activeIcon }) => (
    <View style={styles.iconContainer}>
      {focused ? activeIcon : icon}
    </View>
  );
  

const Tab = createBottomTabNavigator();

const RootTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
          paddingBottom: 10,
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
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={<Ionicons name="home-outline" size={24} color="#8E8E8E" />}
              activeIcon={<Ionicons name="home" size={24} color="#f472b6" />}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Matches"
        component={MatchesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={<FontAwesome name="heart-o" size={24} color="#8E8E8E" />}
              activeIcon={
                <FontAwesome name="heart" size={24} color="#f472b6" />
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Ionicons name="chatbubble-outline" size={24} color="#8E8E8E" />
              }
              activeIcon={
                <Ionicons name="chatbubble" size={24} color="#f472b6" />
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Ionicons name="compass-outline" size={24} color="#8E8E8E" />
              }
              activeIcon={<Ionicons name="compass" size={24} color="#f472b6" />}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Ionicons name="person-outline" size={24} color="#8E8E8E" />
              }
              activeIcon={<Ionicons name="person" size={24} color="#f472b6" />}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootTabs;

// ✅ Styles
const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 50, // ✅ Limit the height
    width: 50, // or auto if not needed
    paddingVertical: 0, // ✅ No extra vertical padding
  },
});
  