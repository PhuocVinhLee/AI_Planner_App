import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

import { CreateTripContext } from "../../context/CreateTripContext";
import { useContext } from "react";

const OptionCard = ({ option , selectedTraveler}) => {

  
  return (
    <View style={[{
      padding: 15,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: Colors.LIGHT_GRAY,
      borderRadius: 15
    }, selectedTraveler?.id == option?.id && {borderWidth: 3}]}>
      <View>
        <Text style={{
          fontSize: 20, fontFamily:"outfit-bold"
        }}>
          {option?.title}

        </Text>
        <Text style={{
          fontSize:17, fontFamily:"outfit", color: Colors.GRAY
        }}>
          {option?.desc}

        </Text>
      </View>

      <Text style={{
        fontSize: 40
      }}>
        {option?.icon}
      </Text>
    </View>
  );
};

export default OptionCard;
