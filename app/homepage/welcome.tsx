import { View, Text ,Image,Pressable} from 'react-native'
import { Link } from 'expo-router'

export default function WelcomePage() {
  return (
    <>
    <View className="flex-1 items-center ">
    <Image 
  source={require('../../assets/images/Rectangle4.png')} 
  className="absolute w-full h-full" 
/>



      <Image 
  source={require('../../assets/images/Nagadlogo-1.png')}
  className='mt-28'/>

<View className='flex-1 items-center gap-y-10 mt-80'>

<Image 
  source={require('../../assets/images/Group 6.png')}
  className=''/>


<Link href="/homepage/home" asChild>
          <Pressable className="bg-white px-6 py-3 rounded-lg">
            <Text className="text-black text-lg font-semibold">Get Started</Text>
          </Pressable>
        </Link>

      <Image 
  source={require('../../assets/images/1.1.22.03.png')}
  className=''/>

</View>

 
      </View>
    </>
  )
}