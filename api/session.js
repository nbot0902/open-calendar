import { httpsCallableFunc } from '../firebase/firebase.js'
import API from '../api';

export const postSessionCookie = ({
    idToken
}) => {
    try {
        const _query = {
            idToken
        };
        return httpsCallableFunc({ functionName: 'default-postSessionCookie', query: _query });
    } catch (_error) {
        throw Error(_error)
    }
}

export const getVerifiedUser = async ({
    query
}) => {
    try {
        const result = await httpsCallableFunc({ functionName: 'default-getVerifiedUser', query: query });
        return result;
    } catch (_error) {
        throw Error(_error)
    }
}