import React from 'react'
import { useRouter } from "next/router"
import { Grid } from 'react-loader-spinner'
import s from '../../styles/common.module.scss'

const IndicatorModal = ({
    isLoading = false
}) => {
    return React.useMemo(() => {
        if (isLoading) {
            return (
                <div className={s.indicator_modal}>
                    <div className={s.indicator_modal_spinner}>
                        <Grid color={"#ffffff"} height={48} width={48} />
                    </div>
                </div>
            )
        }
        return <div></div>
    }, [isLoading])
}

export default IndicatorModal;