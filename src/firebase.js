//For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDEAWSCE9KW6MnE2-EbejILG6EiSYyYTc4",
    authDomain: "react-firebase-todo-b6bc5.firebaseapp.com",
    databaseURL: "https://react-firebase-todo-b6bc5.firebaseio.com",
    projectId: "react-firebase-todo-b6bc5",
    storageBucket: "react-firebase-todo-b6bc5.appspot.com",
    messagingSenderId: "1077824734248",
    appId: "1:1077824734248:web:83b55dce563134a134a11d",
    measurementId: "G-VJX1JCQ8SH"
});

const db=firebaseApp.firestore();

export default db;