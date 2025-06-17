import { View, Text } from 'react-native'
import React from 'react'
import WelcomePage from './homepage/welcome'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '@/components/BottomTabNavigator'
import SendMoney from './Send_Money/send_money';
import send_money_2 from './Send_Money/send_money_2';
import send_money_3 from './Send_Money/send_money_3';
import send_money_4 from './Send_Money/send_money_4';


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

      name="send_money_2"
      component={send_money_2}
      options={{ headerShown: false }}
    />

<Stack.Screen

name="send_money_3"
component={send_money_3}
options={{ headerShown: false }}
/>

<Stack.Screen

name="send_money_4"
component={send_money_4}
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