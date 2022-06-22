import React from 'react'
import { StageSpinner } from "react-spinners-kit";
import s from '../../styles/common.module.scss'

const LoadingModal = ({
    isLoading = false
}) => {
    return React.useMemo(() => {
        if (isLoading) {
            return (
                <div className={s.loading_modal}>
                    <div className={s.loading_modal_spinner}>
                        <StageSpinner size={60} color={"#51B8D5"} loading={isLoading} />;
                    </div>
                </div>
            )
        }
        return <div></div>
    }, [isLoading])
}

export default LoadingModal;