import { increment } from "firebase/firestore"
import { firebaseApp, fireStore, firebaseAuth } from '../firebase/firebase.js'
import { query, doc, collection, getDoc, getDocs, setDoc, orderBy, where, limit } from 'firebase/firestore';
import U from '../utile';
import C from '../constants';

export const postEvent = async ({
    groupId = "",
    data = {}
}) => {
    const { startAt = Date.now() } = data;
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
        eventId: eventId,
        startAt: startAt.getTime(),
        status: C.EVENT_STATE.ACTIVE
    }
    const calendarScheduleData = {
        ...baseData,
    }
    const schedulesEventData = {
        ...baseData,
        eventId: eventId,
        startAt: startAt.getTime(),
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

export const putEvent = async ({
    eventId = "",
    groupId = "",
    data = {}
}) => {
    const { startAt = Date.now() } = data;
    const _startAt = U.timestampToDate({ timestamp: startAt })

    const calendarId = U.getCalendarId({ date: _startAt });
    const scheduleId = U.getScheduleId({ date: _startAt });
    const updateAt = Date.now()

    const baseData = {
        updateAt: updateAt,
    }
    const eventData = {
        ...data,
        ...baseData,
        startAt: _startAt.getTime()
    }
    const schedulesEventData = {
        ...baseData,
        startAt: _startAt.getTime()
    }
    const calendarScheduleData = {
        ...baseData,
    }
    const groupCalendarData = {
        ...baseData,
    }
    const groupScheduleData = {
        ...baseData,
    }

    const eventRef = doc(fireStore, "events", eventId);
    const schedulesEventRef = doc(fireStore, "schedules", groupId, "groupSchedules", scheduleId, "schedulesEvents", eventId);
    const calendarScheduleRef = doc(fireStore, "calendars", groupId, "groupCalendars", calendarId, "calendarSchedules", scheduleId);
    const groupCalendarRef = doc(fireStore, "calendars", groupId, "groupCalendars", calendarId);
    const groupScheduleRef = doc(fireStore, "schedules", groupId, "groupSchedules", scheduleId);

    return Promise.all([
        setDoc(eventRef, eventData, { merge: true }),
        setDoc(calendarScheduleRef, calendarScheduleData, { merge: true }),
        setDoc(groupCalendarRef, groupCalendarData, { merge: true }),
        setDoc(groupScheduleRef, groupScheduleData, { merge: true }),
        setDoc(schedulesEventRef, schedulesEventData, { merge: true }),
    ]);
}

export const deleteEvent = async ({
    groupId = "",
    data = {}
}) => {
    const { eventId = "", startAt = Date.now() } = data;
    const _startAt = U.timestampToDate({ timestamp: startAt })

    const calendarId = U.getCalendarId({ date: _startAt });
    const scheduleId = U.getScheduleId({ date: _startAt });
    const updateAt = Date.now()

    const baseData = {
        updateAt: updateAt,
    }

    const eventData = {
        ...baseData,
        status: C.EVENT_STATE.INACTIVE
    }
    const schedulesEventData = {
        ...baseData,
        status: C.EVENT_STATE.INACTIVE
    }
    const calendarScheduleData = {
        ...baseData,
    }
    const groupScheduleData = {
        ...baseData,
        size: increment(-1)
    }
    const groupCalendarData = {
        ...baseData,
        size: increment(-1)
    }

    const eventRef = doc(fireStore, "events", eventId);
    const schedulesEventRef = doc(fireStore, "schedules", groupId, "groupSchedules", scheduleId, "schedulesEvents", eventId);
    const calendarScheduleRef = doc(fireStore, "calendars", groupId, "groupCalendars", calendarId, "calendarSchedules", scheduleId);
    const groupCalendarRef = doc(fireStore, "calendars", groupId, "groupCalendars", calendarId);
    const groupScheduleRef = doc(fireStore, "schedules", groupId, "groupSchedules", scheduleId);

    return Promise.all([
        setDoc(eventRef, eventData, { merge: true }),
        setDoc(calendarScheduleRef, calendarScheduleData, { merge: true }),
        setDoc(groupCalendarRef, groupCalendarData, { merge: true }),
        setDoc(groupScheduleRef, groupScheduleData, { merge: true }),
        setDoc(schedulesEventRef, schedulesEventData, { merge: true }),
    ]);
}


export const getEvents = async ({
    scheduleEvents = []
}) => {
    return Promise.all(scheduleEvents.map(async (item, _) => await getEvent({ eventId: item.eventId })))
}

export const getEvent = async ({
    eventId = ""
}) => {
    const docRef = await doc(fireStore, "events", eventId);
    const docSnap = await getDoc(docRef);
    const result = docSnap.data();

    return {
        ...result,
        eventId
    }
}
