// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env,
  NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-422904.firebaseapp.com",
  projectId: "x-next-422904",
  storageBucket: "x-next-422904.appspot.com",
  messagingSenderId: "988788320393",
  appId: "1:988788320393:web:84a4c07a7a5e759d3bbe58",
  measurementId: "G-BVBSPQQRTW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);