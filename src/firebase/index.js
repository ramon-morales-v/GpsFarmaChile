import { getAuth } from "firebase/auth";
/* import { GoogleAuthProvider } from "firebase/auth"; */
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { getDatabase, ref, get, child, push, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLbVU6BbijPgN0HQ-mi6oIySK_IFIklbc",
  authDomain: "gpsfarmachile.firebaseapp.com",
  databaseURL: "https://gpsfarmachile-default-rtdb.firebaseio.com",
  projectId: "gpsfarmachile",
  storageBucket: "gpsfarmachile.appspot.com",
  messagingSenderId: "801489449751",
  appId: "1:801489449751:web:2446f9f93623df26517d52",
};

const app = firebase.initializeApp(firebaseConfig);
const db = getDatabase(app);
/* const auth = firebase.auth(); */
const auth = getAuth(app);


/* const provider = new GoogleAuthProvider();*/
const arreglomensajes = [];

export { auth, db, get, child, getDatabase, app, ref, push, set, firebase, arreglomensajes };


