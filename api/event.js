import { increment } from "firebase/firestore"
import { firebaseApp, fireStore, firebaseAuth } from '../firebase/firebase.js'
import { query, doc, collection, getDoc, getDocs, setDoc, orderBy, where, limit } from 'firebase/firestore';
import U from '../utile';
import C from '../constants';

export const postEvent = async ({
    groupId = "",
    data = {}
}) => {
    const { startAt = new Date() } = data;
    const userId = await U.getUserId();

    const calendarId = U.getCalendarId({ date: startAt });
    const scheduleId = U.getScheduleId({ date: startAt });
    const eventsRef = doc(collection(fireStore, "events"));

    const eventId = eventsRef.id;
    const createdAt = Date.now()

    const baseData = {
        userId: userId,
        scheduleId: scheduleId,
        calendarId: calendarId,
        createdAt: createdAt,
    }

    const eventData = {
        ...data,
        ...baseData,
        startAt: startAt.getTime()
    }
    const calendarScheduleData = {
        ...baseData,
    }
    const schedulesEventData = {
        ...baseData,
        eventId: eventId,
        status: C.EVENT_STATE.ACTIVE
    }
    const groupScheduleData = {
        ...baseData,
        size: increment(1)
    }
    const groupCalendarData = {
        ...baseData,
        size: increment(1)
    }

    const eventRef = doc(fireStore, "events", eventId);
    const calendarScheduleRef = doc(fireStore, "calendars", groupId, "groupCalendars", calendarId, "calendarSchedules", scheduleId);
    const groupCalendarRef = doc(fireStore, "calendars", groupId, "groupCalendars", calendarId);
    const schedulesEventRef = doc(fireStore, "schedules", groupId, "groupSchedules", scheduleId, "schedulesEvents", eventId);
    const groupScheduleRef = doc(fireStore, "schedules", groupId, "groupSchedules", scheduleId);

    return Promise.all([
        setDoc(eventRef, eventData, { merge: true }),
        setDoc(calendarScheduleRef, calendarScheduleData, { merge: true }),
        setDoc(groupCalendarRef, groupCalendarData, { merge: true }),
        setDoc(groupScheduleRef, groupScheduleData, { merge: true }),
        setDoc(schedulesEventRef, schedulesEventData, { merge: true }),
    ]);
}


export const getEvent = async ({
    eventId = ""
}) => {
    const docRef = await doc(fireStore, "events", eventId);
    const docSnap = await getDoc(docRef);
    return docSnap.data()
}
