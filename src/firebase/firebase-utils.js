import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAMhF8G1xIlOLykuDX4lgx_YQgULRLyYr4",
  authDomain: "e-clothing-db-4cb85.firebaseapp.com",
  projectId: "e-clothing-db-4cb85",
  storageBucket: "e-clothing-db-4cb85.appspot.com",
  messagingSenderId: "140103579917",
  appId: "1:140103579917:web:3d424e19395a196f871844",
  measurementId: "G-SGC7DRMQ3F"
}
firebase.initializeApp(config)
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;