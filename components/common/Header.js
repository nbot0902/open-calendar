import React from 'react'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux'
import Link, { LinkProps } from 'next/link';
import { useAuth } from "../auth/AuthContext";
import header from '../../styles/header.module.scss'

const Header = () => {
    const router = useRouter()
    const { currentUserId = "", isLogout = false } = useSelector((state) => state.app)
    const { hash = {} } = useSelector((state) => state.user)
    const { isLoading, logout } = useAuth()

    const handleLogoutButton = () => {
        logout()
    }

    const userData = hash[currentUserId]
    const userName = userData ? userData.name : "未設定"
    const userRole = userData ? userData.role : 99999;
    const isAdmin = userRole == 1
    const isHide = !userData || !isAdmin

    const _navOperation = () => {
        router.push('/mypage/operation')
    }

    return React.useMemo(() => {
        return (
            <div className={header.header}>
                <div className={header.header_container}>
                    <div className={header.header_content}>
                        <div className={header.header_content_left}>
                            <h1 className={header.service_name}>
                                <Link href={isLogout ? "/" : "/mypage/articles"}>
                                    <a className={header.service_name_text}>OPEN CALENDAR</a>
                                </Link>
                            </h1>
                        </div>
                        <div className={header.header_content_left}>
                            <ul className={header.header_nav_list}>
                                {!isHide && !isLogout ? (
                                    <li className={header.header_nav_list_item}>
                                        <a onClick={_navOperation} className={header.header_nav_list_item_text}>
                                            管理
                                        </a>
                                    </li>
                                ) : null}
                                {!isLogout ? (
                                    <li className={header.header_nav_list_item}>
                                        <a className={header.header_nav_list_item_text} onClick={handleLogoutButton}>
                                            ログアウト
                                 </a>
                                    </li>
                                ) : null}
                            </ul>
                        </div>
                        {!isLogout ?
                            (
                                <div className={header.header_content_right}>
                                    <div className={header.user}>
                                        <div className={header.user_info}>
                                            <div className={header.user_info_name}>
                                                <p className={header.user_info_name_text}>
                                                    {userName}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={header.user_icon}>
                                            <img className={header.user_icon_img} src="/images/dummy_icon_for_user.png" width={64} height={64} alt={userName} />
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        );
    }, [isLogout])
};

export default Header;