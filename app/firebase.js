// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwoBw0gHDwBcYyAZ3z0rRCFGmPe5LtakQ",
  authDomain: "expense-tracker-29fab.firebaseapp.com",
  projectId: "expense-tracker-29fab",
  storageBucket: "expense-tracker-29fab.appspot.com",
  messagingSenderId: "65956194447",
  appId: "1:65956194447:web:feb676b369da1465f768fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
