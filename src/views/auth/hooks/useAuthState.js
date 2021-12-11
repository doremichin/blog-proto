import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import { auth } from '../../../firebase/firebase';
import { setUser, updateState } from '../redux/slice';

export const useAuthState = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {
          uid, displayName, email, emailVerified, photoURL,
        } = user;
        dispatch(setUser({
          displayName,
          email,
          emailVerified,
          photoURL,
          uid,
        }));
      } else {
        dispatch(setUser(null));
      }
      dispatch(updateState({
        authInitialized: true,
      }));
    });
  }, []);
};
