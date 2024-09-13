import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native";
import UserTripCard from "./UserTripCard";
import { ScrollView } from "react-native";

const UserTripList = ({ userTrips }) => {
  const LastTrip = JSON.parse(userTrips[0]?.tripDate);
  return (
    <ScrollView>
      <View
        style={{
          marginTop: 5,
        }}
      >
        <Image
          source={{
            uri: LastTrip?.locationInfor?.photo,
          }}
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            borderRadius: 15,
          }}
        ></Image>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
            }}
          >
            {userTrips[0]?.tripPlan?.trip?.destination}
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 17,
                color: Colors.GRAY,
              }}
            >
              {moment(LastTrip?.startDate).format("DD MMM yyyy")}
            </Text>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 17,
                color: Colors.GRAY,
              }}
            >
              {LastTrip?.traveler?.title}
            </Text>
          </View>

          <TouchableOpacity
            // onPress={() => onClickContinue()}
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
                fontSize: 15,
              }}
            >
              See your plane
            </Text>
          </TouchableOpacity>

          <View>
            {userTrips?.map((item) => (
              <UserTripCard tripDetail={item}></UserTripCard>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserTripList;
