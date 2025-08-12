import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreenTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Around you", "Top Picks", "Matchmaker pick"];

  return (
    <View style={styles.tabsContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={styles.tabWrapper}
          onPress={() => setActiveTab(tab)}
        >
          <View
            style={[
              styles.tabButton,
              activeTab === tab && styles.activeTabButton,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
            {tab === "Matchmaker pick" && (
              <View style={styles.aiBadge}>
                <Text style={styles.aiBadgeText}>AI</Text>
              </View>
            )}
          </View>
    
          {activeTab === tab && <View style={styles.underline} />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 8,
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
  },
  tabWrapper: {
    alignItems: "center",
  },
  tabButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  activeTabButton: {
    // Additional styling if needed
  },
  underline: {
    height: 2,
    width: 30,
    backgroundColor: "#FF0066",
    marginTop: 4,
    borderRadius: 1,
  },
  tabText: {
    fontSize: 16,
    color: "#888",
    fontFamily: "SatoshiMedium",
  },
  activeTabText: {
    color: "#FF0066",
    fontFamily: "SatoshiBold",
  },
  aiBadge: {
    backgroundColor: "#4A90E2",
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 4,
  },
  aiBadgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default HomeScreenTabs;
