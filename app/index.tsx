
import React from 'react'
import WelcomePage from './homepage/welcome'
import BottomTabNavigator from '@/components/BottomTabNavigator'
import SendMoney from './Send_Money/send_money';
import Send_money_2 from './Send_Money/send_money_2';
import Send_money_3 from './Send_Money/send_money_3';
import Send_money_4 from './Send_Money/send_money_4';
import Send_money_5 from './Send_Money/send_money_5';
import { EveryDataProvider } from './context/EveryDataContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export  type RootStackParamList = {
  send_money: undefined;
  send_money_2: undefined;
  send_money_3: undefined;
  send_money_4: undefined;
  send_money_5: undefined;
  Home: undefined;
  Welcome: undefined;
  
};

const Stack = createNativeStackNavigator<RootStackParamList>();



export default function Index() {
  


  return (
    <EveryDataProvider>
    <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="Welcome"
      component={WelcomePage}
      options={{ headerShown: false }} 
    />

<Stack.Screen
      name="send_money"
      component={SendMoney}
      options={{ headerShown: false }} 
    />

    <Stack.Screen

      name="send_money_2"
      component={Send_money_2}
      options={{ headerShown: false }}
    />

<Stack.Screen

name="send_money_3"
component={Send_money_3}
options={{ headerShown: false }}
/>

<Stack.Screen

name="send_money_4"
component={Send_money_4}
options={{ headerShown: false }}
/>

<Stack.Screen

name="send_money_5"
component={Send_money_5}
options={{ headerShown: false }}
/>
  
    <Stack.Screen
      name="Home"
      component={BottomTabNavigator}
      options={{ headerShown: false }} 
    />
  </Stack.Navigator>
  </EveryDataProvider>
  
  )
}