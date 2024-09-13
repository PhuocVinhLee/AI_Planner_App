import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Colors } from "@/constants/Colors";
import moment from "moment";
import { TouchableOpacity } from "react-native";

const UserTripCard = ({ tripDetail }) => {
  console.log("akscnlanclansc", tripDetail);
  const trip = JSON.parse(tripDetail?.tripDate);
  return (
    <View
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignContent: "center",
      }}
    >
      <Image
        source={{
          uri: trip?.locationInfor?.photo,
        }}
        style={{
          width: 100,
          height: 100,
          objectFit: "cover",
          borderRadius: 15,
        }}
      ></Image>

      <View
        style={{
          flexShrink: 1, //
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 18,
          }}
        >
          {tripDetail?.tripPlan?.trip?.destination}
        </Text>

        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            color: Colors.GRAY,
          }}
        >
          {moment(trip?.startDate).format("DD MMM yyyy")}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            color: Colors.GRAY,
          }}
        >
          {trip?.traveler?.title}
        </Text>
      </View>
    </View>
  );
};

export default UserTripCard;
