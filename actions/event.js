import { useSelector } from 'react-redux'
import { eventSlice } from '../store/event'
import API from '../api'
import A from '../actions'
import U from '../utile'

export const getEventsDispatch = async ({
    scheduleEvents = []
}) => async dispatch => {
    dispatch(eventSlice.actions.getLoading());

    const _events = await API.getEvents({ scheduleEvents });
    const _newHash = {};

    await _events.forEach((_event, _) => {
        const _eventId = _event.eventId;
        _newHash[_eventId] = _event;
    })

    dispatch(eventSlice.actions.getItems({ hash: _newHash }));
}

export const getEventDispatch = async ({
    eventId = ""
}) => async dispatch => {
    console.log("dispatch", dispatch);
    dispatch(eventSlice.actions.getLoading());
    const _event = await API.getEvent({ eventId });
    const _newHash = {};

    _newHash[eventId] = _event;

    dispatch(eventSlice.actions.getItem({ hash: _newHash }));
}

export const postEventDispatch = async ({
    groupId = "",
    data = {}
}) => async dispatch => {
    console.log("dispatch", dispatch);
    dispatch(eventSlice.actions.getLoading());

    const { eventId = "未設定", startAt = Date.now() } = data;
    const _startAt = U.timestampToDate({ timestamp: startAt });
    const calendarId = U.getCalendarId({ date: _startAt })
    const scheduleId = U.getScheduleId({ date: _startAt })

    return API.postEvent({ groupId, data }).then((_) => {
        return Promise.all([
            A.getEventDispatch({ eventId }),
            A.getScheduleEventsDispatch({ groupId, calendarId, scheduleId })
        ])
    })
}

export const putEventDispatch = async ({
    groupId = "",
    data = {}
}) => async dispatch => {
    dispatch(eventSlice.actions.getLoading());

    const { eventId = "", startAt = Date.now() } = data;
    return API.putEvent({ groupId, eventId, data }).then((_) => getEventDispatch({ eventId }))
}

export const deleteEventDispatch = async ({
    groupId = "",
    data = {}
}) => async dispatch => {
    dispatch(eventSlice.actions.getLoading());

    const { eventId = "未設定", startAt = Date.now() } = data;
    return API.deleteEvent({ groupId, data }).then((_) => getEventDispatch({ eventId }))
}

export const cleanEventState = ({ dispatch }) => {
    dispatch(eventSlice.actions.cleanState());
}