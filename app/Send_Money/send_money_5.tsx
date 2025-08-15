
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '..';
import { useEveryData } from '../context/EveryDataContext';
import { View, Text, TouchableOpacity, SafeAreaView,Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';



type WelcomePageNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};
export default function Send_money_5() {
    const navigation = useNavigation<WelcomePageNavigationProp>();
    const { everydata } = useEveryData();
    const currentDate = new Date();
    const timestamp = currentDate.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    
    
     return(
        <SafeAreaView className=" p-4 mt-40 ">
   
        <View className="items-center mb-6">
          <View className="w-20 h-20 border-4 border-orange-500 rounded-full items-center justify-center">
            
            <AntDesign name="checkcircleo" size={50} color="#f97316" />
          </View>
        </View>
  
       
        <Text className="text-center text-orange-500 text-lg font-semibold mt-4">
          Send Money Success
        </Text>
        <Text className="text-center text-gray-500 text-base my-1">
          {everydata?.phone}
        </Text>
  
      
        <View className="mt-4 border-t border-gray-200 pt-4 px-8">
          <DetailRow label="Transaction ID" value={ "#" + Math.random().toString(36).substring(2, 11).toUpperCase()} />
          <DetailRow label="Amount" value={everydata?.amount as number} />
          <DetailRow label="Charge" value={everydata?.charge as number} />
          <DetailRow label="Total" value={everydata?.total as number} />
          <DetailRow label="Remaining Balance" value={(everydata?.balance ?? 0) - (everydata?.total ?? 0)}/>
          <DetailRow label="Timestamp" value={timestamp} />
          <DetailRow label="Reference" value={everydata?.reference as string} />
        </View>

  
       
        <TouchableOpacity onPress={() => navigation.navigate("Home")} className="bg-red-500 py-3 rounded-full mt-14">
          <Text className="text-white text-center font-semibold">
            Back To Home
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
     )
}


function DetailRow({ label, value }: { label: string; value: string | number }) {
    return (
      <View className="flex-row justify-between space-y-20 ">
        <Text className="text-gray-500">{label}</Text>
        <Text className="text-gray-900 font-medium">{value}</Text>
      </View>
    );
  }