import { firebaseApp, fireStore, firebaseAuth } from '../firebase/firebase.js'
import { query, doc, collection, getDoc, getDocs, setDoc, orderBy, where, limit } from 'firebase/firestore';

export const getSupport = async () => {
    const docRef = await doc(fireStore, "support", "application");
    const docSnap = await getDoc(docRef);
    return docSnap.data()
}