import { View, Text } from 'react-native'
import React from 'react'
import WelcomePage from './homepage/welcome'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '@/components/BottomTabNavigator'
import SendMoney from './Send_Money/send_money';


const Stack = createStackNavigator();


export default function Index() {
  


  return (
    
    <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="Welcome"
      component={WelcomePage}
      options={{ headerShown: false }} 
    />

<Stack.Screen
      name="SendMoney"
      component={SendMoney}
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