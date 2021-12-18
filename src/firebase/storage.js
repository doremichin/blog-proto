import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { storage } from './firebase';

export const uploadImage = async (file, metadata) => {
  const now = Math.floor(Date.now() / 1000);
  try {
    const imageRef = ref(storage, `images/${file.name}_${now}`);
    const snapshot = await uploadBytesResumable(imageRef, file, metadata);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  } catch (err) {
    throw new Error(err);
  }
};
