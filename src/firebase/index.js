import { initializeApp } from "firebase/app"
import { getAuth, /* signInWithRedirect */ } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {

  apiKey: "AIzaSyDLbVU6BbijPgN0HQ-mi6oIySK_IFIklbc",
  authDomain: "gpsfarmachile.firebaseapp.com",
  projectId: "gpsfarmachile",
  storageBucket: "gpsfarmachile.appspot.com",
  messagingSenderId: "801489449751",
  appId: "1:801489449751:web:2446f9f93623df26517d52"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app);
/* signInWithRedirect(auth, provider); */

const provider = new GoogleAuthProvider();



export { auth, provider }


