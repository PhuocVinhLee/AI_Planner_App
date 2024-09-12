import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { SelectTravelsList } from "@/constants/Options";
import OptionCard from "../../components/CreateTrip/OptionsCard";
import { CreateTripContext } from "../../context/CreateTripContext";
import { useContext } from "react";
import { ToastAndroid } from "react-native";

const SelectTraveler = () => {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter()
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Select traveler",
    });
  }, []);

  useEffect(() => {
    setTripData({ ...tripData, traveler: selectedTraveler});
  }, [selectedTraveler]);

  const [selectedTraveler, setSelectedTraveler] = useState();

  const onClickContinue = ()=>{
    
    if(!selectedTraveler){
      ToastAndroid.show("Select number traveler", ToastAndroid.LONG)
      return;
    }
    router.push("/create-trip/select-budget");
   

  }
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 35,
          fontFamily: "outfit-bold",
          marginTop: 20,
        }}
      >
        Who's Traveling
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 23,
            fontFamily: "outfit-bold",
          }}
        >
          Chooses your traveles
        </Text>

        <FlatList
          data={SelectTravelsList}
          renderItem={({ item }, index) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveler(item)}
              style={{
                marginVertical: 10,
              }}
              key={index}
            >
              <OptionCard
                option={item}
                selectedTraveler={selectedTraveler}
              ></OptionCard>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>

      <TouchableOpacity  onPress={()=> onClickContinue()} style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop: 20
      }}>

        <Text style={{
          textAlign: "center",
          color: Colors.WHITE,
          fontFamily:"outfit-medium",
          fontSize: 20
        }}>
          Countinue
        </Text>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 75,
    backgroundColor: Colors.WHITE,
    fontFamily: "outfit",
    height: "100%",
    flex: 1,
  },
});

export default SelectTraveler;
