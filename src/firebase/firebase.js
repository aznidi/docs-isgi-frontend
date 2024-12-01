// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDPj1yaT-WxxCU45cp_M3AgChnXbDwnAl4",
  authDomain: "docs-isgi-db.firebaseapp.com",
  projectId: "docs-isgi-db",
  storageBucket: "docs-isgi-db.firebasestorage.app",
  messagingSenderId: "244830582113",
  appId: "1:244830582113:web:82b9438d649b27c3654120",
  measurementId: "G-970G6ER47B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };