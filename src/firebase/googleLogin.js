import {
  signInWithPopup, GoogleAuthProvider, signOut,
} from 'firebase/auth';

import { auth } from './firebase';

const provider = new GoogleAuthProvider();

export const googleLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const { user } = result;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const { email } = error;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const googleLogout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};