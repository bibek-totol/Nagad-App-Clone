import { FlatList, Pressable, Text, TextInput, View, Image,Alert,ActivityIndicator } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { RootStackParamList } from '..';
import Item from '../type/type';
import { useEveryData } from '../context/EveryDataContext';




type WelcomePageNavigationProp = {
  navigate: (screen: keyof RootStackParamList) => void;
  goBack: () => void;
};




const SendMoney = () => {
  const {data, setData} =  useEveryData();
  const {everydata, setEverydata} = useEveryData();
  const navigation = useNavigation<WelcomePageNavigationProp>();
  const [loading, setLoading ] = useState<boolean>(false);

  const handleData = (item: Item) => {
    setEverydata(item);

  
  };


  const nextfunction =()=>{

    if (!everydata.phone) {
      Alert.alert("Please Select Recipient Number");
      return;
    }

    navigation.navigate("send_money_2");
  }

  const fetchContact = async () => {
    setLoading(true);
    const response = await fetch('https://bibek-totol.github.io/API-of-Nagad-Clone-App/db.json');
    if (!response.ok) {
      throw new Error('Failed to fetch contacts list');
    }
    return response.json();
  };

  useEffect(() => {
    fetchContact()
      .then((res) => setData(res.users))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1 }}>
    
      <View style={{ backgroundColor: '#f86c51', width: '100%', height: '16%', flexDirection: 'row', alignItems: 'center', gap: 7 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" style={{ marginLeft: 10 }} />
        </Pressable>
        <Text style={{ fontSize: 24, color: 'white', fontWeight: '600', flex: 1, textAlign: 'center' }}>Send Money</Text>
      </View>

      
      <Text style={{ padding: 8, color: '#4b5563' }}>Recipient</Text>
      <View style={{ padding: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <AntDesign name="phone" size={24} color="red" />
        <TextInput
          placeholder="Select recipient's phone number"
          placeholderTextColor="black"
          keyboardType='numeric'
          readOnly
          maxLength={14}
          selectionColor={'#f86c51'}
          
          onChange={(e) => setEverydata({ ...everydata, phone: e.nativeEvent.text })}
          value={everydata?.phone || ''}
          style={{ color: 'black', borderWidth: 1, borderColor: '#d1d5db', borderRadius: 8, padding: 8, marginRight: 8, flex: 1 }}
        />
        <Pressable onPress={nextfunction}>
    
          <AntDesign name="arrowright" size={24} color="white" style={{ backgroundColor: '#f86c51', padding: 8, borderRadius: 50 }} />
        </Pressable>
      </View>
      <Text style={{ padding: 12, fontSize: 14, color: '#9e9e9e' }}>
        Enter Name, 11-digit Mobile Number or 16-digit Virtual Card Number
      </Text>

      
      <Text style={{ fontSize: 24, padding: 8, marginTop: 12, color: '#9e9e9e', fontWeight: '600' }}>All Contacts</Text>
      


      <View style={{ borderBottomWidth: 1, borderBottomColor: '#9e9e9e', width: '100%', marginVertical: 8 }} />

      <FlatList
        data={data}
        keyExtractor={(item) => item?.id as any}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleData(item)} style={{ borderBottomWidth: 1, borderBottomColor: '#9e9e9e', width: '100%', marginVertical: 8 }} >
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
            {item?.image && (
  <Image
    source={{ uri: `${item?.image}?auto=compress&cs=tinysrgb&w=150&h=150` }}
    style={{
      width: 70,
      height: 70,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#fff',
    }}
    resizeMode="cover"
    
  />
 
)}

            <Text style={{ marginLeft: 12, fontSize: 16, color: '#333', flex: 1 }}>{item.name}</Text>
            <AntDesign name="right" size={24} color="#9e9e9e" />
          </View>
          </Pressable>
        )}
      />
      
    </View>
    
  );
};

export default SendMoney;
