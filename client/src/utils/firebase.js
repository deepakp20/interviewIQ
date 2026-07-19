
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-e3058.firebaseapp.com",
  projectId: "interviewiq-e3058",
  storageBucket: "interviewiq-e3058.firebasestorage.app",
  messagingSenderId: "8496517548",
  appId: "1:8496517548:web:e36eaa791a8f843023ea09"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export{auth, provider}