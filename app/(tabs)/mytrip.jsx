import { View, Text } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";


const MyTrip = () => {
  const [usersTrip, setusersTrip] = useState([]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 35,
          }}
        >
          My Trip
        </Text>
        <Ionicons name="add-circle" size={50} color="black"></Ionicons>
      </View>

      {usersTrip?.length == 0 ? <StartNewTripCard /> : ""}
    </View>
  );
};

export default MyTrip;
