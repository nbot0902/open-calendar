import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import form from '../../styles/form.module.scss'
import { firebaseAuth } from '../../firebase/firebase'
import API from '../../api'
import C from '../../constants'

import {
    signInWithRedirect,
    getRedirectResult,
    GoogleAuthProvider,
} from "firebase/auth";

const SignInForm = ({
    setLoading = () => { }
}) => {
    const router = useRouter();
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        setLoading(true);

        const _getRedirectResult = async () => {
            const result = await getRedirectResult(firebaseAuth)

            if (result) {
                await API.signWithGoogleSuccessCallback({ result })
                await setLoading(false);
                return router.push("/calendar_setting");
            } else {
                setLoading(false);
            }
        }

        _getRedirectResult()
    }, [count])

    const _handleSubmit = (event) => {
        event.preventDefault()
        setCount(count++);

        try {
            const provider = new GoogleAuthProvider();
            signInWithRedirect(firebaseAuth, provider);
        } catch (_error) {
            setLoading(false);
            alert(_error);
        }
    }

    return (
        <div className={form.form_sign_in}>
            <div className={form.form_head}>
                <div className={form.form_title}>
                    <h3 className={form.form_title_text}>{`${C.SERVICE_NAME}をはじめる`}</h3>
                </div>
                <div className={form.form_description}>
                    <p className={form.form_description_text}>
                        {C.SERVICE_NAME}はイベントや交流会の予定をカレンダーで簡単に共有できるWebサイトです。<br />URLを友達に送ったりSNSのプロフィールに貼ることで、自分の活動をみんなに簡単に共有することができます。
                    </p>
                </div>
            </div>
            <div className={form.form_caption}>
                <div className={form.form_caption_title}>
                    <h4 className={form.form_caption_title_text}>
                        おすすめの使い方
                    </h4>
                </div>
                <ul className={form.form_caption_list}>
                    <li className={form.form_caption_list_item}>
                        イベントの宣伝
                    </li>
                    <li className={form.form_caption_list_item}>
                        オンライン交流会の宣伝
                    </li>
                    <li className={form.form_caption_list_item}>
                        etc
                    </li>
                </ul>
            </div>
            <ul className={form.legal_list}>
                <li className={form.legal_list_item}>
                    <Link href={"/terms"}>
                        利用規約
                    </Link>
                </li>
                <li className={form.legal_list_item}>
                    と
                </li>
                <li className={form.legal_list_item}>
                    <Link href={"/privacy_policy"}>
                        プライバシーポリシー
                    </Link>
                </li>
                <li className={form.legal_list_item}>
                    に同意して
                </li>
            </ul>
            <form>
                <button
                    onClick={_handleSubmit}
                    className={`${form.button_on_submit} ${form.is_google}`}
                >
                    Googleではじめる
                </button>
            </form>
        </div>
    )
}
export default SignInForm;