import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../configs/firebaseconfig";
import UserTripList from "../../components/MyTrips/UserTripList";
import { useRouter } from "expo-router";


const MyTrip = () => {
  const [usersTrip, setUsersTrip] = useState([]);
  const [loading, setLoading] = useState(false);
  const router= useRouter();

  const user = auth.currentUser;
  const getMyTrip = async () => {
    console.log("user in query", user);

    try {
      setLoading(true);
      const q = query(
        collection(db, "UserTrips"),
        where("userEmail", "==", user?.email)
      );

      const querySnapshot = await getDocs(q);
      const listData = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        listData.push(doc.data());
      });
      setUsersTrip(listData);
      setLoading(false);
    } catch (error) {
      console.error("Error getting documents: ", error);

      setLoading(false);
    }
  };

  useEffect(() => {
    user && getMyTrip();
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 30,
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
        <Ionicons onPress={()=> router.push("/create-trip/search-place")} name="add-circle" size={50} color="black"></Ionicons>
      </View>

      {loading && <ActivityIndicator size={"large"} color={Colors.PRIMARY} />} 
      {usersTrip?.length == 0 ? <StartNewTripCard /> :  <UserTripList userTrips={usersTrip}></UserTripList>}
    </View>
  );
};

export default MyTrip;
