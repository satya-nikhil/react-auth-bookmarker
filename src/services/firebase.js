// src/services/firebase.js or src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXMvWpWHkz6e82SCyKZpEXYHODnEFHHGk",
  authDomain: "firekeep-53ec2.firebaseapp.com",
  projectId: "firekeep-53ec2",
  storageBucket: "firekeep-53ec2.appspot.com",
  messagingSenderId: "530184314419",
  appId: "1:530184314419:web:3a256a3e94e7064d414d46"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
