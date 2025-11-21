// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQjLDY5fkJbWXslkJwjDsXqS-w2kAf-Fk",
  authDomain: "zap-shift-resources.firebaseapp.com",
  projectId: "zap-shift-resources",
  storageBucket: "zap-shift-resources.firebasestorage.app",
  messagingSenderId: "39224778688",
  appId: "1:39224778688:web:eb42603f3ad1b5c9c87225"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

