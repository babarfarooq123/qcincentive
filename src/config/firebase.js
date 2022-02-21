import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfd-BDW4ODiE88fDzEAx4QaRWiEZIPY8E",
  authDomain: "dentrack-46b48.firebaseapp.com",
  databaseURL: "https://dentrack-46b48.firebaseio.com",
  projectId: "dentrack-46b48",
  storageBucket: "dentrack-46b48.appspot.com",
  messagingSenderId: "267503651284",
  appId: "1:267503651284:web:efa39995afaab654e8ee41",
  measurementId: "G-0902LXHQC4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// const ff = {app, auth}

export default auth;
