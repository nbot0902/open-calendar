import { useSelector } from 'react-redux'
import { advertisementSlice } from '../store/advertisement'
import API from '../api'

export const getAdvertisementDispatch = async ({
    groupId = "",
    dispatch
}) => {
    const _advertisement = await API.getAdvertisement({ groupId });
    const _newHash = {};

    _newHash[groupId] = _advertisement;

    dispatch(advertisementSlice.actions.getItem({ hash: _newHash }));
}


export const putAdvertisementDispatch = async ({
    groupId,
    newBottomBannerImage,
    bottomBannerStatus,
    bottomBannerUrl,
    dispatch
}) => {
    try {
        dispatch(advertisementSlice.actions.postLoading());

        return API.putAdvertisement({
            groupId,
            newBottomBannerImage,
            bottomBannerStatus,
            bottomBannerUrl
        }).then((_) => {
            return getAdvertisementDispatch({ dispatch, groupId })
        })

    } catch (_error) {
        dispatch(advertisementSlice.actions.postFailed());
    }
}

export const cleanUserState = ({
    dispatch
}) => {
    dispatch(advertisementSlice.actions.cleanState());
}