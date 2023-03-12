import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAnO_7dSbps8cm3e1EwuXcbhjs8OrMU4tI",
  authDomain: "discord-clone-3077f.firebaseapp.com",
  projectId: "discord-clone-3077f",
  storageBucket: "discord-clone-3077f.appspot.com",
  messagingSenderId: "110139983035",
  appId: "1:110139983035:web:04b2d6e5d9504338c0159e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };