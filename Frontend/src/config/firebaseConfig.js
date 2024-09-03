// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkFo6ggxpgvHWpekV9som6JLxmCS4II7k",
  authDomain: "xenonstack-6c853.firebaseapp.com",
  projectId: "xenonstack-6c853",
  storageBucket: "xenonstack-6c853.appspot.com",
  messagingSenderId: "637953138924",
  appId: "1:637953138924:web:b26df5d454515b685f85c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;
    