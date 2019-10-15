import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config={
    apiKey: "AIzaSyA51d1aqTgMCvI8LpQyl4RBGVU1JMweUnA",
    authDomain: "e-commerce-one-e6386.firebaseapp.com",
    databaseURL: "https://e-commerce-one-e6386.firebaseio.com",
    projectId: "e-commerce-one-e6386",
    storageBucket: "e-commerce-one-e6386.appspot.com",
    messagingSenderId: "491546324325",
    appId: "1:491546324325:web:b05399cafcc225a409858c",
    measurementId: "G-Q57NETN25Y"
  };

firebase.initializeApp(config)

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account'
  });
export const signInWithGoogle=()=>auth.signInWithPopup(provider)

export default firebase;