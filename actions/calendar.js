import { useSelector } from 'react-redux'
import { calendarSlice } from '../store/calendar'
import API from '../api'

export const getCalendarSchedulesDispatch = ({
    groupId = "",
    calendarId = ""
}) => async dispatch => {
    const _calendarSchedules = await API.getCalendarSchedules({ groupId, calendarId });

    var _newHash = {};
    var _eventHash = {};

    await Promise.all(_calendarSchedules.map(async (_data) => {
        const _schedulesEvents = await API.getSchedulesEvents({ groupId, scheduleId: _data.scheduleId })
        _eventHash[_data.scheduleId] = _schedulesEvents
    }))

    await Promise.all(_calendarSchedules.map(async (_data) => {
        _newHash[_data.scheduleId] = {
            ..._data,
            list: _eventHash[_data.scheduleId]
        }
    }))

    dispatch(calendarSlice.actions.getItem({ groupId, hash: _newHash }));

    return _newHash;
}

export const cleanCalendarState = ({ dispatch }) => {
    dispatch(calendarSlice.actions.cleanState());
}