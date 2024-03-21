import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const auth = getAuth();

export {
    app, auth
}