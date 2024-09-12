import { View, Text, ToastAndroid } from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";

import { CreateTripContext } from "../../context/CreateTripContext";

import moment from "moment";
const SelectDates = () => {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
const router =useRouter()
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  }, []);
  const onDateChange = (data, type) => {
    // console.log(data + type)
    if (type == "START_DATE") {
      setStartDate(moment(data));
    }
    if (type == "END_DATE") {
      setEndDate(moment(data));
    }
  };
  console.log(startDate + endDate);
  const OnDateSelectedContinue = () => {
    if (!startDate || !endDate) {
      console.log("alskcn");
      ToastAndroid.show("Please select Start and End Date", ToastAndroid.LONG);
      return;
    }
    const totalNoOfDay = endDate.diff(startDate, "day");
    setTripData({
      ...tripData,
      startDate,
      endDate,
      totalNoOfDay: totalNoOfDay+ 1
    });
    router.push("/create-trip/select-budget")

  };
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 20,
        }}
      >
        Travel Dates
      </Text>
      <View
        style={{
          marginTop: 30,
        }}
      >
        <CalendarPicker
          allowRangeSelection={true}
          minDate={new Date()}
          onDateChange={onDateChange}
          maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => OnDateSelectedContinue()}
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

export default SelectDates;
