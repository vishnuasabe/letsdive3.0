import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDAkl1JRTncxL7p1UEo9T4hbP1pDhwJaMU",
  authDomain: "whatsapp-20948.firebaseapp.com",
  projectId: "whatsapp-20948",
  storageBucket: "whatsapp-20948.appspot.com",
  messagingSenderId: "736479526721",
  appId: "1:736479526721:web:b04f2270e7e5ad2d79ebc0",
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
