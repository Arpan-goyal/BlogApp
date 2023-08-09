import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCbduu87ETASzxdLvFNAnITg9xmOmt09A",
  authDomain: "blogproject-95980.firebaseapp.com",
  projectId: "blogproject-95980",
  storageBucket: "blogproject-95980.appspot.com",
  messagingSenderId: "618015347568",
  appId: "1:618015347568:web:10e212c1fb2b11ee1eb5b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
