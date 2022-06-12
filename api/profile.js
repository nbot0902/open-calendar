import { httpsCallableFunc } from '../firebase/firebase.js'

export const getProfile = ({
    idToken
}) => {
    const _query = {
        idToken
    };

    const result = await httpsCallableFunc({ functionName: 'default-getOpenAiApi', query: _query });
    return result;
}