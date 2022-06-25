import nookies from 'nookies';
import { getAuth, getCookie, postIdTokenToSessionLogin, serveContentForAdmin } from 'firebase/auth'
import { firebaseApp, fireStore, firebaseAuth } from '../firebase/firebase.js'
import { signOut, signInWithEmailAndPassword, signInWithRedirect, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import API from '../api'
import C from '../constants'

// 自分のプロフィールデータを取得
const _getinitialUserData = async ({ verifiedUser }) => {
    const _userId = verifiedUser.user_id;

    const _result = await Promise.all([
        API.getFirstUserGroup({ userId: _userId }),
        API.getUser({ userId: _userId })
    ]);

    return {
        group: _result[0],
        profile: _result[1],
    };
}

export const verifyAuthState = async ({
    ctx
}) => {
    const cookies = nookies.get(ctx);
    const url = ctx.req.url || '';

    const authenticated = [
        '/profile',
        '/calendar_setting',
        '/my_events'
    ];
    const supportScreens = [
        '/maintenance',
    ];
    const _isAuthRequired = authenticated.includes(url);
    const _isSupportScreen = supportScreens.includes(url);

    const forcedTermination = {
        redirect: {
            destination: '/maintenance',
            permanent: false,
        },
        props: {
            type: "forcedTermination"
        },
    };

    // 攻撃があった時の対策
    if (false && !_isSupportScreen) {
        return forcedTermination;
    }

    const _isCalendar = url.indexOf('/u/') != -1;
    const _isTop = url == "/" || url.indexOf('index') != -1;

    const _support = await API.getSupport();
    const _isSupportMode = _support.isMaintenance && !_isSupportScreen;

    const _query = {
        idToken: cookies.token ?? null
    }

    const _verifiedUser = _query.idToken ? await API.getVerifiedUser({ query: _query }) : null;
    const _isSignOut = !cookies.token || !_verifiedUser;

    const baseProps = {
        url: url,
        isCalendar: _isCalendar,
        isSignOut: _isSignOut,
        isSupportMode: _support.isMaintenance,
        idToken: cookies.token ?? null
    };
    const redirectSignin = {
        redirect: {
            destination: '/signin',
            permanent: false,
        },
        props: {
            ...baseProps,
            type: "redirectSignin"
        },
    };
    const redirectMaintenance = {
        redirect: {
            destination: '/maintenance',
            permanent: false,
        },
        props: {
            ...baseProps,
            type: "redirectMaintenance"
        },
    };
    const empty = {
        props: {
            ...baseProps,
            type: "empty"
        },
    };

    if (_isSupportMode) {
        // サポート状態 + サポート関連画面
        return redirectMaintenance;
    } else if (_isSupportScreen) {
        // 非サポート状態 + サポート関連画面
        return empty;
    } else if (_isTop) {
        // トップページの場合
        return redirectSignin;
    } else if (_isAuthRequired && _isSignOut) {
        // サインアウト状態 + ログイン後のページの場合
        return redirectSignin;
    } else if (_isCalendar) {
        if (!_isSignOut) {
            // サインイン状態 + カレンダー
            const _data = await _getinitialUserData({ verifiedUser: _verifiedUser })

            return {
                props: {
                    ...baseProps,
                    group: _data.group,
                    profile: _data.profile,
                },
            };
        } else {
            // サインアウト状態
            // カレンダーは誰でも見れる画面なので分岐
            return empty;
        }
    } else if (_isSignOut) {
        // サインアウト状態
        return empty;
    } else {
        // サインイン状態
        const _data = await _getinitialUserData({ verifiedUser: _verifiedUser })

        return {
            props: {
                ...baseProps,
                group: _data.group,
                profile: _data.profile,
            },
        };
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

export const getRefreshToken = async () => {
    return new Promise((resolve, reject) => {
        return onAuthStateChanged(firebaseAuth, (_user) => {
            if (_user) {
                resolve(_user.refreshToken);
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