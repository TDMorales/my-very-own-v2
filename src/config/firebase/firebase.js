import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getStorage,
  listAll,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";

// Your web app's Firebase configuration
let app;

const firebaseConfig = {
  apiKey: "AIzaSyATn0wdVIhcQX3ao28UFx33Czg2L11o2X4",
  authDomain: "mvo-db-48e9d.firebaseapp.com",
  projectId: "mvo-db-48e9d",
  storageBucket: "mvo-db-48e9d.appspot.com",
  messagingSenderId: "955443504578",
  appId: "1:955443504578:web:c1e019146ad14e883f225b",
};

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
}
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {
  db,
  auth,
  storage,
  doc,
  setDoc,
  getDoc,
  collection,
  listAll,
  onSnapshot,
  uploadBytes,
  getFirestore,
  getDownloadURL,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
};
