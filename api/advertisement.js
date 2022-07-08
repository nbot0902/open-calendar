import { firebaseApp, fireStore, firebaseStorage } from '../firebase/firebase.js'
import { httpsCallableFunc } from '../firebase/firebase.js'
import { query, doc, collection, getDoc, getDocs, setDoc, orderBy, where, limit } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"

import { getUserId } from "../utile/firebase";
import U from '../utile';
import C from '../constants';

export const getAdvertisement = async ({
    groupId = ""
}) => {
    const docRef = await doc(fireStore, "advertisements", groupId);
    const docSnap = await getDoc(docRef);
    return docSnap.data()
}

export const putAdvertisement = async ({
    groupId,
    newBottomBannerImage = null,
    bottomBannerStatus = C.AD_STATE.ACTIVE,
    bottomBannerUrl = ""
}) => {

    const baseData = {
        groupId: groupId,
        status: C.GROUP_STATE.ACTIVE
    }

    const _advertisementData = {
        ...baseData,
    }

    if (newBottomBannerImage) {
        const _resizedFile = await U.getResizedBottomBannerFile({ file: newBottomBannerImage });
        const _bottomBannerRef = ref(firebaseStorage, `advertisements/${groupId}/bottomBanner`);
        const _snapshot = await uploadBytesResumable(_bottomBannerRef, _resizedFile);
        _advertisementData.bottomBannerImage = await getDownloadURL(_snapshot.ref)
    }

    _advertisementData.bottomBannerStatus = bottomBannerStatus
    _advertisementData.bottomBannerUrl = bottomBannerUrl

    const adRef = doc(fireStore, "advertisements", groupId);

    return Promise.all[
        setDoc(adRef, _advertisementData, { merge: true })
    ];
}