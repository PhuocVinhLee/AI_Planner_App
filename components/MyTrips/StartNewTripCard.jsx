import { View, Text, TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { Colors } from "@/constants/Colors"
import { useRouter } from 'expo-router'

const StartNewTripCard = () => {
    const router = useRouter()
  return (
    <View style={{
        padding: 20
        , marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25
    }}>
      <Ionicons name="location-sharp" size={30} color="black" />

      <Text style={{
        fontSize: 25,
        fontFamily: "outfit-medium", 
      }}>
        No trips planned yet

      </Text>

      <Text style={{
        fontSize: 25,
        fontFamily: "outfit", marginTop: 10
        , alignItems: "center",
        color: Colors.GRAY
      }}>
        Look like its time to plan a new travel expenrinece!. Get Started below

      </Text>

       <TouchableOpacity  onPress={()=> router.push("/create-trip/search-place")} style={{
        padding: 15, backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        paddingHorizontal: 30
       }}>
        <Text style={{
            color: Colors.WHITE,
             fontFamily: "outfit-medium",
             fontSize: 27
        }}>
            Start a new trip

        </Text>
       </TouchableOpacity>
    </View>
  )
}

export default StartNewTripCard