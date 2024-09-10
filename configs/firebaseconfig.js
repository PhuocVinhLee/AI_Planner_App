// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRGtv084MngAt7SF5CA_N0SmrGoUMuQ-0",
    authDomain: "ecommerce--ytb-devknus.firebaseapp.com",
    projectId: "ecommerce--ytb-devknus",
    storageBucket: "ecommerce--ytb-devknus.appspot.com",
    messagingSenderId: "787121249232",
    appId: "1:787121249232:web:708182a94d78cc45c1f7d5",
    measurementId: "G-VMP7N4J5GK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);