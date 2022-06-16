import U from '../utile';
import A from '../actions';

export const getCurrentMonthScheduleDispatchs = async ({
    groupId = "",
}) => {
    const date = new Date();
    const calendarId = U.getCalendarId({ date: date });

    try {
        const _group = await A.getGroupDispatch({ groupId });
        const _calendarScheduleHash = await A.getCalendarSchedulesDispatch({ groupId, calendarId });

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
    calendarId
}) => {
    try {
        const _calendarScheduleHash = await A.getCalendarSchedulesDispatch({ groupId, calendarId });

        return {
            calendarId,
            calendarScheduleHash: _calendarScheduleHash,
        };
    } catch (_err) {
        console.log(_err)
    }
}
