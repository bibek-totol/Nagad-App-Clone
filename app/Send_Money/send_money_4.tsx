import { View, Text, Pressable, Image,TextInput } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from '@expo/vector-icons/EvilIcons';





type WelcomePageNavigationProp = {
  navigate: (screen: keyof RootStac) => void;
  goBack: () => void;
};
export default function Send_money_4() {
    const navigation = useNavigation<WelcomePageNavigationProp>();
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
              source={{
                uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHEA8QEhAQEBIREQ0QDw8OEBENDw8PFhEWFhURExMYKCggGBoxGxUTIjEhJSk3LjoxGCs/ODYsNygtLjcBCgoKDQ0OFQ8PFisZFRk3KysrKy0rKy0rLS0rKysrKystKys3KysrLSsrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMkA+wMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAAAQUGAgMEB//EADsQAAIBAgMDCQQKAgMBAAAAAAABAgMRBBIhBTGRBhMiQVFSYXHRMkKBsRQVI0NTkqLB4fCDk2JywjP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APsAAKyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJBIEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEkEgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASQSBAAAAAAAAAAAAAAAABxqVFSTlJpJb2zkZvbGMeIm4p9GLsvF9chIPRittt6U0ku9LV/BdR4ntKs/vJfCyPIDWCxobYq097U14qz4oucFjoYxaaNb4vevVGVOdKo6MlKLs1qmLBsQdODxCxUIzXXvXY+tHcZAAAAAAAAAAAAAAJIJAgAAAAAAAAAAAAAAAHVi6nNU5y7Iya87aGQNdjIc5TqRW9xlbzsZE1AABQAAF5ydqXVSPY4yXxun8kXBTcnYf8A0l/0Xzb/AGLkxQAAAAAAAAAAAAACSCQIAAAAAAAAAAAAAAAAMxtXCfRaj7sruP7o051YihHExcZK6fFPtRZRkAWOL2RUo+ys8e1e0vNeh4JU3HRprzTRocTlCLm0krt6JLrZ30MDVr7oPzayx4svNnbNjhOk+lPt6o+C9SaO/AYb6LTjHr3yfbJ7/wC+B6ADIAAAAAAAAAAAAABJBIEAAAAAAAAAAAAAAB4sZtOnhdPal3Y9Xm+oD2kSkoatpLtbsZzEbXq1tzyLsjv4nhnJzd2232t3ZcGplj6MN9SHwd/kcPrSj+IuEvQy4Lg1Udo0ZfeR+N18zup14VfZlGXk0zHgYNoDKUMdVobpu3Y+kuDLTCbbUtKiy/8AKOsfit6JgtwRCSmk0009zWqZJAAAAAAAAAAAAkgkCAAAAAAAAAAAAPNtGv8ARqcpLfuj5vT+fgBX7X2m4t04O1tJyW+/dXqUgBsAAAAAAAAAVHKDGTwap5ZNZs97W1tlt82VuH2nXnvqPhEmq2mAx0sG9NYv2o9T8V2M01Gqq0VKLumro+bRq4iUU1naaqNNJO6grzfwWp1UNu4qhmjGtJRtn0UNNUuteKJR9RB8qhyuxsKkYurmi31xir6btEcqfLHE1W26043bslGDSXUt1yD6mD5/geUGJrSS55yvpa0b/I9a21iJPSrK3lH0A2oMd9b4j8WXCPodNTbOIX3suEfQDbg+fVNu4pffS4Q9Dplygxf48uEPQsmrJr6OSYfA7er4ha1HmW/SOvjuPV9a1/xJcI+hKmNaAAgAAAAAAAAVHKKpaMI9rb4L+S3M/wAoJ5qkV3Yri2/4LBVgA0AAAAAAAAM/ysV+Y/y/+C+wm06WFoYb7SMrU6cZU4XlONTmZRc0lJZbSlrpG71Te8p+UsM/Nf5LfpOeGnhnGClF2VOmnCFNRqc6nFTm6nvJrnGk9N26xmqsKvKKKa6VaKTxafNpJZatK0ZpZvaUle1+tu9zw4/bkMK8PFtScadHnpUmpqVbnKOrfW+boR+Mn4nqdXAU8/QnJNr245nbJJNJvcrteOm/RFRWq4SnOo5K0ZODjJUlXtBSnmhGNS6UmnTs7e61pe5Bz2btKOJlFTlUlkjTd8zdpxjVjm3p/eQ672XkWcqkaV6kW2rtyh70nanpkUleTcPa136tdVfhaWApwk7VFKUm4LpuOTI8ud3u9ddD1YerhIzlGEa0qcqVNav7SFRTblJPctFFfFgeepiuhKM8/SsorK4OUko9KTzt20irSvu0sThJt6XLTGTwVV3yzvJVLRjHLCPTi0k+rRNXVt501qeHgo8znvmqOWdW6LfRXiwONzpqncefEbrAePPnb/uh1yRE+g7nY9RK3LicHU5qcX42fky7KKKL0Ws2t0AAyAAAAAAAAGY2opVK1R2e9JaPqSRpwJRjubl3ZcGObl3ZcGbG4uXRjubl3ZcGObl3ZcGbG4uNGO5uXdlwY5uXdlwZsbi40Y7m5d2XBjm5d2XBmxuLjRh8VgFisuaEnlva2Zb7X+SOuOyYR9yf6jeXFxqsG9kQfuT/AFHXLYVKW+nPjI+gXFxozmC5LYSrSpt053ypP7Sa1Wh66fJjCUt0Jf7JsuARFVLk7hpW6EtL+/ILk/ho+7L88i1AVW/UWH7svzyOEuT2Gl7kvzyLUAU0uTGEl7kv9kwuTGEWmSX+yZcgCnXJnCr3Jfnkej6kod1/nkWBIEAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJBIEACwACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASQSBmMNhKsL5qdR6xat0tLO61a8D0Og9PsKvu36/O3SL4BWfhQnG32FSVrXfs30d9Lvw/fUn6PNyp5aVSNqlNtu1sqet3d/3eX4AAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEkEgf//Z",
              }}
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
            <Text>Abir Hossain</Text>
            <Text>01700000000</Text>
          </View>
        </View>


        <View style={{paddingHorizontal:30}} className="bg-slate-200 w-4/5 h-40 mt-4 flex  flex-wrap  items-center justify-between gap-x-28 p-6  ">
          <View className='flex flex-col'>
            <Text>500Tk</Text>
            <Text style={{fontSize:10, color:'red'}} >Amount</Text>
            
          </View>
          <View className='flex flex-col'>
          <Text>500Tk</Text>
            <Text style={{fontSize:10, color:'red'}}>Charge</Text>
          </View>


          <View className='flex flex-col'>
          <Text>500Tk</Text>
            <Text style={{fontSize:10, color:'red'}}>Total</Text>
          </View>


          <View className='flex flex-col'>
          <Text>500Tk</Text>
            <Text style={{fontSize:10, color:'red'}}>New Balance</Text>
          </View>
        </View>


        <View className='flex-1 items-center '>







<Pressable onPress={() => navigation.navigate("send_money_5")}
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