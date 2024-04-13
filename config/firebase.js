// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {collection, getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD-EHdIomtSw037QrvFvr91F74fpbQ6ImY',
  authDomain: 'expensify-b1b5a.firebaseapp.com',
  projectId: 'expensify-b1b5a',
  storageBucket: 'expensify-b1b5a.appspot.com',
  messagingSenderId: '248428209561',
  appId: '1:248428209561:web:09faa46d264d50f37a9f08',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const tripRef = collection(db, 'trips');

export const expenseRef = collection(db, 'expenses');

export default app;
