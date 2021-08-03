// import firebase from "firebase/app";
import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var fbconfig = {
  apiKey: "AIzaSyCafDqivw4iWUbzyltNAmpnW36O2h62KaA",
  authDomain: "javan-a7349.firebaseapp.com",
  projectId: "javan-a7349",
  storageBucket: "javan-a7349.appspot.com",
  messagingSenderId: "942277138455",
  appId: "1:942277138455:web:b0f04636fdf8753c28e452",
  measurementId: "G-F867J7VHZJ",
};
// Initialize Firebase

export default !firebase.apps.length ? firebase.initializeApp(fbconfig) : firebase.app();
