import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "..";
import { AntDesign } from "@expo/vector-icons";

type WelcomePageNavigationProp = {
    navigate: (screen: keyof RootStackParamList) => void;
    goBack: () => void;
  };

export default function ThirdPage() {
  const navigation = useNavigation<WelcomePageNavigationProp>();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View className="flex-1 bg-white min-h-screen">
    <SafeAreaView >
    
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
            name="arrow-left"
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
          Send Money
        </Text>
      </View>

        
        <View className="flex-1 items-center px-6 mt-6">
          <Text className="text-center text-gray-800 font-medium">
            Please call to get OTP
          </Text>
         
         <View className=" flex justify-center items-center border p-4 rounded-full mt-4">
         <Image
            source={require("../../assets/images/telephone 1.png")}
            className="w-16 h-16 mt-6 "
            resizeMode="contain"
          />
         </View>
         

          <Text className="text-red-600 font-bold text-lg mt-4">
            01869-226214
          </Text>

          <Text className="text-center text-gray-500 mt-2 text-sm">
            After a successful request to call center, an OTP will be sent to
            below number. Please wait.
          </Text>


        
          <View className="flex-row justify-between w-full mt-8 px-6">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                keyboardType="numeric"
                maxLength={1}
                className="w-10 h-12 border-b-2 border-red-500 text-center text-lg text-black"
              />
            ))}
          </View>

          
          <TouchableOpacity
            className="w-11/12 border border-red-500 py-3 rounded-full mt-8"
          >
            <Text className="text-center text-red-500 text-base font-semibold">
              VERIFY
            </Text>
          </TouchableOpacity>

          
          <View className="mt-10 w-full">
            <Text className="text-center text-black font-semibold">
              PIN Reset from USSD
            </Text>
            <View className="mt-3 px-6">
              <Text className="text-gray-700 text-sm">1. Dial *167#</Text>
              <Text className="text-gray-700 text-sm">
                2. Provide your NID/Photo ID-Number
              </Text>
              <Text className="text-gray-700 text-sm">
                3. Enter your last transaction information
              </Text>
              <Text className="text-gray-700 text-sm">
                4. Set New 4-digit PIN after getting Confirmation SMS
              </Text>
            </View>

            <Text className="text-center text-sm text-gray-600 mt-4">
              For more details,{" "}
              <Text className="text-red-500 underline">Click Here</Text>
            </Text>
          </View>
        </View>
        </SafeAreaView>
    </View>
      </ScrollView>
    
  );
}
