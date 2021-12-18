import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

import { auth } from './firebase';
import { history } from '../lib/history';

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      toast.success('회원가입에 성공 하였습니다.', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push('/');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast(`회원가입에 실패 하였습니다. 다시 시도해 주세요. \n ${errorMessage}`);
    });
};

export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      // toast.success('회원가입에 성공 하였습니다.', {
      //   position: 'top-right',
      //   autoClose: 2000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      history.push('/');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
