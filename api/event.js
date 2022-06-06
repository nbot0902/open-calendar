import { firebaseApp, fireStore, firebaseAuth } from '../firebase/firebase.js'
import { query, doc, collection, getDoc, getDocs, setDoc, orderBy, where, limit } from 'firebase/firestore';
import U from '../utile';
import C from '../constants';

export const postEvent = async ({
    calendarId = "",
    scheduleId = "",
    data = {}
}) => {
    const eventRef = await doc(collection(fireStore, "events"));

    const userId = await U.getUserId();
    const eventId = eventRef.id;
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
    }
    const scheduleData = {
        ...baseData,
    }

    const eventRef = doc(fireStore, "events", eventId);
    const scheduleRef = doc(fireStore, "schedules", scheduleId);
    const calendarRef = doc(fireStore, "calendars", calendarId);

    return Promise.all[
        setDoc(eventRef, eventData),
        setDoc(calendarRef, calendarData),
        setDoc(scheduleRef, scheduleData)
    ];
}
