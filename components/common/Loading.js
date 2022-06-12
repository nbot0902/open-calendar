import React from 'react'
import { useRouter } from "next/router"
import { Grid } from 'react-loader-spinner'
import s from '../../styles/common.module.scss'
import { useAuth } from "../auth/AuthContext";
import LoadingModal from "./LoadingModal"

const Loading = ({ children }) => {
    const router = useRouter()
    const [pageLoading, setPageLoading] = React.useState(false)

    React.useEffect(() => {
        const handleStart = (url) => url !== router.asPath && setPageLoading(true)
        const handleComplete = () => setPageLoading(false)

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })

    return (
        <div className={s.body}>
            {children}
            <LoadingModal isLoading={pageLoading} />
        </div>
    );
};

export default Loading;