// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8ONqK-6UrXlQvNIO1fy9llHi_MCgD0Co",
  authDomain: "ktmbees-website.firebaseapp.com",
  databaseURL:
    "https://ktmbees-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ktmbees-website",
  storageBucket: "ktmbees-website.appspot.com",
  messagingSenderId: "81137195519",
  appId: "1:81137195519:web:2491f737d6f20c34232fca",
  measurementId: "G-YKPXB0V1QM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
