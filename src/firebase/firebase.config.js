// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa-s6NbX_ExCNwZrUxRnBhpysxFrHsQiY",
  authDomain: "drawing-painting-c778f.firebaseapp.com",
  projectId: "drawing-painting-c778f",
  storageBucket: "drawing-painting-c778f.appspot.com",
  messagingSenderId: "351211856685",
  appId: "1:351211856685:web:781873a42f97509eebe9a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;