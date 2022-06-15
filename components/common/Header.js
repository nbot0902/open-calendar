import React from 'react'
import nookies from 'nookies'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux'
import Link, { LinkProps } from 'next/link';
import header from '../../styles/header.module.scss'
import dummyIcon from '../../public/images/dummy_icon_for_user.png'
import SideMenu from "./SideMenu";

const Header = ({
    profile = {},
    group = {},
    isSignOut = false,
    page = "/"
}) => {
    const { picture = null } = profile;

    const router = useRouter();
    const { currentUserId = "", isLogout = false } = useSelector((state) => state.app);
    const { hash = {} } = useSelector((state) => state.user);

    const [isVisible, setIsVisible] = React.useState(false);

    const userData = hash[currentUserId];
    const userName = userData ? userData.name : "未設定";
    const userRole = userData ? userData.role : 99999;
    const isAdmin = userRole == 1;
    const isHide = !userData || !isAdmin;
    const imageUrl = picture ? picture : dummyIcon.src;;

    const _onOpenSideMenu = () => {
        if (isVisible) {
            return setIsVisible(false);
        }
        return setIsVisible(true);
    }
    const _onSignIn = () => {
        return router.push("/signin")
    }

    return React.useMemo(() => {
        return (
            <div>
                <SideMenu
                    onVisible={_onOpenSideMenu}
                    isActive={isVisible}
                    page={page}
                    isSignOut={isSignOut}
                    group={group}
                    profile={profile}
                />
                <div className={header.header}>
                    <div className={header.header_container}>
                        <div className={header.header_content}>
                            <div onClick={_onOpenSideMenu} className={header.user}>
                                <div className={header.user_icon}>
                                    <img className={header.user_icon_img} src={imageUrl} width={64} height={64} alt={userName} />
                                </div>
                            </div>
                            <div className={header.header_content_title}>
                                <Link className={header.service_logo} href={isLogout ? "/" : "/mypage/articles"}>
                                    <img className={header.service_logo_img} src="/images/logo.png" />
                                </Link>
                            </div>
                            {isSignOut ? (
                                <div onClick={_onSignIn} className={header.action}>
                                    <div className={header.action_button}>
                                        <Link href={"/signin"}>
                                            <div className={header.action_button_text}>
                                                ログイン
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }, [isLogout, isVisible, isSignOut])
};

export default Header;