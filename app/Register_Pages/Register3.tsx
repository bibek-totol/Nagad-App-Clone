import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "..";

type RegisterNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};

export default function Register3() {
  const navigation = useNavigation<RegisterNavigationProp>();
  const [sameAddress, setSameAddress] = useState(true);

  
  const [formData, setFormData] = useState({
    nidNumber: "1234567890123",
    applicantName: "Mashrafe Bin Mortaza",
    fatherName: "Rahim Uddin",
    motherName: "Lipi Begum",
    dob: "02/02/1980",
    presentAddress: "Boalia, Adda, Barura, Cumilla",
    permanentAddress: "Boalia, Adda, Barura, Cumilla",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
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
        contentContainerStyle={{ paddingBottom: 40 }}
        className="px-5 mt-2"
      >
        {/* Reusable Input Field */}
        <View className="mb-2 p-4">
          <Text className="text-xs text-gray-500 mb-1">NID Number</Text>
          <TextInput
            className="border-b border-gray-300 text-base pb-1"
            value={formData.nidNumber}
            onChangeText={(text) => handleChange("nidNumber", text)}
            keyboardType="numeric"
          />
        </View>

        <View className="mb-2 p-4">
          <Text className="text-xs text-gray-500 mb-1">Applicant's Name</Text>
          <TextInput
            className="border-b border-gray-300 text-base pb-1"
            value={formData.applicantName}
            onChangeText={(text) => handleChange("applicantName", text)}
          />
        </View>

        <View className="mb-2 p-4">
          <Text className="text-xs text-gray-500 mb-1">Applicant's Father's Name</Text>
          <TextInput
            className="border-b border-gray-300 text-base pb-1"
            value={formData.fatherName}
            onChangeText={(text) => handleChange("fatherName", text)}
          />
        </View>

        <View className="mb-2 p-4">
          <Text className="text-xs text-gray-500 mb-1">Applicant's Mother's Name</Text>
          <TextInput
            className="border-b border-gray-300 text-base pb-1"
            value={formData.motherName}
            onChangeText={(text) => handleChange("motherName", text)}
          />
        </View>

        <View className="mb-2 p-4">
          <Text className="text-xs text-gray-500 mb-1">Date of Birth</Text>
          <TextInput
            className="border-b border-gray-300 text-base pb-1"
            value={formData.dob}
            onChangeText={(text) => handleChange("dob", text)}
            placeholder="DD/MM/YYYY"
          />
        </View>

        <View className="mb-2 p-4">
          <Text className="text-xs text-gray-500 mb-1">Present Address</Text>
          <TextInput
            className="border-b border-gray-300 text-base pb-1"
            value={formData.presentAddress}
            onChangeText={(text) => handleChange("presentAddress", text)}
            multiline
          />
        </View>

        <View className="mb-2 p-4">
          <Text className="text-xs text-gray-500 mb-1">Permanent Address</Text>
          <TextInput
            className="border-b border-gray-300 text-base pb-1"
            value={formData.permanentAddress}
            onChangeText={(text) => handleChange("permanentAddress", text)}
            multiline
          />
        </View>

        {/* Checkbox */}
        <View className="flex-row items-center mt-2">
          <Checkbox
            value={sameAddress}
            onValueChange={(value) => {
              setSameAddress(value);
              if (value) {
                handleChange("permanentAddress", formData.presentAddress);
              }
            }}
            color={sameAddress ? "#DC2626" : undefined}
          />
          <Text className="ml-2 text-sm">Same as present address</Text>
        </View>
      </ScrollView>
    </View>
  );
}
