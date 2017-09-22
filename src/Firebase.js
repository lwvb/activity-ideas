import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBM0LkXH78Z-fZR4K2KPO_JwLWd3_OXLW8",
    authDomain: "leendertvanbeelen-nl.firebaseapp.com",
    databaseURL: "https://leendertvanbeelen-nl.firebaseio.com",
    projectId: "leendertvanbeelen-nl",
    storageBucket: "leendertvanbeelen-nl.appspot.com",
    messagingSenderId: "891697442445"
};
firebase.initializeApp(config);
export default firebase;