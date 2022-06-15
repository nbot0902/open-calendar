import { useSelector } from 'react-redux'
import { calendarSlice } from '../store/calendar'
import API from '../api'

export const getScheduleEventsDispatch = async ({
    dispatch,
    groupId = "",
    calendarId = "",
    scheduleId = ""
}) => {
    const _calendarSchedule = await API.getCalendarSchedule({ groupId, calendarId, scheduleId })

    var _newHash = {};
    var _eventHash = {};

    const _schedulesEvents = await API.getSchedulesEvents({ groupId, scheduleId: scheduleId })
    _eventHash[scheduleId] = _schedulesEvents

    _newHash[scheduleId] = {
        ..._calendarSchedule,
        list: _eventHash[scheduleId]
    }

    dispatch(calendarSlice.actions.getItem({ groupId, hash: _newHash }));

    return _newHash;
}

export const cleanCalendarState = ({ dispatch }) => {
    dispatch(calendarSlice.actions.cleanState());
}