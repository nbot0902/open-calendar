import React from 'react'
import { useSelector } from 'react-redux'
import AutherProfileLoading from '../../components/loading/AutherProfileLoading'

import dummyIcon from '../../public/images/dummy_icon_for_user.png'
import s from '../../styles/custom_calendar.module.scss'

const AutherProfile = (
    groupId
) => {
    const { hash = {}, isLoading = false } = useSelector((state) => state.group)
    const { picture = null, groupName = "私のカレンダー", description = "このカレンダーにはみんなと共有したい予定を掲載します。" } = hash[groupId] ?? {};

    const imageStyle = {
        backgroundImage: picture ? `url('${picture}')` : `url(${dummyIcon.src})`
    }

    return React.useMemo(() => {
        return (
            <div className={s.auther_profile}>
                {isLoading ? (
                    <AutherProfileLoading />
                ) : (
                        <React.Fragment>
                            <div className={s.auther_profile_icon}>
                                <div className={s.auther_profile_icon_img} style={imageStyle} />
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