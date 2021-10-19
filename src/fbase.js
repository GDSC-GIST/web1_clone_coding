import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import fbase from "firebase/app";
import "firebase/storage";


const firebaseConfig = {

    apiKey: "AIzaSyCrqEwNsQGJrbXAdeH9F7_iHwkUY36TbeU",
  
    authDomain: "nwitter-5be11.firebaseapp.com",
  
    projectId: "nwitter-5be11",
  
    storageBucket: "nwitter-5be11.appspot.com",
  
    messagingSenderId: "912009383102",
  
    appId: "1:912009383102:web:474a11dfe2f0b668dae2ef"
  
  };
  

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = fbase.auth();
export const dbService = fbase.firestore();
export const storageService = fbase.storage();