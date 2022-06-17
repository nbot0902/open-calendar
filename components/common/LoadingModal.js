import React from 'react'
import { useRouter } from "next/router"
import { MutatingDots } from 'react-loader-spinner'
import s from '../../styles/common.module.scss'

const LoadingModal = ({
    isLoading = false
}) => {
    return React.useMemo(() => {
        if (isLoading) {
            return (
                <div className={s.loading_modal}>
                    <div className={s.loading_modal_spinner}>
                        <MutatingDots color="#3c8cff" height={100} width={100} />
                    </div>
                </div>
            )
        }
        return <div></div>
    }, [isLoading])
}

export default LoadingModal;