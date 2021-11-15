import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBxyl8Fdqbetg5CK2f6iuc8SrQ9yyVZBrs",
    authDomain: "journal-reactjs-30b9a.firebaseapp.com",
    projectId: "journal-reactjs-30b9a",
    storageBucket: "journal-reactjs-30b9a.appspot.com",
    messagingSenderId: "13513649642",
    appId: "1:13513649642:web:30d32ac75c4acbdccb1693",
    measurementId: "G-62ZCMJJS1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { db, provider, app, getAuth, signInWithPopup };