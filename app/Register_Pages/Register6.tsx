import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
    Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RootStackParamList } from "..";

type RegisterNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};

export default function Register6() {
  const navigation = useNavigation<RegisterNavigationProp>();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);

  
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

   
    if (text && index < otp.length - 1) {
      const nextInput = `otp-${index + 1}`;
      // @ts-ignore
      inputs[nextInput]?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    console.log("Entered OTP:", code);
  navigation.navigate("Register7");
  };

  // 👇 Create ref map for inputs
  const inputs: { [key: string]: TextInput | null } = {};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-white"
    >
      {/* Header */}
      <View className="flex-row items-center p-4 h-20 bg-red-600">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" color="white" size={32} />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-white text-lg font-semibold">
          Verify OTP
        </Text>
      </View>

     
      <View className="flex justify-center p-6 mt-12">
        <View className="mb-6 items-center">
          
          <View className="size-36 border-2 border-red-500 rounded-full flex items-center justify-center mb-4">
            <Image source={require("../../assets/images/otppic.png")} 

                className="size-32"
                resizeMode="contain"
              />
          </View>

          <Text className="text-center text-gray-500">
            An SMS with OTP has been sent to
          </Text>
          <Text className="text-center text-red-600 font-semibold text-base">
            +881151651566565
          </Text>
        </View>

        
       <View className="flex-row justify-center mb-6">
  {otp.map((value, index) => (
    <TextInput
      key={index}
      ref={(ref) => (inputs[`otp-${index}`] = ref)}
      className="w-10 h-12 mx-2 border-b-2 border-red-600 text-center text-lg font-semibold"
      maxLength={1}
      keyboardType="numeric"
      value={value}
      onChangeText={(text) => handleChange(text, index)}
    />
  ))}
</View>


       
        <Text className="text-gray-500 mb-6">
          Resend OTP?{" "}
          <Text className="text-red-600 font-semibold">
            {timer > 0 ? `00:${timer < 10 ? `0${timer}` : timer}` : "00:00"}
          </Text>
        </Text>

        
        <TouchableOpacity
          className="w-full bg-white border border-red-600 rounded-full py-3 items-center"
          onPress={handleVerify}
        >
          <Text className="text-red-600 text-base font-semibold">VERIFY</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
