import { Text, View } from 'react-native';
import 'react-native-reanimated';
import "../global.css"
import { Stack } from 'expo-router';


export default function RootLayout() {
  
  return (
    <>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="homepage/home" options={{ headerShown: false }} />
      <Stack.Screen name="homepage/welcome" options={{ headerShown: false }} 
       />
    </Stack>
    </>
  );
}
