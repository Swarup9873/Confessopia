import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDoKTy3wekcP4Rw7IunVXXLTqWyOBNl9ro",
    authDomain: "confessopia.firebaseapp.com",
    projectId: "confessopia",
    storageBucket: "confessopia.appspot.com",
    messagingSenderId: "53729764224",
    appId: "1:53729764224:web:32cba6da1352c0a3f89765",
    measurementId: "G-XSHEP40Z1H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
  


export {auth};
export default db;