import nookies from 'nookies';
import { getAuth, getCookie, postIdTokenToSessionLogin, serveContentForAdmin } from 'firebase/auth'
import { firebaseApp, fireStore, firebaseAuth } from '../firebase/firebase.js'
import { signOut, signInWithEmailAndPassword, signInWithRedirect, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import API from '../api'

export const verifyAuthState = async ({
    ctx
}) => {
    const authenticated = [
        '/profile',
        '/my_events'
    ];

    const cookies = nookies.get(ctx);
    const url = ctx.req.url || '';

    const _isAuthRequired = authenticated.includes(url);
    const _isCalendar = url.indexOf('/u/') != -1;
    const _isSignOut = !cookies.token;

    const baseProps = {
        url: url,
        isCalendar: _isCalendar,
        isSignOut: _isSignOut,
        idToken: cookies.token ?? null
    };

    const redirectTop = {
        redirect: {
            destination: '/',
            permanent: false,
        },
        props: {
            ...baseProps
        },
    };
    const redirectSignin = {
        redirect: {
            destination: '/signin',
            permanent: false,
        },
        props: {
            ...baseProps
        },
    };
    const empty = {
        props: {
            ...baseProps
        },
    };

    if (_isAuthRequired && _isSignOut) {
        return redirectSignin;
    } else if (_isCalendar) {
        return empty;
    } else if (_isSignOut) {
        return empty;
    } else {
        try {
            const _query = {
                idToken: cookies.token
            }

            const _verifiedUser = await API.getVerifiedUser({ query: _query })
            const userId = _verifiedUser.uid;

            const _result = await Promise.all([
                API.getFirstUserGroup({ userId }),
                API.getUser({ userId })
            ])

            return {
                props: {
                    ...baseProps,
                    group: _result[0],
                    profile: _result[1],
                },
            };
        } catch (err) {
            return redirectTop;
        }
    }
};

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