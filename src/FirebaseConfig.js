// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDteNZ1saiUav0muG_IRhaYT-Dp8fMaSzY",
  authDomain: "internetshop-57ccf.firebaseapp.com",
  projectId: "internetshop-57ccf",
  storageBucket: "internetshop-57ccf.firebasestorage.app",
  messagingSenderId: "944932117583",
  appId: "1:944932117583:web:1b943db55f03c0c8031e3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
