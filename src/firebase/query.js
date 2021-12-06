import {
  collection, getDocs, doc, setDoc, orderBy, query, serverTimestamp,
} from 'firebase/firestore';

import { db } from './firebase';

export const getCollection = async (collectionId) => {
  const q = query(collection(db, collectionId), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  const result = [];

  querySnapshot.forEach((doc) => {
    result.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return result;
};

export const setDocument = async (collectionId, data) => {
  const ref = doc(collection(db, collectionId));
  const result = await setDoc(ref, { ...data, createdAt: serverTimestamp() });
  return result;
};
