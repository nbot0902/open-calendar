import U from '../utile';
import A from '../actions';

export const getCurrentMonthScheduleDispatchs = async ({
    groupId = "",
    dispatch
}) => {
    const date = new Date();
    const calendarId = U.getCalendarId({ date: date });

    try {
        const _group = await A.getGroupDispatch({ dispatch, groupId });
        const _calendarScheduleHash = await A.getCalendarSchedulesDispatch({ dispatch, groupId, calendarId });

        return {
            calendarId,
            group: _group,
            calendarScheduleHash: _calendarScheduleHash,
        };
    } catch (_err) {
        console.log(_err)
    }
}

export const getMonthScheduleDispatchs = async ({
    groupId = "",
    dispatch,
    calendarId
}) => {
    try {
        const _calendarScheduleHash = await A.getCalendarSchedulesDispatch({ dispatch, groupId, calendarId });

        return {
            calendarId,
            group: _group,
            calendarScheduleHash: _calendarScheduleHash,
        };
    } catch (_err) {
        console.log(_err)
    }
}
