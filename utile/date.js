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

    const calendarId = `${strYear}-${strMonth}`;
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

    const scheduleId = `${strYear}-${strMonth}-${strDay}`;
    return scheduleId;
}

export const getLabelFromScheduleId = ({ scheduleId }) => {
    const words = scheduleId.split("-")

    let label = "";

    words.forEach((_word, _index) => {
        const unit = _index == 0 ? "年" : _index == 1 ? "月" : "日";
        label = label + Number(_word).toString() + unit;
    });

    return label;
}

export const timestampToDate = ({ timestamp = null }) => {
    if (!timestamp) {
        return new Date()
    }
    return new Date(timestamp);
}

export const timestampToDateLabel = ({ timestamp = null }) => {
    if (!timestamp) {
        return ""
    }
    const date = new Date(timestamp);
    const yyyy = `${date.getFullYear()}`;

    const MM = `0${date.getMonth() + 1}`.slice(-2); // getMonth()の返り値は0が基点
    const dd = `0${date.getDate()}`.slice(-2);
    const HH = `0${date.getHours()}`.slice(-2);
    const mm = `0${date.getMinutes()}`.slice(-2);
    const ss = `0${date.getSeconds()}`.slice(-2);

    return `${yyyy}年${Number(MM)}月${Number(dd)}日 ${HH}:${mm}〜`;
}
