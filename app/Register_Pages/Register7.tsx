import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "..";

type RegisterNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};

export default function Register7() {
  const navigation = useNavigation<RegisterNavigationProp>();

  const handleContinue = () => {
   
    navigation.navigate("Home" as keyof RootStackParamList);
  };

  return (
    <View className="flex-1 bg-white items-center justify-center px-8">
    
      <View className="mb-8">
        <Image
            source={require("../../assets/images/Nagadlogo-3.png")}
          className="w-32 h-32"
          resizeMode="contain"
        />
      </View>

     
      <View className="mb-6 items-center">
        <Text className="text-red-600 text-lg font-semibold mb-4">
          Welcome to Nagad App
        </Text>
        <Text className="text-gray-500 text-center mb-4">
          Your device is ready for use
        </Text>
        <Text className="text-gray-800 font-semibold text-base mt-1">
          Your Virtual Card Number is
        </Text>
        <Text className="text-gray-800 font-semibold text-base">
          9856 0007 0767 0093
        </Text>
      </View>

      
      <TouchableOpacity
        onPress={handleContinue}
        className="bg-red-600 rounded-full py-3 w-full mt-4"
      >
        <Text className="text-white text-center font-semibold text-base">
          CONTINUE
        </Text>
      </TouchableOpacity>
    </View>
  );
}
