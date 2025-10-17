
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "..";

type RegisterNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};

export default function Register5() {
  const navigation = useNavigation<RegisterNavigationProp>();
  const [pin, setPin] = useState("");
  const [retypePin, setRetypePin] = useState("");

  const handleSubmit = () => {
    if (pin.length === 0 || retypePin.length === 0) {
      alert("Please enter and retype your PIN");
      return;
    }
    if (pin !== retypePin) {
      alert("PINs do not match");
      return;
    }
    
    navigation.navigate("Register6");
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center p-4 h-40 bg-red-600">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" color="white" size={40} />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-white text-lg font-semibold">
          Registration
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        className="px-5 mt-6"
      >
        
        <View className="items-center mb-12">
          <Image
            source={require("../../assets/images/pin-icon.png")} 
            style={{ width: 100, height: 100, resizeMode: "contain", marginLeft:0, marginRight:0 }}
          />
          <Text className="text-lg font-semibold text-center mt-6">
            Set Nagad PIN
          </Text>
        </View>

        <View className="flex flex-col gap-6">
        <View className="flex-row items-center border-b border-gray-300 mb-6">
          <Feather name="lock" size={18} color="#DC2626" />
          <TextInput
            className="flex-1 ml-2 pb-1 text-base"
            placeholder="PIN"
            secureTextEntry
            keyboardType="numeric"
            value={pin}
            onChangeText={setPin}
          />
        </View>

       
        <View className="flex-row items-center border-b border-gray-300 mb-8">
          <Feather name="lock" size={18} color="#DC2626" />
          <TextInput
            className="flex-1 ml-2 pb-1 text-base"
            placeholder="Retype PIN"
            secureTextEntry
            keyboardType="numeric"
            value={retypePin}
            onChangeText={setRetypePin}
          />
        </View>

       
        <TouchableOpacity
          onPress={handleSubmit}
          className="border border-red-600 rounded-full py-3"
        >
          <Text className="text-center text-red-600 font-semibold text-base">
            SUBMIT
          </Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
