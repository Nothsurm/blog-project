// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "blog-project-384d9.firebaseapp.com",
  projectId: "blog-project-384d9",
  storageBucket: "blog-project-384d9.appspot.com",
  messagingSenderId: "26517876472",
  appId: "1:26517876472:web:edde88dc1e9625774b950d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);