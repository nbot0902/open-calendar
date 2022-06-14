import React from 'react'
import { useSelector } from 'react-redux'
import AutherProfileLoading from '../../components/loading/AutherProfileLoading'
import s from '../../styles/custom_calendar.module.scss'

const AutherProfile = (
    groupId
) => {
    const { hash = {}, isLoading = false } = useSelector((state) => state.group)
    const { groupName = "私のカレンダー", description = "このカレンダーにはみんなと共有したい予定を掲載します。" } = hash[groupId] ?? {};

    return React.useMemo(() => {
        return (
            <div className={s.auther_profile}>
                {isLoading ? (
                    <AutherProfileLoading />
                ) : (
                        <React.Fragment>
                            <div className={s.auther_profile_icon}>
                                <img className={s.auther_profile_icon_img} src={"https://placehold.jp/150x150.png"} />
                            </div>
                            <div className={s.auther_profile_info}>
                                <div className={s.auther_profile_name}>
                                    <h2 className={s.auther_profile_name_text}>
                                        {groupName}
                                    </h2>
                                </div>
                                <div className={s.auther_profile_description}>
                                    <p className={s.auther_profile_description_text}>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }
            </div>
        )
    }, [isLoading, groupName, description])
}

export default AutherProfile;