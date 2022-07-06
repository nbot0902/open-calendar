import React from 'react'
import { useSelector } from 'react-redux'
import AutherProfileLoading from '../../components/loading/AutherProfileLoading'
import { FiLink } from "react-icons/fi";
import { FaTiktok, FaTwitter } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import Link from 'next/link';

import dummyIcon from '../../public/images/dummy_icon_for_group.png'
import s from '../../styles/custom_calendar.module.scss'

const AutherProfile = ({
    groupId = ""
}) => {
    const calendarUrl = window.location.href ?? "";
    const { hash = {}, isLoading = false } = useSelector((state) => state.group)
    const data = hash[groupId] ?? {}
    const {
        picture = null,
        groupName = "私のカレンダー",
        description = "このカレンダーにはみんなと共有したい予定を掲載します。",
        twitterUrl = "",
        tiktokUrl = "",
        otherUrl = "",
    } = data;

    const imageStyle = {
        backgroundImage: picture ? `url('${picture}')` : `url(${dummyIcon.src})`
    }
    const _onClickCopyText = () => {
        navigator.clipboard.writeText(calendarUrl).then(() => alert(`URLをコピーしました: ${calendarUrl}`))
    }

    return React.useMemo(() => {
        return (
            <div className={s.auther_profile}>
                {isLoading ? (
                    <AutherProfileLoading />
                ) : (
                        <React.Fragment>
                            <div className={s.auther}>
                                <div className={s.auther_profile_icon}>
                                    <div className={s.auther_profile_icon_img} style={imageStyle} />
                                </div>
                                <div className={s.auther_profile_info}>
                                    <div className={s.auther_profile_name}>
                                        <h2 className={s.auther_profile_name_text}>
                                            {groupName ? groupName : "私のカレンダー"}
                                        </h2>
                                    </div>
                                    <div className={s.auther_profile_description}>
                                        <p className={s.auther_profile_description_text}>
                                            {description ? description : "このカレンダーにはみんなと共有したい予定を掲載します。"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={s.social}>
                                <ul className={s.social_list}>
                                    <li className={s.social_list_item}>
                                        <Link href={twitterUrl ? twitterUrl : "#"}>
                                            <div className={s.social_list_item_icon}>
                                                <FaTwitter color={twitterUrl ? "#51B8D5" : "#DCDCDC"} size={24} />
                                                <p className={s.social_list_item_icon_label} style={{ color: twitterUrl ? "#363636" : "#DCDCDC" }} >Twitter</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className={s.social_list_item}>
                                        <Link href={tiktokUrl ? tiktokUrl : "#"}>
                                            <div className={s.social_list_item_icon}>
                                                <FaTiktok color={tiktokUrl ? "#51B8D5" : "#DCDCDC"} size={24} />
                                                <p className={s.social_list_item_icon_label} style={{ color: tiktokUrl ? "#363636" : "#DCDCDC" }} >TikTok</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className={s.social_list_item}>
                                        <Link href={otherUrl ? otherUrl : "#"}  >
                                            <div className={s.social_list_item_icon}>
                                                <MdWeb color={otherUrl ? "#51B8D5" : "#DCDCDC"} size={24} />
                                                <p className={s.social_list_item_icon_label} style={{ color: otherUrl ? "#363636" : "#DCDCDC" }} >Webサイト</p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={s.copy}>
                                <div onClick={_onClickCopyText} className={s.copy_area}>
                                    <FiLink color={"#51B8D5"} size={16} />
                                    <span className={s.copy_area_text}>
                                        このページのURLをコピーする
                                    </span>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }
            </div>
        )
    }, [isLoading, data, calendarUrl, groupName, description])
}

export default AutherProfile;