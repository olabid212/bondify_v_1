import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function DiscoverLayout() {
  return (
      <Stack>
      <Stack.Screen name='circle' />
      <Stack.Screen name='hangouts' />
      <Stack.Screen name='moments' />
      <Stack.Screen name='map' />
      <Stack.Screen name='polls' />
      </Stack>
  )
}