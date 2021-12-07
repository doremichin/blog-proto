import {
  collection, getDocs, doc, setDoc, orderBy, query, serverTimestamp, deleteDoc, updateDoc,
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

export const deleteDocument = async (documentId) => {
  const result = await deleteDoc(doc(db, 'blog', documentId));
  return result;
};

export const updateDocument = async (documentId, data) => {
  const washingtonRef = doc(db, 'blog', documentId);
  console.log('data', data);
  console.log('washing', washingtonRef);
  const result = await updateDoc(washingtonRef, {
    title: data.title,
    story: data.story,
  });
  return result;
};
