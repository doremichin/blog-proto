import {
  signInWithPopup, GoogleAuthProvider, signOut,
} from 'firebase/auth';

import { auth } from './firebase';

const provider = new GoogleAuthProvider();

export const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const { user } = result;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const { email } = error;
    const credential = GoogleAuthProvider.credentialFromError(error);
  }
};

export const googleLogout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};
