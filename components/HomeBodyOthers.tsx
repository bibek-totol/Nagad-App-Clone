import { View, Text,Image } from "react-native";

export default function HomeBodyOthers() {
  return (
    <View className="mb-10">
      <Text className="text-[#f86c51] text-[15px] font-semibold  mt-4 mb-3 px-4">
        Others
      </Text>
      <View className="flex flex-row flex-wrap items-center  w-full px-4 gap-y-12 gap-x-2 ">


      <View className="w-[80px] h-[80px] bg-[#f86c51] rounded-lg flex justify-center items-center">
          <Text className="text-zinc-500 text-[12px] font-semibold absolute top-[80px] left-2">
            Merchant Pay
          </Text>
          <Image  source={require("../assets/images/Group 42.png")} />
        </View>

        <View className="w-[80px] h-[80px] bg-[#f86c51] rounded-lg flex justify-center items-center">
          <Text className="text-zinc-500 text-[12px] font-semibold absolute top-[80px] left-2">
            Contact
          </Text>
          <Image  source={require("../assets/images/loan1.png")} />
        </View>
        <View className="w-[80px] h-[80px] bg-[#f86c51] rounded-lg flex justify-center items-center">
          <Text className="text-zinc-500 text-[12px] font-semibold absolute top-[80px] left-2">
            Jakat Calculator
          </Text>
          <Image  source={require("../assets/images/discount (2) 1.png")} />
        </View>
        <View className="w-[80px] h-[80px] bg-[#f86c51] rounded-lg flex justify-center items-center">
          <Text className="text-zinc-500 text-[12px] font-semibold absolute top-[80px] left-2">
            Limit and Charge
          </Text>
          <Image  source={require("../assets/images/Group 65.png")} />
        </View>
        <View className="w-[80px] h-[80px] bg-[#f86c51] rounded-lg flex justify-center items-center">
          <Text className="text-zinc-500 text-[12px] font-semibold absolute top-[80px] left-2">
            Donation
          </Text>
          <Image  source={require("../assets/images/image 7.png")} />
        </View>

        

        
      </View>
    </View>
  );
}
