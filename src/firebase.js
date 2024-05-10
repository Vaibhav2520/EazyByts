import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAEGoMfdXgTeE4ztyg0UmOhCl7QuPh9ZkA",
  authDomain: "thence-assignment-6e9ca.firebaseapp.com",
  projectId: "thence-assignment-6e9ca",
  storageBucket: "thence-assignment-6e9ca.appspot.com",
  messagingSenderId: "766676379498",
  appId: "1:766676379498:web:acf344e17d98b4df38a713",
  measurementId: "G-3TLKXNJFPB"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
