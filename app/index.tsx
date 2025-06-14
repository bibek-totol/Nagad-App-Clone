import { View, Text } from 'react-native'
import React from 'react'
import WelcomePage from './homepage/welcome'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '@/components/BottomTabNavigator'

const Stack = createStackNavigator();

export default function index() {
  


  return (
    
    <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="Welcome"
      component={WelcomePage}
      options={{ headerShown: false }} 
    />
  
    <Stack.Screen
      name="Home"
      component={BottomTabNavigator}
      options={{ headerShown: false }} 
    />
  </Stack.Navigator>
  
  )
}