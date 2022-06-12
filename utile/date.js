import { Timestamp } from "firebase/firestore";

export const getCreatedAtText = (_date) => {

    const format = (date) => {
        const y = date.getFullYear();
        const m = ('00' + (date.getMonth() + 1)).slice(-2);
        const d = ('00' + date.getDate()).slice(-2);
        return `${Number(y)}年${Number(m)}月${Number(d)}日`;
    };

    const parsedDate = Date.parse(_date)
    const newDate = new Date(parsedDate)
    const _timestamp = Timestamp.fromDate(newDate);
    return format(_timestamp.toDate());
}

export const getRimestampFromDate = (_date) => {
    const parsedDate = Date.parse(_date)
    const newDate = new Date(parsedDate)
    return Timestamp.fromDate(newDate);
}

export const getCalendarId = ({
    date = new Date()
}) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const strYear = year.toString()
    const strMonth = month >= 10 ? month.toString() : `0${month.toString()}`
    const strDay = day >= 10 ? month.toString() : `0${month.toString()}`

    const calendarId = `${strYear}-${strMonth}`.replace(/\n|\r/g, '');
    return calendarId;
}

export const getScheduleId = ({
    date = new Date()
}) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const strYear = year.toString()
    const strMonth = month >= 10 ? month.toString() : `0${month.toString()}`
    const strDay = day >= 10 ? day.toString() : `0${day.toString()}`

    const scheduleId = `${strYear}-${strMonth}-${strDay}`.replace(/\n|\r/g, '');
    return scheduleId;
}