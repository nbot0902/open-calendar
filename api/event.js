import { increment } from "firebase/firestore"
import { query, doc, collection, getDoc, getDocs, setDoc, orderBy, where, limit } from 'firebase/firestore';
import U from '../utile';
import C from '../constants';

export const postEvent = async ({
    data = {}
}) => {
    const { startAt } = data;
    const userId = await U.getUserId();
    const groupId = "kadomaru";

    const calendarId = U.getCalendarId({ date: startAt });
    const scheduleId = U.getScheduleId({ date: startAt });
    const eventsRef = doc(collection(fireStore, "events"));

    const eventId = eventsRef.id;
    const createdAt = Date.now();

    const baseData = {
        userId: userId,
        eventId: eventId,
        scheduleId: scheduleId,
        calendarId: calendarId,
        createdAt: createdAt,
        status: C.EVENT_STATE.ACTIVE
    }

    const eventData = {
        ...data,
        ...baseData,
    }
    const calendarData = {
        ...baseData,
        size: increment(1)
    }
    const scheduleData = {
        ...baseData,
        size: increment(1)
    }

    const eventRef = doc(fireStore, "events", eventId);
    const scheduleRef = doc(fireStore, "calendars", groupId, "groupCalendars", calendarId, "calendarSchedules", scheduleId);
    const calendarRef = doc(fireStore, "schedules", groupId, "groupSchedules", scheduleId, "events", eventId);

    return Promise.all([
        setDoc(eventRef, eventData, { merge: true }),
        setDoc(calendarRef, calendarData, { merge: true }),
        setDoc(scheduleRef, scheduleData, { merge: true }),
    ]);
}
