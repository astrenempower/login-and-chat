import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAUdFk8vrETscR5v19mk74I1GRmMuqapdM",
  authDomain: "whatsapp-chat-3625f.firebaseapp.com",
  projectId: "whatsapp-chat-3625f",
  storageBucket: "whatsapp-chat-3625f.appspot.com",
  messagingSenderId: "781971762419",
  appId: "1:781971762419:web:23f81cad3a9f9bdb509b86",
  measurementId: "G-ME7DC1G7SH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// instance of googleauth provider
export const provider = new GoogleAuthProvider();


export {db}
