import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { StyleSheet, ToastAndroid } from "react-native";
import { Colors } from "@/constants/Colors";
import { SelectBudgetOptions } from "@/constants/Options";
import OptionCard from "../../components/CreateTrip/OptionsCard";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { CreateTripContext } from "../../context/CreateTripContext";
import { useContext } from "react";

const SelectBudget = () => {
  const { tripData, setTripData } = useContext(CreateTripContext);
const router = useRouter()
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  }, []);

  const [selectBudget, setSelectBudget] = useState();

  useEffect(() => {
    setTripData({ ...tripData, budget: selectBudget?.title });
  }, [selectBudget]);


  const onClickContinue = ()=>{
    
    if(!selectBudget){
      ToastAndroid.show("Select Your Budget", ToastAndroid.LONG)
      return;
    }
    router.push("/create-trip/review-trip");
   

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
        Bugget
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
          Chooses sepending habit for your trip
        </Text>

        <FlatList
          data={SelectBudgetOptions}
          renderItem={({ item }, index) => (
            <TouchableOpacity
              onPress={() => setSelectBudget(item)}
              style={{
                marginVertical: 10,
              }}
              key={index}
            >
              <OptionCard
                option={item}
                selectedTraveler={selectBudget}
              ></OptionCard>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>

      <TouchableOpacity onPress={()=> onClickContinue()}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: Colors.WHITE,
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          Countinue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectBudget;
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
