import { useSelector } from 'react-redux'
import { userSlice } from '../store/user'
import API from '../api'

export const getUserDispatch = async ({
    userId = "",
    dispatch
}) => {
    console.log("dispatch", dispatch)
    const _user = await API.getUser({ userId });
    const _newHash = {};

    _newHash[userId] = _user;

    dispatch(userSlice.actions.getItem({ hash: _newHash }));
}

export const cleanUserState = ({
    dispatch
}) => {
    dispatch(userSlice.actions.cleanState());
}