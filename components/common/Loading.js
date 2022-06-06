import React from 'react'
import { Grid } from 'react-loader-spinner'
import s from '../../styles/common.module.scss'
import { useAuth } from "../auth/AuthContext";

const LoadingModal = () => {
    const { isLoading = true } = useAuth()

    return React.useMemo(() => {
        if (isLoading) {
            return (
                <div className={s.loading_modal}>
                    <div className={s.loading_modal_spinner}>
                        <Grid color={"#1e41af"} height={48} width={48} />
                    </div>
                </div>
            )
        }
        return <div></div>
    }, [isLoading])
}

const Loading = ({ children }) => {
    return (
        <div className={s.body}>
            {children}
            <LoadingModal />
        </div>
    );
};

export default Loading;