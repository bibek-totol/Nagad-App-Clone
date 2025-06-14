import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import HomePage from '@/app/homepage/home';
import Transactions from '@/app/Transactions/transactions';
import People from '@/app/People/people';
import My_Nagad from '@/app/My_Nagad/my_nagad';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#f86c51', 
          borderTopWidth: 0, 
          height: 60, 
        },
        tabBarLabelStyle: {
          fontSize: 14, 
          fontWeight: 'bold',
          color: '#fff', 
        },
        tabBarActiveTintColor: '#fff', 
        tabBarInactiveTintColor: '#d1d1d1', 
      }}
    >

      <Tab.Screen
        name="HomePage"
        component={HomePage} // Your Home Screen Component
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

 
      <Tab.Screen
        name="Transactions"
        component={Transactions} // Your Transaction Screen Component
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="wallet" size={size} color={color} />
          ),
        }}
      />

      
      <Tab.Screen
        name="People"
        component={People} // Your People Screen Component
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />


      <Tab.Screen
        name="My Nagad"
        component={My_Nagad} // Your My_Nagad Screen Component
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="menuunfold" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
