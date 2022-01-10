import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, GoogleAuthProvider } from'firebase/auth'
import {firebaseConfig} from "./config";

const Firebase = initializeApp(firebaseConfig);

getDatabase(Firebase);

export const Providers = {
  google: new GoogleAuthProvider()
}

export const auth = getAuth()

export default Firebase

