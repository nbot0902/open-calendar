import { firebaseApp, fireStore, firebaseAuth } from '../firebase/firebase.js'
import { query, doc, collection, getDoc, getDocs, setDoc, orderBy, where, limit } from 'firebase/firestore';

import { getUserId } from "../utile/firebase";
import API from '../api';

export const getSchedulesEvents = async ({
    groupId = "",
    scheduleId = ""
}) => {
    const _query = query(collection(fireStore, "schedules", groupId, "groupSchedules", scheduleId, "schedulesEvents"), orderBy("createdAt", "desc"), limit(10));
    const _querySnapshot = await getDocs(_query);

    try {
        const _schedulesEvents = await Promise.all(
            _querySnapshot.docs.map(async (_doc) => {
                return _doc.data();
            })
        )
        return _schedulesEvents;
    } catch (_err) {
        return [];
    }
}