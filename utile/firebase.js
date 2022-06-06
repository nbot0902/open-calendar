import { getAuth, getCookie, postIdTokenToSessionLogin, serveContentForAdmin } from 'firebase/auth'
import { firebaseApp, fireStore, firebaseAuth } from '../firebase/firebase.js'
import { signOut, signInWithEmailAndPassword, signInWithRedirect, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

// export const verifyIdToken = async (
//     token
// ) => {
//     return firebaseAdmin
//         .auth()
//         .verifyIdToken(token)
//         .catch((error) => {
//             console.error(error);

//             throw new Error("有効なトークンではありません");
//         });
// };

export const getErrorMessage = (e, method) => {
    switch (e.code) {
        case 'auth/cancelled-popup-request':
        case 'auth/popup-closed-by-user':
            return null;
        case 'auth/email-already-in-use':
            if (method.indexOf('signup') !== -1) {
                return 'このメールアドレスは使用されています';
            } else {
                return 'メールアドレスまたはパスワードが違います';
            }
        case 'auth/invalid-email':
            return 'メールアドレスの形式が正しくありません';
        case 'auth/user-disabled':
            return 'サービスの利用が停止されています';
        case 'auth/user-not-found':
            return 'メールアドレスまたはパスワードが違います';
        case 'auth/user-mismatch':
            if (method === 'signin/popup') {
                return '認証されているユーザーと異なるアカウントが選択されました';
            } else {
                return 'メールアドレスまたはパスワードが違います';
            }
        case 'auth/weak-password':
            return 'パスワードは6文字以上にしてください';
        case 'auth/wrong-password':
            return 'メールアドレスまたはパスワードが違います';
        case 'auth/popup-blocked':
            return '認証ポップアップがブロックされました。ポップアップブロックをご利用の場合は設定を解除してください';
        case 'auth/operation-not-supported-in-this-environment':
        case 'auth/auth-domain-config-required':
        case 'auth/operation-not-allowed':
        case 'auth/unauthorized-domain':
            return '現在この認証方法はご利用頂けません';
        case 'auth/requires-recent-login':
            return '認証の有効期限が切れています';
        default:
            if (method.indexOf('signin') !== -1) {
                return '認証に失敗しました。しばらく時間をおいて再度お試しください';
            } else {
                return 'エラーが発生しました。しばらく時間をおいてお試しください';
            }
    }
};

// export const addFirebaseToken = async () => {
//     const _callBack = async (req, res) => {
//         try {
//             const idToken = req.body.idToken.toString();
//             const csrfToken = req.body.csrfToken.toString();

//             const expiresIn = 60 * 60 * 24 * 5 * 1000;
//             const options = { maxAge: expiresIn, httpOnly: true, secure: true };

//             if (csrfToken !== req.cookies.csrfToken) {
//                 throw Error('UNAUTHORIZED REQUEST!');
//             }

//             const sessionCookie = await getAuth()
//                 .createSessionCookie(idToken, { expiresIn });

//             res.cookie('session', sessionCookie, options);
//             res.end(JSON.stringify({ status: 'success' }));

//         } catch (_error) {
//             throw Error('UNAUTHORIZED REQUEST!');
//         }
//     }

//     firebaseApp.post('/sessionLogin', _callBack);
// }

// export const clearCookie = async () => {
//     await firebaseApp.post('/sessionLogout', (req, res) => {
//         const sessionCookie = req.cookies.session || '';
//         res.clearCookie('session');
//     });

//     try {
//         const decodedClaims = await getAuth()
//             .verifySessionCookie(sessionCookie);
//         await getAuth().revokeRefreshTokens(decodedClaims.sub);
//     } catch (_error) {
//         throw Error(_error);
//     }
// }

export const verifySessionCookie = () => {
    // const _callBack = async (req, res) => {
    //     const sessionCookie = req.cookies.session || '';
    //     const decodedClaims = await getAuth().verifySessionCookie(sessionCookie, true)

    //     try {
    //         if (decodedClaims.admin === true) {
    //             serveContentForAdmin('/admin', req, res, decodedClaims);
    //         } else {
    //             res.redirect('/');
    //         }
    //     } catch (_error) {
    //         res.redirect('/');
    //     }
    // }

    // firebaseApp.post('/profile', _callBack);
}

// export const getIdToken = ({
//     user
// }) => {
//     return user.getIdToken().then(idToken => {
//         const csrfToken = getCookie('csrfToken')
//         return postIdTokenToSessionLogin('/sessionLogin', idToken, csrfToken);
//     });
// }

export const getUserId = async () => {
    return new Promise((resolve, reject) => {
        return onAuthStateChanged(firebaseAuth, (_user) => {
            if (_user) {
                resolve(_user.uid);
            } else {
                resolve(null);
            }
        });
    });
}

export const getFirebaseUser = () => {
    return new Promise((resolve) => {
        var unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            resolve(user);
            unsubscribe();
        });
    });
};