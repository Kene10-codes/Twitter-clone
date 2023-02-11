// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAVwiYv1cyQXHFg_uPJnRjloMrBT7T85_s',
  authDomain: 'twitter-clone-6f9d7.firebaseapp.com',
  projectId: 'twitter-clone-6f9d7',
  storageBucket: 'twitter-clone-6f9d7.appspot.com',
  messagingSenderId: '22589930833',
  appId: '1:22589930833:web:f0eb66006ed348a88be770',
  measurementId: 'G-RZ7YDEGZFH',
};

// Initialize Firebase
const app = initializeApp (firebaseConfig);
export const db = getFirestore (app);
