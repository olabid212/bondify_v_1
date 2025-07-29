import { View, Text } from 'react-native'
import React from 'react'

const LocationAccess = () => {
  return (
    <View className="bg-white flex-1 px-2 pt-8">
      <View className='flex-1'>
        <Text className="text-2xl font-SatoshiBold">
          Enable location access
        </Text>
        <Text className="font-Satoshi pr-20 mt-2">
          we'll use this to show you potential matches in your area
        </Text>
      </View>
    </View>
  );
}

export default LocationAccess