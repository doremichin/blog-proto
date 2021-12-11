import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../../firebase/firebase';

export const useSignUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
