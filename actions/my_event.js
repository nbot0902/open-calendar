import { useSelector } from 'react-redux'
import { myEventSlice } from '../store/my_event'
import API from '../api'

export const getMyGroupSchedulesDispatch = async ({
    groupId = "",
    dispatch
}) => {
    var _newHash = {};

    const _myGroupSchedules = await API.getMyGroupSchedules({ groupId })

    const _schedulesEventsData = await Promise.all(
        _myGroupSchedules.map(async (_myGroupSchedule) => {
            const _data = await API.getSchedulesEvents({ groupId, scheduleId: _myGroupSchedule.scheduleId })
            return _data;
        })
    )

    await _myGroupSchedules.forEach((item, index) => {
        const scheduleId = item.scheduleId
        _newHash[scheduleId] = {
            ...item,
            list: _schedulesEventsData[index]
        }
    })

    dispatch(myEventSlice.actions.getItems({ groupId, hash: _newHash }));
    return _newHash;
}

export const getMoreMyGroupSchedulesDispatch = async ({
    groupId = "",
    scheduleId = "",
    dispatch
}) => {
    var _newHash = {};

    const _myGroupSchedules = await API.getMoreMyGroupSchedules({ groupId, scheduleId })

    const _schedulesEventsData = await Promise.all(
        _myGroupSchedules.map(async (_myGroupSchedule) => {
            const _data = await API.getSchedulesEvents({ groupId, scheduleId: _myGroupSchedule.scheduleId })
            return _data;
        })
    )

    await _myGroupSchedules.forEach((item, index) => {
        const scheduleId = item.scheduleId
        _newHash[scheduleId] = {
            ...item,
            list: _schedulesEventsData[index]
        }
    })

    dispatch(myEventSlice.actions.getMoreItems({ groupId, hash: _newHash }));
    return _newHash;
}

export const cleanMyEventState = ({
    dispatch
}) => {
    dispatch(myEventSlice.actions.cleanState());
}