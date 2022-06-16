import React from 'react'
import nookies from 'nookies';
import { useRouter } from "next/router";
import Link from 'next/link';
import { signOut } from "firebase/auth";
import { firebaseAuth } from '../../firebase/firebase.js'
import s from '../../styles/side_menu.module.scss'

import API from '../../api'
import C from '../../constants'

const SideMenu = ({
    page = "/",
    profile = {},
    group = {},
    onVisible = false,
    isActive = false,
    isSignOut = false
}) => {
    const router = useRouter();
    const { groupId = "" } = group;

    const sideMenuStyle = {
        transition: '0.2s',
        opacity: isActive ? 1 : 0,
        left: isActive ? '0px' : ' -320px',
    }
    const overlayStyle = {
        display: isActive ? 'block' : 'none',
        transition: '0.2s',
        opacity: isActive ? 1 : 0,
    }

    const _onLogout = () => {
        nookies.destroy(null, C.COOKIE_KEY);
        signOut(firebaseAuth);
        onVisible();

        return router.replace("/");
    }

    return React.useMemo(() => {
        return (
            <div>
                <div style={sideMenuStyle} className={`${s.side_menu}`}>
                    <div className={s.side_menu_scroll}>
                        <div className={s.side_menu_content}>
                            <div className={s.side_menu_row}>
                                <div className={s.row_title}>
                                    <h4 className={s.row_title_text}>
                                        メニュー
                                    </h4>
                                </div>
                                <ul className={s.side_menu_list}>
                                    <li className={`${s.side_menu_list_item} ${page == "/" ? s.is_active : ""}`}>
                                        <Link className={s.side_menu_link} href={"/"}>
                                            トップページ
                                        </Link>
                                    </li>
                                    {isSignOut ? (
                                        <li className={`${s.side_menu_list_item} ${page == "/profile" ? s.is_active : ""}`}>
                                            <Link className={s.side_menu_link} href={"/signin"}>
                                                OPENをはじめる
                                            </Link>
                                        </li>
                                    ) : null}
                                    {!isSignOut ? (
                                        <li className={`${s.side_menu_list_item} ${page == "/calendar" ? s.is_active : ""}`}>
                                            <Link href={`/u/${groupId}`} className={s.side_menu_link}>
                                                マイカレンダー
                                            </Link>
                                        </li>
                                    ) : null}
                                    {!isSignOut ? (
                                        <li className={`${s.side_menu_list_item} ${page == "/my_events" ? s.is_active : ""}`}>
                                            <Link className={s.side_menu_link} href={"/my_events"}>
                                                登録した予定
                                            </Link>
                                        </li>
                                    ) : null}
                                </ul>
                            </div>
                            {!isSignOut ? (
                                <div className={s.side_menu_row}>
                                    <div className={s.row_title}>
                                        <h4 className={s.row_title_text}>
                                            設定
                                        </h4>
                                    </div>
                                    <ul className={s.side_menu_list}>
                                        <li className={`${s.side_menu_list_item} ${page == "/profile" ? s.is_active : ""}`}>
                                            <Link className={s.side_menu_link} href={"/profile"}>
                                                ユーザーの設定
                                            </Link>
                                        </li>
                                        <li className={`${s.side_menu_list_item} ${page == "/calendar_setting" ? s.is_active : ""}`}>
                                            <Link className={s.side_menu_link} href={"/calendar_setting"}>
                                                カレンダーの設定
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            ) : null}
                            <div className={s.side_menu_row}>
                                <div className={s.row_title}>
                                    <h4 className={s.row_title_text}>
                                        その他
                                    </h4>
                                </div>
                                <ul className={s.side_menu_list}>
                                    <li className={s.side_menu_list_item}>
                                        <Link className={s.side_menu_link} href={"https://twitter.com/TCG63728721"} target={"_blank"}>
                                            運営について
                                        </Link>
                                    </li>
                                    <li className={`${s.side_menu_list_item} ${page == "/terms" ? s.is_active : ""}`}>
                                        <Link className={s.side_menu_link} href={"/terms"}>
                                            利用規約
                                        </Link>
                                    </li>
                                    <li className={`${s.side_menu_list_item} ${page == "/privacy_policy" ? s.is_active : ""}`}>
                                        <Link className={s.side_menu_link} href={"/privacy_policy"}>
                                            プライバシーポリシー
                                        </Link>
                                    </li>
                                    {!isSignOut ? (
                                        <li className={s.side_menu_list_item}>
                                            <a className={s.side_menu_link} onClick={_onLogout}>
                                                ログアウト
                                            </a>
                                        </li>
                                    ) : null}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={overlayStyle} onClick={onVisible} className={s.overlay}></div>
            </div>
        )
    }, [isActive, isSignOut])
}

export default SideMenu;
