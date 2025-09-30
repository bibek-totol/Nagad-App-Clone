
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "..";
import { useNavigation } from '@react-navigation/native';



type WelcomePageNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};
export default function FirstPage() {
  const navigation = useNavigation<WelcomePageNavigationProp>();
  return (

    <View className="flex-1 bg-white">
    


<SafeAreaView className="flex-1 px-6 ">
      
      <View className="flex-row justify-end mt-4">
        <TouchableOpacity className="bg-red-600 rounded-full px-3 py-1">
          <Text className="text-white text-xs font-semibold">ENG</Text>
        </TouchableOpacity>
      </View>

    
      <View className="flex-1 items-center justify-center">
        <Image
          source={require('../../assets/images/Nagadlogo-3.png')}
          className="w-28 h-28 mb-4"
          resizeMode="contain"
        />
        <Text className="text-black text-lg font-semibold">Welcome</Text>

        
        <View className="w-full mt-8">
          <TextInput
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            className="border-b border-red-400 py-2 text-base text-gray-800"
          />
        </View>

    
        <TouchableOpacity onPress={() => navigation.navigate('SecondPage')}  className="w-full bg-red-500 py-3 rounded-full mt-6">
          <Text className="text-center text-white text-base font-semibold">
            NEXT
          </Text>
        </TouchableOpacity>

        
        <Text className="text-gray-500 mt-3">
          Not registered yet?{" "}
          <Text className="text-red-600 font-semibold">Register Now</Text>
        </Text>
      </View>

      
      <View className="flex-row justify-around py-4 border-t border-gray-200">
        <TouchableOpacity className="items-center">
          <Image 
            source={require('../../assets/images/locator 1.png')}
            className="w-6 h-6"
          />
          <Text className="text-gray-700 text-xs">Store Locator</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
        <Image 
            source={require('../../assets/images/discount 1.png')}
            className="w-6 h-6"
          />
          <Text className="text-gray-700 text-xs">Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
        <Image 
            source={require('../../assets/images/Vector.png')}
            className="w-6 h-6"
          />
          <Text className="text-gray-700 text-xs">Help</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </View>
  );
}
