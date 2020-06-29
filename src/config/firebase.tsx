import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

// web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUiZsdie4FusUincKp6qDOsf-mhwZoDzg",
    authDomain: "visahack-2bbd9.firebaseapp.com",
    databaseURL: "https://visahack-2bbd9.firebaseio.com",
    projectId: "visahack-2bbd9",
    storageBucket: "visahack-2bbd9.appspot.com",
    messagingSenderId: "384207495883",
    appId: "1:384207495883:web:663045997d632381ac714e",
    measurementId: "G-0W3W35RZY6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const db = firebase.firestore();

export default firebaseApp;