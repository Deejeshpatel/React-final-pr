// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9qML6MNbKGetQqVHj-5KJSzcyr_CtYT4",
  authDomain: "fin-project-300b8.firebaseapp.com",
  projectId: "fin-project-300b8",
  storageBucket: "fin-project-300b8.appspot.com",
  messagingSenderId: "1077634285464",
  appId: "1:1077634285464:web:1cfe3a06c6b4abcffc35ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
