import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcRBEUCy2hh4IkGeqZ1wjWx93H9u0yx_k",
  authDomain: "motosports-nitrr.firebaseapp.com",
  projectId: "motosports-nitrr",
  storageBucket: "motosports-nitrr.appspot.com",
  messagingSenderId: "938656425312",
  appId: "1:938656425312:web:758c5262c34b942ae7aa05",
  measurementId: "G-XVCNSR9HQD"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
console.log("Firebase Analytics Initialized!");

export const db = getFirestore(app);
console.log("Firebase Firestore Initialized!");

console.log("Firebase Connected!");
