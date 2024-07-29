import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6p4vw32QPpdpmKl4_nL3bRYPe6DIzOPE",
  authDomain: "motorsports-nitrr.firebaseapp.com",
  projectId: "motorsports-nitrr",
  storageBucket: "motorsports-nitrr.appspot.com",
  messagingSenderId: "68660549534",
  appId: "1:68660549534:web:4bad6e33077134f33e288f",
  measurementId: "G-FYJSV5MT71"
};

const app = initializeApp(firebaseConfig);

console.log("firebase connected");

export const db = getFirestore(app);