import { firebaseApp, fireStore, firebaseAuth } from '../firebase/firebase.js'
import { query, doc, collection, getDoc, getDocs, setDoc, orderBy, where, limit } from 'firebase/firestore';
import U from '../utile';
import C from '../constants';

export const getFirstUserGroup = async ({
    userId = ""
}) => {
    const _query = query(collection(fireStore, "users", userId, "userGroups"), orderBy("createdAt", "desc"), limit(1));
    const _querySnapshot = await getDocs(_query);

    try {
        const groups = await Promise.all(
            _querySnapshot.docs.map((_doc) => {
                const _result = _doc.data()
                return JSON.parse(JSON.stringify(_result));
            })
        )

        const groupId = groups[0].groupId
        const groupData = await getGroup({ groupId })

        return groupData;
    } catch (_err) {
        console.log(_err)
    }
}

export const getGroup = async ({ groupId = "" }) => {
    const docRef = await doc(fireStore, "groups", groupId);
    const docSnap = await getDoc(docRef);
    return docSnap.data()
}


export const postGroup = async ({
    data
}) => {
    const groupsRef = await doc(collection(fireStore, "groups"));
    const groupId = groupsRef.id;
    const userId = await U.getUserId();
    const createdAt = Date.now()

    const baseData = {
        userId: userId,
        groupId: groupId,
        createdAt: createdAt,
        status: C.GROUP_STATE.ACTIVE
    }

    const groupData = {
        name: groupId,
        ...data,
        ...baseData,
    }
    const userGroupData = {
        ...baseData,
    }

    const groupRef = doc(fireStore, "groups", groupId);
    const userGroupRef = doc(fireStore, "users", userId, "userGroups", groupId);

    return Promise.all[
        setDoc(groupRef, groupData),
        setDoc(userGroupRef, userGroupData)
    ];
}

export const putGroup = async ({
    groupId = "",
    data = {}
}) => {
    const updateAt = Date.now();

    const baseData = {
        updateAt: updateAt,
    }
    const groupData = {
        ...baseData,
        ...data,
    }

    const groupRef = doc(fireStore, "groups", groupId);

    return Promise.all[
        setDoc(groupRef, groupData, { merge: true })
    ];
}

