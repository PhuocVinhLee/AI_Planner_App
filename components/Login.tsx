import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const Login = () => {
    const router = useRouter()
  return (
    <View>
      <Image
        source={require("./../assets/images/AI_Travel_Planner_App_Introduction_Screen.png")}
        style={{ width: "100%", height: 450 }}
      ></Image>
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            textAlign: "center",
            color: Colors.GRAY,
          }}
        >
          {" "}
          Discover your next adventer effortlessly.Discover your next adventer
          effortlessly. Discover your next adventer effortlessly. Per{" "}
        </Text>

        <TouchableOpacity style={styles.button}  onPress={()=> router.push('/auth/sign-in')}>
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 17,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "10%"
  },
});
