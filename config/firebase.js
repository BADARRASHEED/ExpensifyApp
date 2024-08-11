// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {collection, getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBbMhe812iUZGF91thV_wtbhFnjHPFmF48',
  authDomain: 'miracle-8e7c3.firebaseapp.com',
  projectId: 'miracle-8e7c3',
  storageBucket: 'miracle-8e7c3.appspot.com',
  messagingSenderId: '144084628094',
  appId: '1:144084628094:web:6a76237ecd7ba237291e2f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const tripRef = collection(db, 'trips');

export const expenseRef = collection(db, 'expenses');

export default app;
