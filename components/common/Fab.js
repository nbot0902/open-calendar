import React from 'react';
import { useSelector } from 'react-redux';
import { FiPlus } from "react-icons/fi";
import common from '../../styles/common.module.scss';
import C from '../../constants';

const Fab = ({
    groupId = "",
    onClick = () => { }
}) => {
    const innerWidth = window.innerWidth < 480 ? window.innerWidth : 480;
    const advertisement = useSelector((state) => state.advertisement);
    const bannerHeight = innerWidth * 0.2;

    const {
        hash = {},
    } = advertisement;

    const data = hash[groupId] ? hash[groupId] : {};
    const { bottomBannerImage = "", bottomBannerStatus } = data
    const isActive = bottomBannerImage && bottomBannerStatus !== C.AD_STATE.INACTIVE

    const _style = {
        "bottom": isActive ? `${bannerHeight + 12}px` : "12px"
    }

    return React.useMemo(() => {
        return (
            <div onClick={onClick} className={common.fab} style={_style}>
                <div className={common.fab_inner}>
                    <div className={common.fab_icon}>
                        <FiPlus color={"#ffffff"} size={24} />
                    </div>
                </div>
            </div>
        );
    }, [onClick, isActive])
};

export default Fab;