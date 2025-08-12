import { View, ScrollView, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GeneralHeader from "../../../../components/headers/GeneralHeader";
import DiscoverCard from "../../../../components/discoverScreen/DiscoverCard";

const Discover = () => {
  const cards = [
    {
      title: "Nearby Hangouts",
      description: "Join fun events happening around you.",
      image: require("../../../../assets/images/2290.jpg"),
      route: "/discover/hangouts",
    },
    {
      title: "Bond Circles",
      description: "Join topic-based community groups.",
      image: require("../../../../assets/images/2290.jpg"),
      route: "/discover/circles",
    },
    {
      title: "Bond Moments",
      description: "Explore public posts and shared thoughts.",
      image: require("../../../../assets/images/2290.jpg"),
      route: "/discover/moments",
    },
    {
      title: "Community Map",
      description: "See events and users around your area.",
      image: require("../../../../assets/images/2290.jpg"),
      route: "/discover/map",
    },
    {
      title: "Polls & Questions",
      description: "Answer trending questions in the community.",
      image: require("../../../../assets/images/2290.jpg"),
      route: "/discover/polls",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <GeneralHeader title="Discover" />
      <ScrollView className="px-4 mt-2">
        {cards.map((card, index) => (
          <DiscoverCard key={index} {...card} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
