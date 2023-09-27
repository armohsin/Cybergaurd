// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAK-Kce2FTntmsrZ6YjPupZ7kvMbdteo0",
  authDomain: "cybergaurd-a46c8.firebaseapp.com",
  projectId: "cybergaurd-a46c8",
  storageBucket: "cybergaurd-a46c8.appspot.com",
  messagingSenderId: "155576252432",
  appId: "1:155576252432:web:3013a5e3d67107c6c6b295",
  measurementId: "G-CVYHN6KDME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth  = getAuth(app);
export default app;