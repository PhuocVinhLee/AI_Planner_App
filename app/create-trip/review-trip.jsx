import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { StyleSheet, ToastAndroid } from "react-native";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { CreateTripContext } from "../../context/CreateTripContext";
import { useContext } from "react";
import moment from "moment";

const ReviewTrip = () => {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Your trip",
    });
    console.log(tripData)
  }, []);

  const onClickContinue = () => { 
    router.push("/create-trip/generate-trip")

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
        Review Your Trip
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
          Before generating your trip, please review your selection
        </Text>

       <View style={{
            display: "flex",
            flexDirection: "column",
            gap: 20, marginTop: 20
          }}>
       <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Ionicons name="location-sharp" size={24} color="black"></Ionicons>

          <View >
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
             
              }}
            >
              {tripData?.locationInfor?.name}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Ionicons name="location-sharp" size={24} color="black"></Ionicons>

          <View  >
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Travel Date
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
                
              }}
            >
              {moment(tripData?.startDate).format("DD MMM") +
                " To " +
                moment(tripData?.endDate).format("DD MMM")}{" "}
              ({tripData?.totalNoOfDate} days)
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Ionicons name="location-sharp" size={24} color="black"></Ionicons>

          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Who's is traveling
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
               
              }}
            >
              {tripData?.traveler?.title}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Ionicons name="location-sharp" size={24} color="black"></Ionicons>

          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
                
              }}
            >
              {tripData?.budget}
            </Text>
          </View>
        </View>
       </View>
      </View>

      <TouchableOpacity
        onPress={() => onClickContinue()}
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
          Build My Trip.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewTrip;
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
