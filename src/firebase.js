import { initializeApp } from "firebase/app";
import { getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import
{
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  onSnapshot,
  orderBy,
  

} from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBij1-NoYvkP4Ee_hByt99i9sB6632ZqNc",
    authDomain: "attendance-app-c1b0a.firebaseapp.com",
    projectId: "attendance-app-c1b0a",
    storageBucket: "attendance-app-c1b0a.appspot.com",
    messagingSenderId: "912680436446",
    appId: "1:912680436446:web:fcffcc0910ee2b395b384f",
    databaseURL: "https://attendance-app-c1b0a-default-rtdb.firebaseio.com"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db=getFirestore();
const auth = getAuth();


export {
    
signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    getAuth,
    getFirestore,
    collection,
    getDocs,
    addDoc,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    onSnapshot,
    storage,
    auth,
    db,


}