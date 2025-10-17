import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "..";

const towerImage = require("../../assets/images/Group 9.png");

type RegisterNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};
export default function Register2() {
  const navigation = useNavigation<RegisterNavigationProp>();
  const [selectedOperator, setSelectedOperator] = useState<string>("");

  const operators = [
    "Teletalk",
    "Grameenphone",
    "Robi",
    "Airtel",
    "Banglalink",
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center h-40 p-2 bg-red-600">
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Feather name="arrow-left" color="white" size={40} />
        </TouchableOpacity>
        <Text className="flex-1  text-center text-white text-lg font-semibold">
          Registration
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6">
       
        <View className="items-center mt-10">
          <Image
            source={towerImage}
            className="size-40 mb-6"
            resizeMode="contain"
          />
        </View>

      
        <Text className="text-center text-lg font-semibold mb-1">
          Mobile Operator
        </Text>
        <Text className="text-center text-gray-500 text-sm ">
          Select your current mobile network operator
        </Text>

       
        <View className="gap-3 mt-24 mx-auto">
          {operators.map((op) => (
            <TouchableOpacity
              key={op}
              className="flex-row items-center space-x-2"
              onPress={() => setSelectedOperator(op)}
            >
              {selectedOperator === op ? (
                <MaterialCommunityIcons
                  name="radiobox-marked"
                  color="red"
                  size={20}
                />
              ) : (
                <MaterialCommunityIcons
                  name="radiobox-blank"
                  color="gray"
                  size={20}
                />
              )}
              <Text className="text-base">{op}</Text>
            </TouchableOpacity>
          ))}
        </View>

       
        <TouchableOpacity
          className="bg-red-600 rounded-full py-3 mt-auto mb-10"
          onPress={() => {
            if (selectedOperator) {
             
              console.log("Selected:", selectedOperator);
            }
            navigation.navigate("Register3");
          }}
        >
          <Text className="text-white text-center font-semibold text-base">
            NEXT
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
