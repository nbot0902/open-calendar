import { useSelector } from 'react-redux'
import { groupSlice } from '../store/group'
import API from '../api'

export const getGroupDispatch = async ({
    groupId = "",
    dispatch
}) => {
    dispatch(groupSlice.actions.getLoading({ hash: _newHash }));

    const _group = await API.getGroup({ groupId });
    const _newHash = {};

    _newHash[groupId] = _group;

    dispatch(groupSlice.actions.getItem({ hash: _newHash }));

    return _group ?? {};
}

export const cleanUserState = ({
    dispatch
}) => {
    dispatch(groupSlice.actions.cleanState());
}