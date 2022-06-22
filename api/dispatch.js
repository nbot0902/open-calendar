import U from '../utile';
import A from '../actions';

export const getCurrentMonthScheduleDispatchs = async ({
    groupId = "",
    dispatch
}) => {
    const date = new Date();
    const calendarId = await U.getCalendarId({ date: date });

    try {
        const _group = await A.getGroupDispatch({ groupId, dispatch });
        const _calendarScheduleHash = await A.getCalendarSchedulesDispatch({ groupId, calendarId, dispatch });


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
    dispatch,
    groupId = "",
    calendarId
}) => {
    try {
        const _calendarScheduleHash = await A.getCalendarSchedulesDispatch({ groupId, calendarId, dispatch });

        return {
            calendarId,
            calendarScheduleHash: _calendarScheduleHash,
        };
    } catch (_err) {
        console.log(_err)
    }
}
