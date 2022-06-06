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