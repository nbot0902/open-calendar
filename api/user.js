import { firebaseApp, fireStore, firebaseAuth } from '../firebase/firebase.js'
import { query, doc, collection, getDoc, getDocs, setDoc, orderBy, where, limit } from 'firebase/firestore';
import { getUserId } from "../utile/firebase";
import U from '../utile';
import C from '../constants';

export const getUsers = async () => {
    const userId = await getUserId();
    const _query = query(collection(fireStore, "users"), where("status", "<", C.ARTICLE_STATE.INACTIVE), orderBy("status"), orderBy("createdAt", "desc"), limit(100));
    const querySnapshot = await getDocs(_query);

    try {
        const users = await Promise.all(
            querySnapshot.docs.map((_doc) => {
                const result = _doc.data()
                return {
                    ...result,
                    createdAt: result.createdAt ? String(result.createdAt.toDate()) : null
                }
            })
        )

        return {
            userId,
            users
        };
    } catch (_err) {
        console.log(_err)
    }
}

export const getUser = async ({
    userId = ""
}) => {
    const docRef = await doc(fireStore, "users", userId);
    const docSnap = await getDoc(docRef);
    return docSnap.data()
}

export const getVerifiedUser = ({
    idToken = null
}) => {
    try {
        const _query = {
            idToken
        };
        return httpsCallableFunc({ functionName: 'default-getVerifiedUser', query: _query });
    } catch (_error) {
        throw Error(_error)
    }
}

export const postUser = async ({
    data = {}
}) => {
    const userId = await U.getUserId();
    const createdAt = Date.now();

    const baseData = {
        userId: userId,
        createdAt: createdAt,
        status: C.EVENT_STATE.ACTIVE
    }

    const userData = {
        ...data,
        ...baseData,
    }

    const userRef = doc(fireStore, "users", userId);

    return Promise.all[
        setDoc(userRef, userData, { merge: true })
    ];
}

export const putUser = async ({
    data = {}
}) => {
    const userId = await U.getUserId();

    const baseData = {
        userId: userId,
        status: C.EVENT_STATE.ACTIVE
    }

    const userData = {
        ...data,
        ...baseData,
    }

    const userRef = doc(fireStore, "users", userId);

    return Promise.all[
        setDoc(userRef, userData, { merge: true })
    ];
}
