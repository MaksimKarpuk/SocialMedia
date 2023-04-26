
import { initializeApp } from "firebase/app";
import { IFirebase } from "./interfases";

const firebaseConfig: IFirebase = {
  apiKey: "AIzaSyBb5AcEP0WYa-NUDQ_rMBCVg9jTdhZUPng",
  authDomain: "socialmedia-c899e.firebaseapp.com",
  databaseURL:
    "https://socialmedia-c899e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "socialmedia-c899e",
  storageBucket: "socialmedia-c899e.appspot.com",
  messagingSenderId: 1095758870270,
  appId: "1:1095758870270:web:dd530952816da3b22297af",
};

const app = initializeApp(firebaseConfig);
