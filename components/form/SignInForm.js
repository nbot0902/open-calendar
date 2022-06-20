import React, { useState } from 'react';
import { useRouter } from 'next/router';
import InputRow from "../form/InputRow";
import LoadingModal from "../common/LoadingModal";

import form from '../../styles/form.module.scss'
import { firebaseAuth } from '../../firebase/firebase'
import API from '../../api'

import {
    signOut,
    signInWithEmailAndPassword,
    signInWithRedirect,
    signInWithPopup,
    onAuthStateChanged,
    getRedirectResult,
    getAdditionalUserInfo,
    GoogleAuthProvider,
    ActionCodeOperation,
    getAuth
} from "firebase/auth";

const SignInForm = () => {
    const router = useRouter();

    React.useEffect(() => {
        const _getRedirectResult = async () => {
            const result = await getRedirectResult(firebaseAuth)

            if (result) {
                await API.signWithGoogleSuccessCallback({ result })
                return router.push("/calendar_setting");
            }
        }

        _getRedirectResult()
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        try {
            const provider = new GoogleAuthProvider();
            signInWithRedirect(firebaseAuth, provider);
        } catch (_error) {
            alert(_error);
            console.log("_error", _error)
        }
    }

    return (
        <div className={form.form_sign_in}>
            <div className={form.form_head}>
                <div className={form.form_title}>
                    <h3 className={form.form_title_text}>{"Openをはじめる"}</h3>
                </div>
                <div className={form.form_description}>
                    <p className={form.form_description_text}>
                        Openはイベントや交流会の予定をカレンダーで共有できるアプリです。<br />URLを友達に送ったりSNSのプロフィールに貼ることで、自分の活動を簡単にみんなに共有することができます。
                        </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <button className={form.button_on_submit} type="submit">Googleではじめる</button>
                </form>
            </div>
        </div>
    )
}
export default SignInForm;