import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "..";

const logo = require("../../assets/images/68.png");

type RegisterNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};

export default function Register1() {
  const navigation = useNavigation<RegisterNavigationProp>();
  const [mobile, setMobile] = useState("");

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center p-4 h-40 bg-red-600">
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Feather name="arrow-left" color="white" size={40} />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-white text-lg font-semibold">
          Registration
        </Text>
      </View>

      {/* Logo & Title */}
      <View className="items-center mt-8">
        <Image source={logo} className="w-20 h-20 mb-3" resizeMode="contain" />
        <Text className="text-base font-medium">Create an Account</Text>
      </View>

      {/* Input Section */}
      <View className="mt-8 px-6">
        <Text className="text-red-600 text-xs mb-1">Mobile Number</Text>
        <View className="flex-row items-center border-b border-red-600 pb-1">
          <Feather name="phone" color="red" size={18} />
          <TextInput
            className="ml-2 flex-1 text-base"
            placeholder="Enter mobile number"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={setMobile}
          />
        </View>

        {/* Next Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Register2")}
          className="bg-red-600 rounded-full py-3 mt-6"
        >
          <Text className="text-white text-center font-semibold text-base">
            NEXT
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center mt-10 px-6">
        <View className="flex-1 h-[1px] bg-red-600" />
        <Text className="mx-2 text-gray-500">OR</Text>
        <View className="flex-1 h-[1px] bg-red-600" />
      </View>

      {/* Info Text */}
      <Text className="text-center text-gray-500 text-sm mt-4 px-6">
        To register, please visit the uddokta point with your mobile phone, a
        photo and NID copy
      </Text>

      {/* Map Section */}
      <TouchableOpacity className="items-center mt-8">
        <View className="bg-red-100 p-4 rounded-full mb-2">
          <Feather name="map-pin" color="red" size={28} />
        </View>
        <Text className="text-black text-sm font-medium">
          Tap to find Nagad Uddokta point
        </Text>
      </TouchableOpacity>
    </View>
  );
}
