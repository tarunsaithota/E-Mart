import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Import auth module
import 'firebase/compat/firestore'; // Import firestore module

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-M63fVk42XZuCXTDPCJXNKzNEfxwBsAE",
  authDomain: "auth-60205.firebaseapp.com",
  databaseURL: "https://auth-60205-default-rtdb.firebaseio.com",
  projectId: "auth-60205",
  storageBucket: "auth-60205.appspot.com",
  messagingSenderId: "715236792669",
  appId: "1:715236792669:web:df3ed5cb750f5f3e1970b4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = firebase.firestore();
const auth = firebase.auth();

// Export Auth and Firestore
export { auth };
export default db;
