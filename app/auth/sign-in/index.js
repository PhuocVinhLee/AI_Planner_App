import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from "@/constants/Colors"
import { Ionicons } from '@expo/vector-icons'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../configs/firebaseconfig'


const SignIn = () => {
    const navigaiton = useNavigation();
    const router = useRouter()
    useEffect(() => {
        navigaiton.setOptions({
            headerShown: false
        })
    }, [])

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const OnSignInAccount = () => {

        if (!email || !password) {
            ToastAndroid.show("Plase enter all detail", ToastAndroid.BOTTOM)
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
                if (errorCode == "auth/invalid-credential") {
                    ToastAndroid.show("Invalid credentials", ToastAndroid.LONG)
                }
            });
    }
    return (
        <View style={{ padding: 25, paddingTop: 50, backgroundColor: Colors.WHITE, height: "100%" }}>
            <TouchableOpacity onPress={() => router.back()}>


                <Ionicons name='arrow-back' size={24} color="black"></Ionicons>
            </TouchableOpacity>
            <Text style={{ fontFamily: "outfit-bold", fontSize: 30, marginTop: 30 }}>Let's Sign You In</Text>
            <Text style={{ fontFamily: "outfit", fontSize: 30, }}>Wellcom Back</Text>
            <Text style={{ fontFamily: "outfit", fontSize: 20, }}>You are been missed</Text>
            <View style={{
                marginTop: 50
            }}>
                <Text style={{ fontFamily: "outfit" }}>Email</Text>
                <TextInput onChangeText={(value) => setEmail(value)} style={styles.input} placeholder='Enter your Email.'>

                </TextInput>
            </View>

            <View style={{
                marginTop: 20
            }}>
                <Text style={{ fontFamily: "outfit" }}>Password</Text>
                <TextInput onChangeText={(value) => setPassword(value)} secureTextEntry={true} style={styles.input} placeholder='Enter your password.'>

                </TextInput>
            </View>

            <TouchableOpacity onPress={OnSignInAccount} style={{
                padding: 15,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
                marginTop: 50
            }}>
                <Text
                    style={{
                        color: Colors.WHITE,
                        textAlign: "center",
                        fontFamily: "outfit",
                        fontSize: 17,
                    }}
                >
                    Login
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.replace('/auth/sign-up')} style={{
                padding: 15,
                backgroundColor: Colors.WHITE,
                borderRadius: 15,
                marginTop: 10,
                borderWidth: 1
            }}>
                <Text
                    style={{
                        color: Colors.PRIMARY,
                        textAlign: "center",
                        fontFamily: "outfit",
                        fontSize: 17,
                    }}
                >
                    Create account
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        fontFamily: "outfit"
    }

})