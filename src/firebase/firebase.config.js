// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFVToTe6yrMMb6g5HajSNAnYnTWoSAf9M",
  authDomain: "email-password-signup-3e4a1.firebaseapp.com",
  projectId: "email-password-signup-3e4a1",
  storageBucket: "email-password-signup-3e4a1.appspot.com",
  messagingSenderId: "931507960524",
  appId: "1:931507960524:web:8f5b00eb43a4d5667c6069"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
