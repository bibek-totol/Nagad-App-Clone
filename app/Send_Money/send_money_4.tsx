import { View, Text, Pressable, Image,TextInput } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '..';
import { useEveryData } from '../context/EveryDataContext';
import CircularProgress from 'react-native-circular-progress-indicator';
import { useState, useRef } from 'react';





type WelcomePageNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};
export default function Send_money_4() {
    const navigation = useNavigation<WelcomePageNavigationProp>();
    const {everydata, setEverydata} = useEveryData();
    const [percentages, setPercentages] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const  progressRef = useRef<any>(null);


    const amount = Math.ceil(Math.round(everydata?.amount as number));
    const charge = Math.ceil(amount * 0.01);
    const total = amount + charge;
    const remain_balance = Math.ceil(everydata?.balance as number - total);


  const handlePress = () => {

    setEverydata({...everydata, balance: remain_balance, amount, charge, total});
    if(!isAnimating){
      setIsAnimating(true);
      setPercentages(100);
     
      progressRef.current?.play();
    }
    
    else{
      setIsAnimating(false);
      setPercentages(0);

      progressRef.current?.pause();
    }

   
  };

   
    


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


        <View style={{paddingHorizontal:30}} className="bg-slate-200 w-4/5 h-40 mt-4 flex  flex-wrap  items-center justify-between gap-x-28 p-6  ">
          
          
          <View className='flex flex-col'>
            <Text>{amount} টাকা</Text>
            <Text style={{fontSize:10, color:'red'}} >Amount</Text>
            
          </View>
          <View className='flex flex-col'>
          <Text>{charge} টাকা</Text>
            <Text style={{fontSize:10, color:'red'}}>Charge</Text>
          </View>
   

          <View className='flex flex-col'>
          <Text>{ total}টাকা</Text>
            <Text style={{fontSize:10, color:'red'}}>Total</Text>
          </View>


          <View className='flex flex-col'>
          <Text>{remain_balance} টাকা</Text>
            <Text style={{fontSize:10, color:'red'}}>Remaining Balance</Text>
          </View>
        </View>


        <View className='flex-1 items-center mt-8'>
        
        <Pressable  onLongPress={ handlePress } className='mx-auto' >
        <CircularProgress

            value={percentages}
            ref={progressRef}
            radius={70}
            duration={1300}
            progressValueColor={"#f86c51"}
            circleBackgroundColor='white'
            showProgressValue={false}
        
            activeStrokeWidth={10}
            valueSuffix={"%"}
            valuePrefix={" "}
            onAnimationComplete={() => {
              if(percentages === 100){
                navigation.navigate("send_money_5");
              }
             
            }}

            
          />

           <Image
             source={require('../../assets/images/68.png')}
              style={{
                width: 110,
                height: 110,
                position: "relative",
                bottom: 130,
                margin: "auto",
                left: 5,
              
             
              }}
            />
          </Pressable>




{/* <Pressable onPress={() => navigation.navigate("send_money_5")}
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
          </Pressable> */}



</View>

    </View>
  )
}