import common from '../../styles/common.module.scss'
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from 'react-hot-toast';

const Layout = ({
    children,
    page,
    isSignOut,
    group,
    profile
}) => {
    const toastOptions = {
        success: {
            style: {
                background: '#ffffff',
                color: '#202129',
            },
            iconTheme: {
                primary: '#3c8cff',
                secondary: '#ffffff',
            },
        },
        error: {
            style: {
                background: '#FF0000',
                color: '#ffffff',
            },
            iconTheme: {
                primary: '#ffffff',
                secondary: '#FF0000',
            },
        },
    }
    return (
        <div className={common.body}>
            <Header page={page} isSignOut={isSignOut} group={group} profile={profile} />
            <div className={common.container}>
                <div className={common.content}>
                    {children}
                </div>
            </div>
            <Toaster
                toastOptions={toastOptions}
            />
            <Footer />
        </div>
    )
}

export default Layout