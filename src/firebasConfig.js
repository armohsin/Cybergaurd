// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
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
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { firestore, storage, auth };

export default app;
