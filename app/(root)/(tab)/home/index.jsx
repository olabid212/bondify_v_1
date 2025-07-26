import { View, Text } from 'react-native'
import React from 'react'
import HomeHeader from '../../../../components/headers/HomeHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

import DetailedProfile from '../../../../components/homeScreen/DetailedProfile'
import UsersCard from '../../../../components/homeScreen/UsersCard'

const Home = () => {
  return (
    <SafeAreaView className="bg-app flex-1 px-4">
      <HomeHeader title="Home" />
      <ScrollView
        className="pt-3 flex-1"
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
<UsersCard />

      </ScrollView>
    </SafeAreaView>
  );
}

export default Home