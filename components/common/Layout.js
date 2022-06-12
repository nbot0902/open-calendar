import common from '../../styles/common.module.scss'
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, page, isSignOut }) => (
    <div className={common.body}>
        <Header page={page} isSignOut={isSignOut} />
        <div className={common.container}>
            <div className={common.content}>
                {children}
            </div>
        </div>
        <Footer />
    </div>
)

export default Layout