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

export const putGroupDispatch = async ({
    data,
    groupId,
    newPicture,
    dispatch
}) => {
    try {
        dispatch(groupSlice.actions.postLoading());

        return API.putGroup({ data, groupId, newPicture })
            .then((_) => {
                return getGroupDispatch({ dispatch, groupId })
            })

    } catch (_error) {
        dispatch(groupSlice.actions.postFailed());
    }
}

export const cleanUserState = ({
    dispatch
}) => {
    dispatch(groupSlice.actions.cleanState());
}