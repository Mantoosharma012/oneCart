import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "onecart-24d03.firebaseapp.com",
  projectId: "onecart-24d03",
  storageBucket: "onecart-24d03.firebasestorage.app",
  messagingSenderId: "1013589182158",
  appId: "1:1013589182158:web:8fc742d97b6f046aeef29f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

