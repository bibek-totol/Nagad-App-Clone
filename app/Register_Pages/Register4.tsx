import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "..";

type RegisterNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};

export default function Register4() {
  const navigation = useNavigation<RegisterNavigationProp>();

  const [gender, setGender] = useState("Male");
  const [purpose, setPurpose] = useState("Personal");
  const [occupation, setOccupation] = useState("Service");
  const [profit, setProfit] = useState("Yes");

  const renderRadioOption = (
    label: string,
    selectedValue: string,
    setSelectedValue: (value: string) => void
  ) => (
    <TouchableOpacity
      onPress={() => setSelectedValue(label)}
      className="flex-row items-center mr-4 mb-2"
    >
      <View
        className={`w-5 h-5 rounded-full border-2 mr-2 ${
          selectedValue === label ? "border-red-600" : "border-gray-400"
        } flex items-center justify-center`}
      >
        {selectedValue === label && (
          <View className="w-2.5 h-2.5 rounded-full bg-red-600" />
        )}
      </View>
      <Text className="text-base">{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center p-4 h-40 bg-red-600">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" color="white" size={40} />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-white text-lg font-semibold">
          Additional Info
        </Text>
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        className="p-7 mt-4"
      >
      
        <View className="mb-6">
          <Text className="text-gray-500 text-xs mb-4">Gender</Text>
          <View className="flex-row flex-wrap">
            {["Male", "Female", "Others"].map((g) => (
              <View key={g}>{renderRadioOption(g, gender, setGender)}</View>
            ))}
          </View>
        </View>

      
        <View className="mb-5">
          <Text className="text-gray-500 text-xs mb-2">Purpose of Transaction</Text>
          <View className="flex-row flex-wrap">
            {["Personal", "Others"].map((p) => (
              <View key={p}>{renderRadioOption(p, purpose, setPurpose)}</View>
            ))}
          </View>
        </View>

       
        <View className="mb-6">
          <Text className="text-gray-500 text-xs mb-4">Occupation</Text>
          <View className="flex-row flex-wrap">
            {["Service", "Business", "Housewife", "Student", "Others"].map((o) => (
              <View key={o}>{renderRadioOption(o, occupation, setOccupation)}</View>
            ))}
          </View>
        </View>

       
        <View className="mb-6">
          <Text className="text-gray-500 text-xs mb-4">Profit</Text>
          <View className="flex-row flex-wrap">
            {["Yes", "No"].map((p) => (
              <View key={p}>{renderRadioOption(p, profit, setProfit)}</View>
            ))}
          </View>
        </View>

       
        <TouchableOpacity
          onPress={() => navigation.navigate("Register5")}
          className="bg-red-600 rounded-full py-3 mt-5"
        >
          <Text className="text-center text-white font-semibold text-base">
            Next
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
