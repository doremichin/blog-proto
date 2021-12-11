import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../../firebase/firebase';

export const useSignIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
