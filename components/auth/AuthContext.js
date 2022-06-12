import React from 'react'
import nookies from 'nookies'

import { createContext, useContext, useEffect, useState } from 'react'
import { firebaseApp, fireStore, firebaseAuth } from '../../firebase/firebase.js'

import {
    signOut,
    signInWithEmailAndPassword,
    signInWithRedirect,
    onAuthStateChanged,
    GoogleAuthProvider,
    ActionCodeOperation
} from "firebase/auth";

import Loading from "../common/Loading";
import { useStore } from "../../store";
import C from "../../constants";

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const interval = 10 * 60 * 1000;
    const [user, setUser] = React.useState(null);

    useEffect(() => {
        return firebaseAuth.onIdTokenChanged(async (user) => {
            if (!user) {
                setUser(null);

                nookies.destroy(null, C.COOKIE_KEY);
                return;
            } else {
                const token = await user.getIdToken();

                setUser(user);

                nookies.destroy(null, C.COOKIE_KEY);
                nookies.set(undefined, C.COOKIE_KEY, token, {});
            }

        });
    }, []);

    useEffect(() => {
        const handler = setInterval(async () => {
            const user = firebaseAuth.currentUser;

            if (user) {
                await user.getIdToken(true);
            }

        }, interval);
        return () => clearInterval(handler);
    }, []);

    const value = {
        user
    }

    return (
        <AuthContext.Provider value={value}>
            <Loading>
                {children}
            </Loading>
        </AuthContext.Provider>
    )
}

export default AuthProvider
