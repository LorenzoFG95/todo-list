// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_API_KEY ||
    "AIzaSyD_9YFxButRFTGh1jbwBNY_XMpMfnAtoIY",
  authDomain:
    process.env.NEXT_PUBLIC_AUTH_DOMAIN || "todo-list-8dc4f.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "todo-list-8dc4f",
  storageBucket:
    process.env.NEXT_PUBLIC_STORAGE_BUCKET || "todo-list-8dc4f.appspot.com",
  messagingSenderId:
    process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID || "124063078832",
  appId:
    process.env.NEXT_PUBLIC_APP_ID ||
    "1:124063078832:web:56c7117a6a54a383c29e75",
};

export const googleAuth = async () => {
  const connection = await signInWithPopup(auth, provider);

  return connection;
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
