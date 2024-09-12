// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBRGtv084MngAt7SF5CA_N0SmrGoUMuQ-0",
//     authDomain: "ecommerce--ytb-devknus.firebaseapp.com",
//     projectId: "ecommerce--ytb-devknus",
//     storageBucket: "ecommerce--ytb-devknus.appspot.com",
//     messagingSenderId: "787121249232",
//     appId: "1:787121249232:web:708182a94d78cc45c1f7d5",
//     measurementId: "G-VMP7N4J5GK"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBoYLVz4A0VcUn_NNw8vkW0wV8vumdEoTU",
  authDomain: "travel-planned-ai-app.firebaseapp.com",
  projectId: "travel-planned-ai-app",
  storageBucket: "travel-planned-ai-app.appspot.com",
  messagingSenderId: "692259804396",
  appId: "1:692259804396:web:d6a06cd2746a4e91a441c9",
  measurementId: "G-1PN3GL8B3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);