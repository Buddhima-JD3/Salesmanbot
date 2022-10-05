import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDxaheONobOJ7Ca_R0uTEsK6LFPPLp__N8",
    authDomain: "salesman-bot-56ef5.firebaseapp.com",
    projectId: "salesman-bot-56ef5",
    storageBucket: "salesman-bot-56ef5.appspot.com",
    messagingSenderId: "351167086438",
    appId: "1:351167086438:web:2b8a859ca1947bbf8452a7",
    measurementId: "G-TMNMHQ1T4L"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }