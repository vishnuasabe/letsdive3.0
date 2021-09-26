import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAw6oMYl3SmtVFWaSrfD9upHVuhVqmx4i0",

  authDomain: "letsdive-39026.firebaseapp.com",

  databaseURL: "https://letsdive-39026-default-rtdb.firebaseio.com",

  projectId: "letsdive-39026",

  storageBucket: "letsdive-39026.appspot.com",

  messagingSenderId: "784307863658",

  appId: "1:784307863658:web:9c137c6af38b5baf534a13",

  measurementId: "G-98VKG6RG8E"

};
// initialize the app
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

//connecting our database to the firestore and authentication

const db = app.firestore();
const auth = app.auth();

// get a provider
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
