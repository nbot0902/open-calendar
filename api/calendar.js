import { firebaseApp, fireStore, firebaseAuth } from '../firebase/firebase.js'
import { query, doc, collection, getDoc, getDocs, setDoc, orderBy, where, limit } from 'firebase/firestore';
import { getUserId } from "../utile/firebase";
import U from '../utile';
import API from '../api';
import { ApiError } from 'next/dist/server/api-utils';

export const getCalendarSchedules = async ({
    groupId = "",
    calendarId = ""
}) => {
    try {
        const _query = query(collection(fireStore, "calendars", groupId, "groupCalendars", calendarId, "calendarSchedules"), orderBy("createdAt", "desc"), limit(31));
        const _querySnapshot = await getDocs(_query);

        const _calendarSchedules = await Promise.all(
            _querySnapshot.docs.map(async (_doc) => {
                return _doc.data();
            })
        )
        return _calendarSchedules;
    } catch (_err) {
        return [];
    }
}
