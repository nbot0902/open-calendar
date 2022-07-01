import nookies from 'nookies';
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { firebaseApp, fireStore, firebaseAuth, firebaseStorage } from '../firebase/firebase.js'

import { httpsCallableFunc } from '../firebase/firebase.js'
import axios from "axios";
import API from '../api';
import U from '../utile';
import C from '../constants';

export const sessionLoginApi = async ({
    idToken
}) => {
    try {
        const _query = {
            idToken: idToken
        };
        return httpsCallableFunc({ functionName: 'default-sessionLoginApi', query: _query });
    } catch (_error) {
        throw Error(_error)
    }
}

export const logout = () => {
    nookies.destroy(null, C.COOKIE_KEY);
    signOut(firebaseAuth);
}

export const postNewTokenApi = async () => {
    try {
        const refreshToken = await U.getRefreshToken();

        const params = new URLSearchParams();
        params.append("grant_type", "refresh_token");
        params.append("refresh_token", refreshToken);

        const res = await axios.post(`${C.SECURET_TOKEN_URL}${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })

        const data = await res.data;

        return data;
    } catch (_error) {
        console.log("_error", _error)
        throw Error(_error)
    }
}

export const sessionLogoutApi = () => {
    try {

        return httpsCallableFunc({ functionName: 'default-sessionLogoutApi', query: {} });
    } catch (_error) {
        throw Error(_error)
    }
}