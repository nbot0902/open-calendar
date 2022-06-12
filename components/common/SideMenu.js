import React from 'react'
import nookies from 'nookies';
import { useRouter } from "next/router";
import Link from 'next/link';
import { signOut } from "firebase/auth";
import { firebaseAuth } from '../../firebase/firebase.js'
import s from '../../styles/side_menu.module.scss'
import C from '../../constants'

const SideMenu = ({
    isSignOut = false,
    onVisible = false,
    isActive = false
}) => {
    const router = useRouter();
    const groupId = "kadomaru";

    const sideMenuStyle = {
        transition: '0.3s',
        opacity: isActive ? 1 : 0,
        left: isActive ? '0px' : ' -320px',
    }
    const overlayStyle = {
        display: isActive ? 'block' : 'none',
        transition: '0.3s',
        opacity: isActive ? 1 : 0,
    }

    const _onLogout = () => {
        nookies.destroy(null, C.COOKIE_KEY);
        signOut(firebaseAuth);
        return router.push("/");
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
                                    {!isSignOut ? (
                                        <li className={s.side_menu_list_item}>
                                            <Link className={s.side_menu_link} href={"/profile"}>
                                                プロフィール
                                         </Link>
                                        </li>
                                    ) : null}
                                    {!isSignOut ? (
                                        <li className={s.side_menu_list_item}>
                                            <Link href={`/u/${groupId}`} className={s.side_menu_link}>
                                                マイカレンダー
                                        </Link>
                                        </li>
                                    ) : null}
                                    {!isSignOut ? (
                                        <li className={s.side_menu_list_item}>
                                            <Link className={s.side_menu_link} href={"/my_events"}>
                                                登録したイベント
                                        </Link>
                                        </li>
                                    ) : null}
                                    <li className={s.side_menu_list_item}>
                                        <Link className={s.side_menu_link} href={"https://twitter.com/TCG63728721"} target={"_blank"}>
                                            運営について
                                        </Link>
                                    </li>
                                    <li className={s.side_menu_list_item}>
                                        <Link className={s.side_menu_link} href={"/terms"}>
                                            利用規約
                                        </Link>
                                    </li>
                                    <li className={s.side_menu_list_item}>
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
    }, [isActive])
}

export default SideMenu;
