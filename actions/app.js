import { useSelector } from 'react-redux'
import { appSlice } from '../store/app'
import API from '../api'

export const cleanUserState = () => async (dispatch, getState) => {
    dispatch(userSlice.actions.cleanState());
}