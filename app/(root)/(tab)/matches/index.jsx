import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DetailedProfile from '../../../../components/homeScreen/DetailedProfile'
import { ScrollView } from 'react-native-gesture-handler'


const Matches = () => {
  return (
    <SafeAreaView className='flex-1 bg-app'>
      <ScrollView className="pt-3 flex-1 bg-app"
        contentContainerStyle={{ paddingBottom: 100 }} // add extra bottom space for buttons
        showsVerticalScrollIndicator={false}>

        <DetailedProfile />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Matches