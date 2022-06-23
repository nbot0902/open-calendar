import { firebaseApp, fireStore, firebaseAuth } from '../firebase/firebase.js'
import { query, doc, collection, getDoc, getDocs, setDoc, orderBy, startAfter, limit } from 'firebase/firestore';

import { getUserId } from "../utile/firebase";
import API from '../api';

export const getMyGroupSchedules = async ({
    groupId = "",
}) => {
    const _query = query(collection(fireStore, "schedules", groupId, "groupSchedules"), orderBy("scheduleId", "desc"), limit(10));
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

export const getMoreMyGroupSchedules = async ({
    groupId = "",
    scheduleId = "",
}) => {
    const _query = query(collection(fireStore, "schedules", groupId, "groupSchedules"), orderBy("scheduleId", "desc"), startAfter(scheduleId), limit(10));
    const _querySnapshot = await getDocs(_query);

    try {
        const _schedulesEvents = await Promise.all(
            _querySnapshot.docs.map(async (_doc) => {
                return _doc.data();
            })
        )
        return _schedulesEvents;
    } catch (_err) {
        console.log("_err", _err)
        return [];
    }
}