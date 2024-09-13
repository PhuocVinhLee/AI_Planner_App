import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";

import { CreateTripContext } from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../../configs/AIModel";
import { useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../configs/firebaseconfig";

const GenerateTrip = () => {
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const generateAiTrip = async () => {
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      tripData?.locationInfor?.name
    )
      .replace("{totalDay}", tripData?.totalNoOfDay)
      .replace("{totalNight}", tripData?.totalNoOfDay - 1)
      .replace("{traveler}", tripData?.traveler?.title)
      .replace("{budget}", tripData?.budget)
      .replace("{totalDay}", tripData?.totalNoOfDay)
      .replace("{totalNight}", tripData?.totalNoOfDay - 1);
    console.log("sclaks", FINAL_PROMPT);
    setLoading(true);
     const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log("ascnl",(tripData));
    setLoading(false);
    // router.push("(tabs)/mytrip")
    
    const user = auth.currentUser;
    const docId = Date.now().toString();
   const  result_ =  await setDoc(doc(db, "UserTrips", docId), {
      userEmail: user.email,
      tripPlan: JSON.parse(result?.response?.text()),
      tripDate: JSON.stringify(tripData)
    });

    if(result_){

    }
  };

  useEffect(() => {
    tripData && generateAiTrip();
  }, []);
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
          textAlign: "center",
        }}
      >
        Please Wait...
      </Text>

      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
          textAlign: "center",
          marginTop: 40,
        }}
      >
        We are wokingto generate your dream trip
      </Text>

      <Image
        source={require("./../../assets/images/AI_Travel_Planner_App_Introduction_Screen.png")}
        style={{
          width: "100%",
          height: 300,
          objectFit: "contain",
        }}
      ></Image>

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 20,
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        Don't go back
      </Text>
    </View>
  );
};

export default GenerateTrip;
