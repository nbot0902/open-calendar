import React from 'react'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux'
import { FiPlus } from "react-icons/fi";

import common from '../../styles/common.module.scss'

const Fab = ({
    onClick = () => { }
}) => {
    return React.useMemo(() => {
        return (
            <div onClick={onClick} className={common.fab}>
                <div className={common.fab_inner}>
                    <div className={common.fab_icon}>
                        <FiPlus color={"#ffffff"} size={24} />
                    </div>
                </div>
            </div>
        );
    }, [onClick])
};

export default Fab;