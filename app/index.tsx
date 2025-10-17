import BottomTabNavigator from "@/components/BottomTabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FirstPage from "./Login_Pages/FirstPage";
import SecondPage from "./Login_Pages/SecondPage";
import ThirdPage from "./Login_Pages/ThirdPage";
import Mobile_Recharge1 from "./Mobile_Recharge/Mobile_Recharge1";
import Mobile_Recharge2 from "./Mobile_Recharge/Mobile_Recharge2";
import Mobile_Recharge3 from "./Mobile_Recharge/Mobile_Recharge3";
import Register1 from "./Register_Pages/Register1";
import Register2 from "./Register_Pages/Register2";
import Register3 from "./Register_Pages/Register3";
import Register4 from "./Register_Pages/Register4";
import Register5 from "./Register_Pages/Register5";
import SendMoney from "./Send_Money/send_money";
import Send_money_2 from "./Send_Money/send_money_2";
import Send_money_3 from "./Send_Money/send_money_3";
import Send_money_4 from "./Send_Money/send_money_4";
import Send_money_5 from "./Send_Money/send_money_5";
import { EveryDataProvider } from "./context/EveryDataContext";
import WelcomePage from "./homepage/welcome";
import Register6 from "./Register_Pages/Register6";
import Register7 from "./Register_Pages/Register7";

export type RootStackParamList = {
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
  ThirdPage: { phone: string };
  Register1: undefined;
  Register2: undefined;
  Register3: undefined;
  Register4: undefined;
  Register5: undefined;
  Register6: undefined;
  Register7: undefined;
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
          name="Register1"
          component={Register1}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register2"
          component={Register2}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register3"
          component={Register3}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register4"
          component={Register4}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register5"
          component={Register5}
          options={{ headerShown: false }}
        />
  


       <Stack.Screen
          name="Register6"
          component={Register6}
          options={{ headerShown: false }}
        />

       <Stack.Screen
          name="Register7"
          component={Register7}
          options={{ headerShown: false }}
        />
      
      </Stack.Navigator>


    </EveryDataProvider>
  );
}
