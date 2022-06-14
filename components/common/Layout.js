import common from '../../styles/common.module.scss'
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({
    children,
    page,
    isSignOut,
    group,
    profile
}) => {
    return (
        <div className={common.body}>
            <Header page={page} isSignOut={isSignOut} group={group} profile={profile} />
            <div className={common.container}>
                <div className={common.content}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout