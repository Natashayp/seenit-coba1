import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0BWzshCcFe_tzfbXbp-8yNyHmdOZG9iY",
  authDomain: "fb-seenit-coba1.firebaseapp.com",
  projectId: "fb-seenit-coba1",
  storageBucket: "fb-seenit-coba1.firebasestorage.app",
  messagingSenderId: "940056411098",
  appId: "1:940056411098:web:246f4e8c0c815a34f19ee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
