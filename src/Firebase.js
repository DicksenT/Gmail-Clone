import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4KY829_Xk3O9yS-LmTlR26PIrrlhO4to",
    authDomain: "clone-78a79.firebaseapp.com",
    projectId: "clone-78a79",
    storageBucket: "clone-78a79.appspot.com",
    messagingSenderId: "718979281325",
    appId: "1:718979281325:web:5962956a8e5f34a4577124"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider}