import React from 'react'
import nookies from 'nookies';
import Link from 'next/link';
import { useDispatch } from 'react-redux'
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { firebaseAuth } from '../../firebase/firebase.js'
import { confirmAlert } from 'react-confirm-alert';

import s from '../../styles/side_menu.module.scss'
import A from '../../actions'
import C from '../../constants'

const SideMenu = ({
    page = "/",
    profile = {},
    group = {},
    onVisible = false,
    isActive = false,
    isSignOut = false
}) => {
    const {
        picture = null,
        name = ""
    } = profile;

    const {
        plan = C.GROUP_PLAN.NORMAL
    } = group;

    const isNormal = plan == C.GROUP_PLAN.NORMAL;

    const router = useRouter();
    const dispatch = useDispatch();

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

    const _onWithdrawal = () => {
        return confirmAlert({
            title: "本当に退会しますか？",
            message: '一度、退会してしまうとユーザー情報を元に戻すことはできません',
            buttons: [
                {
                    label: '閉じる',
                    onClick: () => {
                        return onVisible();
                    }
                },
                {
                    label: '退会する',
                    onClick: () => {
                        A.deleteUserDispatch({ dispatch, groupId })
                        nookies.destroy(null, C.COOKIE_KEY);
                        signOut(firebaseAuth);
                        onVisible();
                        return router.replace("/");
                    }
                }
            ]
        });
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
                                    {false ? <li className={`${s.side_menu_list_item} ${page == "/" ? s.is_active : ""}`}>
                                        <Link className={s.side_menu_link} href={"/"}>
                                            トップページ
                                        </Link>
                                    </li> : null}
                                    {isSignOut ? (
                                        <li className={`${s.side_menu_list_item} ${page == "/signin" ? s.is_active : ""}`}>
                                            <Link className={s.side_menu_link} href={"/signin"}>
                                                {`${C.SERVICE_NAME}をはじめる`}
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
                                        {!isNormal ? <li className={`${s.side_menu_list_item} ${page == "/advertisement" ? s.is_active : ""}`}>
                                            <Link className={s.side_menu_link} href={"/advertisement"}>
                                                バナーの設定
                                            </Link>
                                        </li> : null}
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
                                        <Link className={s.side_menu_link} href={C.SUPPORT_URL} target={"_blank"}>
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
                                            <a className={s.side_menu_link} onClick={_onWithdrawal}>
                                                退会する
                                            </a>
                                        </li>
                                    ) : null}
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
