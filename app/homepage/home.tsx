import { View, Text, Image, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomePage() {
  return (
    <View className='flex-1 '>
      <View className='bg-[#f86c51] w-full h-2/6 flex justify-center items-center gap-y-7'>

        <View className='flex flex-row items-center justify-between w-full px-6'>
        <Image 
          source={require('../../assets/images/Nagadlogo-2.png')}
          className='mt-4 mx-auto'
        />
        <Ionicons  name="notifications-outline" size={24} color="white" />
        </View>
       
 

          <Text className='text-white text-[20px] font-semibold'>Bibek Bhowmick</Text>
       
          

          <View className='bg-white px-6 py-3 rounded-full w-1/2 flex flex-row items-center justify-center'>
          <Image 
            source={require('../../assets/images/g68.png')}
            className='mx-auto'
          />
          <Pressable className=" ">
            <Text className="text-[#f86c51] text-lg font-semibold text-center">Tap for Balance</Text>
          </Pressable>
          </View>
    
      </View>
      
    </View>
  );
}
