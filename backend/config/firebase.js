import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration - uses environment variables in production
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBpFTu1LYEHRZxs0ZTF5UXqwrvHlSTEYn0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "jpmortgagesolutions.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "jpmortgagesolutions",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "jpmortgagesolutions.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "810464842534",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:810464842534:web:34f09c0c3fce79af7327e7",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-5QZ3RJD93X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
