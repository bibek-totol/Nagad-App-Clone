import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "..";
import { useEveryData } from "../context/EveryDataContext";

type WelcomePageNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};
export default function Mobile_Recharge3() {
  const navigation = useNavigation<WelcomePageNavigationProp>();
  const {everydata, setEverydata} = useEveryData();
  const [amount, setAmount] = useState("50");
  const [selected, setSelected] = useState("Amount");
  const quickAmounts = ["50", "100", "200", "500"];
  const tabs = ["Amount", "Voice", "Internet", "Bundle"];
  return (
    <View className="flex-1 bg-white">
      <View
        style={{
          backgroundColor: "#f86c51",
          width: "100%",
          height: "16%",
          flexDirection: "row",
          alignItems: "center",
          gap: 7,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
            style={{ marginLeft: 10 }}
          />
        </Pressable>
        <Text
          style={{
            fontSize: 24,
            color: "white",
            fontWeight: "600",
            flex: 1,
            textAlign: "center",
          }}
        >
          Mobile Recharge
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        
        <View className="bg-white mx-4 mt-4 p-4 rounded-xl shadow">
          <View className="flex-row items-center">
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
              }}
              className="w-12 h-12 rounded-full"
            />
            <View className="ml-3 flex-1">
              <Text className="text-base font-semibold">{everydata.name}</Text>
              <Text className="text-gray-500">{everydata.phone}</Text>
            </View>
            <Image
             src={everydata?.logo}
              style={{ width: 90, height: 50, resizeMode: "contain" }}
            />
          </View>
        </View>

    
        <View className="flex-row justify-around bg-white mt-4 mx-4 rounded-xl overflow-hidden">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              className={`flex-1 py-3 items-center ${
                selected === tab
                  ? "bg-gradient-to-r from-orange-400 to-red-500"
                  : ""
              }`}
              
            >
              <Text
                className={`${
                  selected === tab
                    ? "text-black font-semibold"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        
        <View className="mx-4 mt-6 border-b border-gray-300 flex-row items-center">
          <Text className="text-red-600 text-xl">৳</Text>
          <TextInput
            className="flex-1 ml-2 text-lg"
            value={amount}
            keyboardType="numeric"
            onChangeText={setAmount}
          />
        </View>

        
        <View className="flex-row justify-around mt-6 mx-6">
          {quickAmounts.map((val) => (
            <TouchableOpacity
              key={val}
              className={`px-6 py-2 rounded-full ${
                amount === val ? "bg-red-600" : "bg-red-100"
              }`}
              onPress={() => setAmount(val)}
            >
              <Text
                className={`text-sm ${
                  amount === val ? "text-white font-bold" : "text-red-600"
                }`}
              >
                {val}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        
        <Text className="text-center text-gray-700 mt-4">
          Available Balance: <Text className="font-bold">{everydata.balance}</Text>
        </Text>

        
        <TouchableOpacity  className="bg-red-600 mx-6 mt-6 py-3 rounded-full">
          <Text className="text-center text-white font-semibold text-base">
            NEXT
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
