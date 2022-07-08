import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux'

import A from '../../actions';
import U from '../../utile';
import C from '../../constants';
import s from '../../styles/advertisement.module.scss';

const BottomBanner = ({
    groupId = "",
}) => {
    const dispatch = useDispatch();
    const advertisement = useSelector((state) => state.advertisement);

    const {
        hash = {},
    } = advertisement;

    const data = hash[groupId] ? hash[groupId] : "";

    const {
        bottomBannerImage = "",
        bottomBannerUrl = "",
        bottomBannerStatus = C.AD_STATE.INACTIVE
    } = data;

    const imageStyle = {
        backgroundImage: bottomBannerImage ?
            `url('${bottomBannerImage}')` : `url("")`
    }

    return React.useMemo(() => {
        if (!bottomBannerImage || bottomBannerStatus == C.AD_STATE.INACTIVE) {
            return <div></div>
        }

        return (
            <React.Fragment>
                <div className={s.ad_bottom_banner}>
                    <Link href={bottomBannerUrl} target={"_blank"}>
                        <div className={s.ad_bottom_banner_img} style={imageStyle}></div>
                    </Link>
                </div>
            </React.Fragment>
        );
    }, [bottomBannerImage])
};

export default BottomBanner;