import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}
const _apps = getApps()

export const _getFirebaseApp = () => {
    if (_apps.length == 0) {
        return initializeApp(firebaseConfig);
    }
};
export const _getFirebaseAuth = () => {
    return getAuth(_getFirebaseApp());
};
export const _getFirestore = () => {
    return getFirestore(_getFirebaseApp());
};
export const _getStorage = () => {
    return getStorage(_getFirebaseApp());
};

export const firebaseApp = _getFirebaseApp();
export const firebaseAuth = _getFirebaseAuth();
export const fireStore = _getFirestore();
export const firebaseStorage = _getStorage();

const _functions = getFunctions();

export const httpsCallableFunc = async ({ functionName, query }) => {
    _functions.region = "asia-northeast1";

    const _httpsCallableFunc = await httpsCallable(_functions, functionName);
    const result = await _httpsCallableFunc(query);
    return JSON.parse(result.data);
};

export const login = async ({
    email,
    password
}) => {
    const _auth = getFirebaseAuth();
    const _result = await signInWithEmailAndPassword(_auth, email, password);
    const _id = await _result.user.getIdToken();
    await fetch("/api/session", { method: "POST", body: JSON.stringify({ id: _id }) });
};
export const logout = async () => {
    await fetch("/api/sessionLogout", { method: "POST" });
};