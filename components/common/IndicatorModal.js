import React from 'react'
import { StageSpinner } from "react-spinners-kit";
import s from '../../styles/common.module.scss'

const IndicatorModal = ({
    isLoading = false
}) => {
    return React.useMemo(() => {
        if (isLoading) {
            return (
                <div className={s.indicator_modal}>
                    <div className={s.indicator_modal_spinner}>
                        <StageSpinner size={60} color={"#ffffff"} loading={isLoading} />;
                    </div>
                </div>
            )
        }
        return <div></div>
    }, [isLoading])
}

export default IndicatorModal;