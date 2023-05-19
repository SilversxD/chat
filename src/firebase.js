import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGlE3uV3iUjvTQ3Gta7QpH1HLRFm8yEGQ",
  authDomain: "chat-c14f4.firebaseapp.com",
  projectId: "chat-c14f4",
  storageBucket: "chat-c14f4.appspot.com",
  messagingSenderId: "285246500737",
  appId: "1:285246500737:web:7627536dc1c5d9626d8280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
