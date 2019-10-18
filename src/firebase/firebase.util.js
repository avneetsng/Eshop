import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// import { async } from 'q';

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

//creating createUserProfileDocument function that adds the data in firebase's database

export const createUserProfileDocument= async (userAuth,additionalData)=>{
  if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get();
    console.log(snapShot);

    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();

      try{
        await userRef.set({
          displayName,email,createdAt,...additionalData
        })
        }
      catch(error){
        console.log('Error :'+ error.message)
      }
    
    }
return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account'
  });
export const signInWithGoogle=()=>auth.signInWithPopup(provider)

export default firebase;