import { useSelector } from 'react-redux'
import { eventSlice } from '../store/event'
import API from '../api'

export const getEventsDispatch = async ({
    dispatch,
    userId = ""
}) => {
    const _user = await API.getEvents({ userId });
    const _newHash = {};

    _newHash[userId] = _user;

    dispatch(eventSlice.actions.getItems({ hash: _newHash }));
}

export const getEventDispatch = async ({
    dispatch,
    eventId = ""
}) => {
    const _event = await API.getEvent({ eventId });
    const _newHash = {};

    _newHash[eventId] = _event;

    dispatch(eventSlice.actions.getItem({ hash: _newHash }));
}

export const cleanEventState = ({ dispatch }) => {
    dispatch(eventSlice.actions.cleanState());
}