import { View, Text, Pressable, Image, TextInput} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "..";
import { useEveryData } from "../context/EveryDataContext";



type WelcomePageNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};

const Send_money_2 = () => {
  const navigation = useNavigation<WelcomePageNavigationProp>();
  const {everydata, setEverydata} = useEveryData();
  

  return (
    <View className="flex-1 ">
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

      <View className="flex-1 items-center ">
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

        <View className="flex-1 flex-col items-center ">
          <View className="flex flex-row items-center justify-between w-full px-6 mt-14">
            <TextInput
              placeholder="Enter Amount"
              keyboardType="numeric"
              
              onChange={(e) => {
                setEverydata({
                  ...everydata,
                  amount: parseInt(e.nativeEvent.text),
                });
              }}
              
              style={{
                color: "#9e9e9e",
                borderWidth: 1,
                borderColor: "#d1d5db",
                borderRadius: 8,
                padding: 8,
                flex: 1,
              }}
            />
          </View>
          <Text className="mt-24">
            Available Balance: <Text className="font-semibold">{everydata?.balance} টাকা</Text>
          </Text>
          <Pressable onPress={() => navigation.navigate("send_money_3")}
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
    </View>
  );
};

export default Send_money_2;
