import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { IFirebase, IUser } from "./interfases";

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
const db = getFirestore(app);

export const addCollection = async (user: IUser) => {
  try {
    const userCollection = collection(db, "users");
    const docRef = await addDoc(userCollection, user);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
export const getUserCollection = async () => {
  const users = await getDocs(collection(db, "users"));
  console.log(users.docs);
};
getUserCollection();
