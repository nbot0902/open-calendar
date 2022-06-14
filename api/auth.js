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

    if (userInfo.isNewUser) {
        const userData = {
            name: userInfo.profile.name,
            picture: userInfo.profile.picture
        };
        const groupData = {
            picture: userInfo.profile.picture
        };

        await Promise.all([
            API.postUser({ data: userData }),
            API.postGroup({ data: groupData })
        ])
    }

    const idToken = credential.idToken;
    await API.sessionLoginApi({ idToken });
}
