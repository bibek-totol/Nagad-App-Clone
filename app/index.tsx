
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
import Mobile_Recharge1 from './Mobile_Recharge/Mobile_Recharge1';
import Mobile_Recharge2 from './Mobile_Recharge/Mobile_Recharge2';
import Mobile_Recharge3 from './Mobile_Recharge/Mobile_Recharge3';
import FirstPage from './Login_Pages/FirstPage';
import SecondPage from './Login_Pages/SecondPage';
import ThirdPage from './Login_Pages/ThirdPage';
import FourthPage from './Login_Pages/FoutrthPage';
import FifthPage from './Login_Pages/FifthPage';

export  type RootStackParamList = {
  send_money: undefined;
  send_money_2: undefined;
  send_money_3: undefined;
  send_money_4: undefined;
  send_money_5: undefined;
  Home: undefined;
  Welcome: undefined;
  Mobile_Recharge1: undefined;
  Mobile_Recharge2: undefined;
  Mobile_Recharge3: undefined;
  FirstPage: undefined;
  SecondPage: undefined;
  ThirdPage: undefined;
  FoutrthPage: undefined;
  FifthPage: undefined;
  
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


<Stack.Screen

name="Mobile_Recharge1"
component={Mobile_Recharge1}
options={{ headerShown: false }}
/>


<Stack.Screen

name="Mobile_Recharge2"
component={Mobile_Recharge2}
options={{ headerShown: false }}
/>


    <Stack.Screen

name="Mobile_Recharge3"
component={Mobile_Recharge3}
options={{ headerShown: false }}
/>


<Stack.Screen

name="FirstPage"
component={FirstPage}
options={{ headerShown: false }}
/>


<Stack.Screen

name="SecondPage"
component={SecondPage}
options={{ headerShown: false }}
/>


<Stack.Screen

name="ThirdPage"
component={ThirdPage}
options={{ headerShown: false }}
/>


<Stack.Screen

name="FoutrthPage"
component={FourthPage}
options={{ headerShown: false }}
/>


<Stack.Screen

name="FifthPage"
component={FifthPage}
options={{ headerShown: false }}
/>


  </Stack.Navigator>
  </EveryDataProvider>
  
  )
}