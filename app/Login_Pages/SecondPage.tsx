
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "..";
import { useNavigation } from "@react-navigation/native";



type WelcomePageNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};
export default function SecondPage() {
  const navigation = useNavigation<WelcomePageNavigationProp>();

  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: "absolute" as const,
    left: 0,
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [12, -10], 
    }),
    fontSize: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], 
    }),
    color: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["#9ca3af", "#ef4444"], 
    }),
  };


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

        
        <View className="w-full mt-12 relative">
        <Animated.Text style={labelStyle}>PIN</Animated.Text>
          <TextInput
            value={value}
            onChangeText={setValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            keyboardType="numeric"
            secureTextEntry={true}
            maxLength={6}

            className="border-b border-red-400 py-2 text-base text-gray-800"
          />
           <Text className="text-gray-400 mt-3">
           Enter 4-digit PIN
          
        </Text>
        </View>

    
        <TouchableOpacity onPress={() => navigation.navigate('ThirdPage')}  className="w-2/3 border-2  border-red-500 py-3 rounded-full mt-12">
          <Text className="text-center text-gray-400 text-base font-semibold">
            LOGIN
          </Text>
        </TouchableOpacity>

        
        <Text className="text-gray-400 mt-3">
          Forgot PIN?{" "}
          
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
