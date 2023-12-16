import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7AhUQit7pDmBuddGkZBLKgPo3ygLbFxc",
  authDomain: "chat-b52df.firebaseapp.com",
  projectId: "chat-b52df",
  storageBucket: "chat-b52df.appspot.com",
  messagingSenderId: "524910397604",
  appId: "1:524910397604:web:d6985801e40a467cda3e31",
  measurementId: "G-6SPVMVEFY8"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();