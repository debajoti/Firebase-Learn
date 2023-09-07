import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDBI6rcdKwlPI1gRmEye3zV8mmASbB0TtE",
  authDomain: "fir-course-876e3.firebaseapp.com",
  projectId: "fir-course-876e3",
  storageBucket: "fir-course-876e3.appspot.com",
  messagingSenderId: "202637861458",
  appId: "1:202637861458:web:115e19c660c6175e81358b",
  measurementId: "G-1V2K0D98RR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvier = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);