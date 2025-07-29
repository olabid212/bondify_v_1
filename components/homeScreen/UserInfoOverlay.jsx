// components/UserInfoOverlay.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function UserInfoOverlay({ name, age, location }) {
  return (
    <View style={styles.overlay}>
      <Text style={styles.name}>
        {name}, {age}
      </Text>
      <Text style={styles.location}>{location}</Text>
      <View style={styles.icons}>
        <AntDesign name="closecircle" size={40} color="#f87171" />
        <Feather name="message-circle" size={35} color="#fff" />
        <AntDesign name="heart" size={40} color="#34d399" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  name: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  location: {
    color: "#ddd",
    fontSize: 16,
    marginBottom: 10,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 220,
    marginTop: 20,
  },
});
