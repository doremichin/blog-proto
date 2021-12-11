import {
  collection, getDocs, doc, setDoc, orderBy, query, serverTimestamp, getDoc, deleteDoc, updateDoc,
} from 'firebase/firestore';

import { auth, db } from './firebase';

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
export const getDocument = async (collectionId, documentId) => {
  const ref = doc(db, collectionId, documentId);
  const docSnap = await getDoc(ref);

  if (!docSnap.exists()) return null;

  return {
    id: documentId,
    ...docSnap.data(),
  };
};

export const setDocument = async (collectionId, data) => {
  const ref = doc(collection(db, collectionId));
  const result = await setDoc(ref, {
    ...data,
    uid: auth.currentUser.uid,
    displayName: auth.currentUser.displayName,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return result;
};

export const deleteDocument = async (collectionId, documentId) => {
  await deleteDoc(doc(db, collectionId, documentId));
};

export const editDocument = async (collectionId, documentId, data) => {
  const ref = doc(db, collectionId, documentId);

  await updateDoc(ref, {
    ...data,
    updatedAt: serverTimestamp(),
  });
};
