import common from '../../styles/common.module.scss'
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
    <div className={common.body}>
        <Header />
        <div className={common.container}>
            <div className={common.content}>
                {children}
            </div>
        </div>
        <Footer />
    </div>
)

export default Layout