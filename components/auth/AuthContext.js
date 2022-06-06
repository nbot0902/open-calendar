import React from 'react'
import nookies from 'nookies'

import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { persistStore } from 'redux-persist'

import { firebaseApp, fireStore, firebaseAuth } from '../../firebase/firebase.js'

import {
    signOut,
    signInWithEmailAndPassword,
    signInWithRedirect,
    onAuthStateChanged,
    GoogleAuthProvider,
    ActionCodeOperation
} from "firebase/auth";

import { getErrorMessage } from '../../utile/firebase'

import Loading from "../common/Loading";
// import ACTION from "../../actions";
import { useStore } from "../../store";

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const store = useStore()
    const { isLogout = false } = useSelector((state) => state.app)
    const { currentUserId = "" } = useSelector((state) => state.app)

    const [isInitialized, setIsInitialized] = React.useState(false)
    const [firebaseUser, setFirebaseUser] = React.useState(false)
    const [isLoading, setIsIsLoading] = React.useState(false)

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithRedirect(firebaseAuth, provider)
    }

    const asyncFunction = async () => {
        // await ACTION.setCurrentUserId({ dispatch, currentUserId: userId })

        // const _result1 = await Promise.all([
        //     ACTION.getUserCompaniesDispatch({ dispatch, userId: userId }),
        //     ACTION.getUserDispatch({ dispatch, userId: userId }),
        //     ACTION.getArticlesDispatch({ dispatch, userId: userId }),
        // ])

        // const userCompany = _result1[0]

        // if (userCompany && userCompany.companyId) {

        //     const _result2 = await Promise.all([
        //         ACTION.getCompanyProjectsDispatch({ dispatch, companyId: userCompany.companyId }),
        //         ACTION.setInitialCurrentCompanyId({ dispatch, currentCompanyId: userCompany.companyId }),
        //     ])

        //     const _companyProject = _result2[0][0]

        //     if (_companyProject && _companyProject.projectId) {
        //         await Promise.all([
        //             ACTION.setInitialCurrentProjectId({ dispatch, currentProjectId: _companyProject.projectId }),
        //             ACTION.getProjectArticlesDispatch({ dispatch, projectId: _companyProject.projectId }),
        //         ])
        //     }
        // }

        // ACTION.setIsLogout({ dispatch, isLogout: false })
        // router.push('/mypage/articles');
    }

    const signIn = async ({
        email = "",
        password = ""
    }) => {
        // try {
        //     setIsIsLoading(true);
        //     ACTION.setIsLogout({ dispatch, isLogout: false })

        //     const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password)
        //     await asyncFunction({ userId: userCredential.user.uid });

        //     setTimeout(() => {
        //         setIsIsLoading(false);
        //     }, 1000)
        // } catch (_error) {
        //     const errorCode = _error.code;
        //     const errorMessage = _error.message;

        //     await Promise.all([
        //         ACTION.setIsLogout({ dispatch, isLogout: true }),
        //         setIsInitialized(true),
        //         signOut(firebaseAuth)
        //     ])

        //     router.push('/')
        //     setIsIsLoading(false)
        //     alert(getErrorMessage(errorCode, 'signin'))
        // }
    }

    // const cleanStore = () => {
    //     Promise.all([
    //         ACTION.cleanAppState({ dispatch }),
    //         ACTION.cleanArticleState({ dispatch }),
    //         ACTION.cleanCompanyState({ dispatch }),
    //         ACTION.cleanCompanyProjectState({ dispatch }),
    //         ACTION.cleanCompanyUserState({ dispatch }),
    //         ACTION.cleanFormPostArticleState({ dispatch }),
    //         ACTION.cleanProjectArticleState({ dispatch }),
    //         ACTION.cleanProjectState({ dispatch }),
    //         ACTION.cleanProjectUserState({ dispatch }),
    //         ACTION.cleanUserState({ dispatch }),
    //         ACTION.cleanUserArticleState({ dispatch }),
    //         ACTION.cleanUserCompanyState({ dispatch }),
    //         ACTION.cleanUserProjectState({ dispatch }),
    //     ])
    // }
    // const cleanPersistStore = () => {
    //     const persistor = persistStore(store)
    //     persistor.purge()
    // }

    const logout = async () => {
        setIsIsLoading(true)
        // await Promise.all([
        //     ACTION.setIsLogout({ dispatch, isLogout: true }),
        //     setIsInitialized(true),
        //     signOut(firebaseAuth)
        // ])

        await fetch("/api/sessionLogout", { method: "POST" });

        router.push('/')
        setIsIsLoading(false)
    }

    const handleLoadingView = ({
        flag = false
    }) => {
        setIsIsLoading(flag)
    }

    // React.useEffect(() => {
    //     if (!currentUserId) {
    //         return console.log("currentUserId --------", currentUserId)
    //     }
    // })

    React.useLayoutEffect(() => {
        if (isInitialized) {
            return
        }

        // const asyncFunction = async () => {
        //     const result = signInWithEmailAndPassword(firebaseAuth, email, password);
        //     const id = await result.user.getIdToken();

        //     await fetch("/api/session", { method: "POST", body: JSON.stringify({ id }) });
        // }

        return firebaseAuth.onIdTokenChanged(async (user) => {
            if (!user) {
                nookies.destroy(null, "token"); // cookiesを削除
                nookies.set(null, "token", "", {}); // ユーザーがログアウトしたらcookieを破棄
                setFirebaseUser(null);

                asyncFunction();
            } else {
                const token = await user.getIdToken(); // jwtを取得する

                nookies.set(null, "token", token, {}); // jwtをcookieに保存
                setFirebaseUser(user); // StateにFirebaseのUser情報を保存
            }
        });

        // setIsInitialized(true);
        // setIsIsLoading(true);

        // const _redirectToTopScreen = () => {
        //     cleanStore();
        //     cleanPersistStore()

        //     ACTION.setIsLogout({ dispatch, isLogout: true })

        //     router.push('/');

        //     setTimeout(() => {
        //         setIsIsLoading(false)
        //     }, 1000)
        // }

        // const _redirectSignedInScreen = ({ user }) => {
        //     ACTION.setIsLogout({ dispatch, isLogout: false })

        //     asyncFunction({ userId: user.uid });

        //     setTimeout(() => {
        //         setIsIsLoading(false)
        //     }, 1000)
        // }

        // const initializer = ({ user }) => {
        //     const isInacive = !user;

        //     if (isInacive) {
        //         _redirectToTopScreen();
        //     }

        //     if (!isInacive) {
        //         _redirectSignedInScreen({ user })
        //     }
        // }

        // var unsubscribe = onAuthStateChanged(firebaseAuth, (_user) => {
        //     if (_user) {
        //         initializer({ user: _user });
        //     } else {
        //         ACTION.setIsLogout({ dispatch, isLogout: true })
        //         router.push('/');

        //         setTimeout(() => {
        //             setIsIsLoading(false)
        //         }, 1000)
        //     }
        //     unsubscribe();
        // });
    }, [isInitialized, isLogout])

    const value = {
        isLoading: isLoading,
        firebaseUser,
        signInWithGoogle,
        signIn,
        logout,
        handleLoadingView
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
