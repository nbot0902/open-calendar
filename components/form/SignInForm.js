import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import InputRow from "../form/InputRow";
import { useAuth } from "../auth/AuthContext";
import form from '../../styles/form.module.scss'
import ACTION from '../../actions'

const SignInForm = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { currentUser, signIn, logout } = useAuth()
    const [articles, setArticles] = useState()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;

        return signIn({
            email,
            password
        })
    }

    return (
        <div className={form.form_sign_in}>
            <div className={form.form_head}>
                <div className={form.form_title}>
                    <h3 className={form.form_title_text}>{"ログイン"}</h3>
                </div>
                <div className={form.form_description}>
                    <p className={form.form_description_text}>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <InputRow labelName={"メールアドレス"} placeholder={"メールアドレスを入力してください"} uniqueId={"email"} type={"text"} />
                <InputRow labelName={"パスワード"} placeholder={"パスワードを入力してください"} uniqueId={"password"} type={"password"} />
                <button className={form.button_on_submit} type="submit">ログインする</button>
            </form>
        </div>

    )
}
export default SignInForm;