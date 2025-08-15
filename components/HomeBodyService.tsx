import { View, Text,Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "@/app";




type WelcomePageNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
};

export default function HomeBodyService() {

  const navigation = useNavigation<WelcomePageNavigationProp>();

  return (
    <View>
      <Text className="text-[#f86c51] text-[15px] font-semibold  mt-4 mb-3 px-4">
        Service
      </Text>
      <View className="flex flex-row flex-wrap items-center   w-full px-4 gap-y-12  gap-x-2 relative ">
        <Pressable onPress={() => navigation.navigate('send_money')}>
        <View className="w-[80px] h-[80px] bg-[#f86c51] rounded-lg flex justify-center items-center">
          <Text className="text-zinc-500 text-[12px] font-semibold absolute top-[80px] left-2">
            Send Money
          </Text>
          <Image  source={require("../assets/images/loan1.png")} />
        </View>
        </Pressable>
        <View className="w-[80px] h-[80px] bg-[#f86c51] rounded-lg flex justify-center items-center">
          <Text className="text-zinc-500 text-[12px] font-semibold absolute top-[80px] left-2">
            Cash Out
          </Text>
          <Image  source={require("../assets/images/Group 41.png")} />
        </View>
        <View className="w-[80px] h-[80px] bg-[#f86c51] rounded-lg flex justify-center items-center">
          <Text className="text-zinc-500 text-[12px] font-semibold absolute top-[80px] left-2">
            Mobile Recharge
          </Text>
          <Image  source={require("../assets/images/recharge 1.png")} />
        </View>
        <View className="w-[80px] h-[80px] bg-[#f86c51] rounded-lg flex justify-center items-center">
          <Text className="text-zinc-500 text-[12px] font-semibold absolute top-[80px] left-2">
            Add Money
          </Text>
          <Image  source={require("../assets/images/Group 39.png")} />
        </View>

        <View className="w-[80px] h-[80px] bg-[#f86c51] rounded-lg flex justify-center items-center">
          <Text className="text-zinc-500 text-[12px] font-semibold absolute top-[80px] left-2">
            Transfer Money
          </Text>
          <Image  source={require("../assets/images/money-transfer 1.png")} />
        </View>

        <View className="w-[80px] h-[80px] bg-[#f86c51] rounded-lg flex justify-center items-center">
          <Text className="text-zinc-500 text-[12px] font-semibold absolute top-[80px] left-2">
            Insurance Policy
          </Text>
          <Image  source={require("../assets/images/Group 40.png")} />
        </View>

        
      </View>
    </View>
  );
}
