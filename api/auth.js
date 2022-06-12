import { useRouter } from 'next/router';

import {
    signOut,
    signInWithEmailAndPassword,
    signInWithRedirect,
    signInWithPopup,
    onAuthStateChanged,
    getRedirectResult,
    getAdditionalUserInfo,
    GoogleAuthProvider,
    ActionCodeOperation,
    getAuth
} from "firebase/auth";

import API from '../api';

export const signWithGoogleSuccessCallback = async ({ result }) => {

    const credential = await GoogleAuthProvider.credentialFromResult(result);
    const userInfo = await getAdditionalUserInfo(result);

    const idToken = credential.idToken;
    await API.postSessionCookie({ idToken });

    const userData = {
        name: userInfo.profile.name,
        picture: userInfo.profile.picture
    };

    if (userInfo.isNewUser) {
        Promise.all([
            API.postUser({ data: userData }),
            API.postGroup()
        ])
    }
}
