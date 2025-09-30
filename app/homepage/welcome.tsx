import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '..';



type WelcomePageNavigationProp = StackNavigationProp<
RootStackParamList,
  'Welcome'
>;

export default function WelcomePage() {
  const navigation = useNavigation<WelcomePageNavigationProp>(); 

  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={require('../../assets/images/Rectangle4.png')}
        className="absolute w-full h-full"
      />
      <Image
        source={require('../../assets/images/Nagadlogo-1.png')}
        className="mt-28"
      />
      
      <View className="flex-1 items-center gap-y-10 mt-80">
        <Image source={require('../../assets/images/Group 6.png')} />

      
        <Pressable
          onPress={() => navigation.navigate('FirstPage')}
          className="bg-white px-6 py-3 rounded-full"
        >
          <Text className="text-black text-lg font-semibold">Get Started</Text>
        </Pressable>

        <Image source={require('../../assets/images/1.1.22.03.png')} />
      </View>
    </View>
  );
}
