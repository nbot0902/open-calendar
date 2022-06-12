import React from 'react'
import s from '../../styles/custom_calendar.module.scss'

const AutherProfile = ({
    user = {}
}) => {
    return (
        <div className={s.auther_profile}>
            <div className={s.auther_profile_icon}>
                <img className={s.auther_profile_icon_img} src={"https://placehold.jp/150x150.png"} />
            </div>
            <div className={s.auther_profile_info}>
                <div className={s.auther_profile_name}>
                    <h2 className={s.auther_profile_name_text}>
                        <span>kanakoさん</span>のカレンダー
                    </h2>
                </div>
                <div className={s.auther_profile_description}>
                    <p className={s.auther_profile_description_text}>
                        テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                    </p>
                </div>

            </div>

        </div>
    )
}

export default AutherProfile;