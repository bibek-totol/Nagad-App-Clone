import { View, Text, Pressable, Image,TextInput } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { RootStackParamList } from '..';
import { useEveryData } from '../context/EveryDataContext';




type WelcomePageNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};
export default function Send_money_3() {
    const navigation = useNavigation<WelcomePageNavigationProp>();
    const {everydata, setEverydata} = useEveryData();
    
  return (
    <View className='flex-1 items-center gap-y-7'>
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
          Send Money
        </Text>
      </View>


      <View className="bg-slate-200 w-4/5 h-28 mt-4 flex flex-row items-center gap-x-4 p-2">
          <View>
            <Image
               source={{ uri: `${everydata?.image}?auto=compress&cs=tinysrgb&w=150&h=150` }}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: "#fff",
              }}
            />
          </View>
          <View>
            <Text>{everydata?.name}</Text>
            <Text>{everydata?.phone}</Text>
          </View>
        </View>


        <View style={{paddingHorizontal:30}} className="bg-slate-200 w-4/5 h-28 mt-4 flex flex-row items-center justify-around gap-x-4  ">
          <View className='flex flex-col'>
            <Text>{everydata?.amount} টাকা</Text>
            <Text style={{fontSize:10, color:'red'}} >Amount</Text>
            
          </View>
          <View className='flex flex-col'>
          <Text>{Math.ceil(Math.round(everydata?.amount as number) * 0.01)} টাকা</Text>
            <Text style={{fontSize:10, color:'red'}}>Charge</Text>
          </View>
        </View>


        <View className='flex-1 items-center '>

<View className="mt-8 flex flex-row items-center gap-4" style={{ marginBottom: 60 }}>
  <AntDesign name="menufold" size={24} color="red" />
 
  <TextInput
    className="h-12  text-lg w-4/5"
    style={{  borderBottomWidth: 2, borderBottomColor: "#000000" }}
    
    placeholder="Reference"
  />
</View>

<View className="flex flex-row items-center ">
  <EvilIcons name="lock" size={28} color="red" />
  <TextInput
    style={{  borderBottomWidth: 2, borderBottomColor: "#000000" }}
    className="h-12   text-lg w-4/5 "
    placeholder="PIN"
    secureTextEntry
  />
</View>

<Pressable onPress={() => navigation.navigate("send_money_4")}
            className="border-2  rounded-full mt-16"
            style={{
              borderColor: "#f86c51",
              paddingLeft: 80,
              paddingRight: 80,
              paddingTop: 11,
              paddingBottom: 11,
            }}
          >
            <Text>NEXT</Text>
          </Pressable>

</View>

    </View>
  )
}