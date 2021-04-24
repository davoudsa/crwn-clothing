import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCW1ZRxowpE6zpju2kBdu_I44EdheGRlSA",
    authDomain: "crwn-db-3b575.firebaseapp.com",
    projectId: "crwn-db-3b575",
    storageBucket: "crwn-db-3b575.appspot.com",
    messagingSenderId: "928582498844",
    appId: "1:928582498844:web:dec1282c5abc85b8447dd9"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
