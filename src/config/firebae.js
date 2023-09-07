import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  // apiKey: "AIzalwlPI1gRmEye3zV8mmASfdlweembB0TtE",
  // authDomain: "fir-wcourse-876e3.firebaseapp.com",
  // projectId: "fir-cosurse-876e3",
  // storageBucket: "fisr-course-876e3.appspot.com",
  // messagingSenderId: "2054451008",
  // appId: "1:861456418:web:115154660c6175e81358b",
  // measurementId: "G-1V95488RR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvier = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);