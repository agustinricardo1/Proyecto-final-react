import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAhpIREQZ3UEam6RVYtueYj_GRtYknko3c",
    authDomain: "tp-final-react.firebaseapp.com",
    projectId: "tp-final-react",
    storageBucket: "tp-final-react.appspot.com",
    messagingSenderId: "850332928908",
    appId: "1:850332928908:web:1eae0b1ec483ed679f24a9"
    });
    
    export const getFirebase = () => app;
    export const getFirestore = () => firebase.firestore(app);