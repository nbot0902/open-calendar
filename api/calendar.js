import { firebaseApp, fireStore, firebaseAuth } from '../firebase/firebase.js'
import { query, doc, collection, getDoc, getDocs, setDoc, orderBy, where, limit } from 'firebase/firestore';
import { getUserId } from "../utile/firebase";
import U from '../utile';
import C from '../constants';

export const getCurrentMonthsEvents = async ({ userId = "" }) => {
    const docRef = await doc(fireStore, "users", userId);
    const docSnap = await getDoc(docRef);
    const result = docSnap.data();
    const createdAt = result.createdAt ? String(result.createdAt.toDate()) : null;

    return {
        ...result,
        createdAt: createdAt
    }
}
