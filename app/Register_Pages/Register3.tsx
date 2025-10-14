import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "..";

type RegisterNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};

export default function Register3() {
  const navigation = useNavigation<RegisterNavigationProp>();
  const [sameAddress, setSameAddress] = useState(true);

  // Mock data (You can replace this with scanned data or API response)
  const scannedData = {
    nidNumber: "1234567890123",
    applicantName: "Mashrafe Bin Mortaza",
    fatherName: "Rahim Uddin",
    motherName: "Lipi Begum",
    dob: "02/02/1980",
    presentAddress: "Boalia, Adda, Barura, Cumilla",
    permanentAddress: "Boalia, Adda, Barura, Cumilla",
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center p-4 h-40 bg-red-600">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" color="white" size={40} />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-white text-lg font-semibold">
          Scanned Data
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        className="px-5 mt-4"
      >
        {/* Data Field */}
        <View className="mb-4 p-4">
          <Text className="text-xs text-gray-500 mb-1">NID Number</Text>
          <Text className="text-base font-semibold">
            {scannedData.nidNumber}
          </Text>
          <View className="border-b border-gray-300 mt-1" />
        </View>

        <View className="mb-4 p-4">
          <Text className="text-xs text-gray-500 mb-1">Applicant's Name</Text>
          <Text className="text-base font-semibold">
            {scannedData.applicantName}
          </Text>
          <View className="border-b border-gray-300 mt-1" />
        </View>

        <View className="mb-4 p-4">
          <Text className="text-xs text-gray-500 mb-1">
            Applicant's Father's Name
          </Text>
          <Text className="text-base font-semibold">
            {scannedData.fatherName}
          </Text>
          <View className="border-b border-gray-300 mt-1" />
        </View>

        <View className="mb-4 p-4">
          <Text className="text-xs text-gray-500 mb-1">
            Applicant's Mother's Name
          </Text>
          <Text className="text-base font-semibold">
            {scannedData.motherName}
          </Text>
          <View className="border-b border-gray-300 mt-1" />
        </View>

        <View className="mb-4 p-4">
          <Text className="text-xs text-gray-500 mb-1">Date of Birth</Text>
          <Text className="text-base font-semibold">{scannedData.dob}</Text>
          <View className="border-b border-gray-300 mt-1" />
        </View>

        <View className="mb-4 p-4">
          <Text className="text-xs text-gray-500 mb-1">Present Address</Text>
          <Text className="text-base font-semibold">
            {scannedData.presentAddress}
          </Text>
          <View className="border-b border-gray-300 mt-1" />
        </View>

        <View className="mb-4 p-4">
          <Text className="text-xs text-gray-500 mb-1">Permanent Address</Text>
          <Text className="text-base font-semibold">
            {scannedData.permanentAddress}
          </Text>
          <View className="border-b border-gray-300 mt-1" />
        </View>

        {/* Checkbox */}
        <View className="flex-row items-center mt-2">
          <Checkbox
            value={sameAddress}
            onValueChange={setSameAddress}
            color={sameAddress ? "#DC2626" : undefined}
          />
          <Text className="ml-2 text-sm">Same as present address</Text>
        </View>
      </ScrollView>
    </View>
  );
}
