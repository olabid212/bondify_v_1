import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Plus } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

const mockStatuses = [
  {
    id: "1",
    name: "Your Status",
    image: "https://i.pravatar.cc/150?img=1",
    isUser: true,
  },
  {
    id: "2",
    name: "Jane",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Alex",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "4",
    name: "Sam",
    image: "https://i.pravatar.cc/150?img=4",
  },
   {
    id: "4",
    name: "Alex",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

const Status = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity>
          {item.isUser ? (
            <View style={styles.userCircle}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.addIcon}>
                <Plus size={14} color="#fff" />
              </View>
            </View>
          ) : (
            <LinearGradient
              colors={['#FEE140', '#FA709A']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientBorder}
            >
              <View style={styles.innerCircle}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
            </LinearGradient>
          )}
        </TouchableOpacity>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={mockStatuses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    backgroundColor: "#111",
  },
  itemContainer: {
    marginRight: 16,
    alignItems: "center",
    width: 70,
  },
  gradientBorder: {
    borderRadius: 40,
    padding: 2,
  },
  innerCircle: {
    backgroundColor: "#111",
    borderRadius: 40,
    padding: 2,
  },
  userCircle: {
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 40,
    padding: 2,
    position: "relative",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    marginTop: 4,
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  addIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#A80EC1",
    borderRadius: 10,
    padding: 2,
  },
});
