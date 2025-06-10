import { View, Text } from 'react-native'
import React from 'react'
import WelcomePage from './homepage/welcome'

export default function index() {
  return (
    <View className='flex-1'>
      <WelcomePage/>
    </View>
  )
}