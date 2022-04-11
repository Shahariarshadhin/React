// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYmIzzRYlrovy8XpKeuyqDEAaVKmD_TC0",
    authDomain: "ema-john-with-firebase-fbc3b.firebaseapp.com",
    projectId: "ema-john-with-firebase-fbc3b",
    storageBucket: "ema-john-with-firebase-fbc3b.appspot.com",
    messagingSenderId: "484346199830",
    appId: "1:484346199830:web:8dbff9de3dc664e9181a37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;