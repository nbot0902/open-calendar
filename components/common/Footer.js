import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import C from '../../constants'
import s from '../../styles/footer.module.scss'
import ad from '../../styles/advertisement.module.scss'

const Footer = ({
    group = {}
}) => {
    const { groupId = "" } = group;
    const advertisement = useSelector((state) => state.advertisement);

    const {
        hash = {},
    } = advertisement;

    const data = hash[groupId] ? hash[groupId] : {};
    const { bottomBannerImage = "", bottomBannerStatus } = data;
    const isActive = bottomBannerImage && bottomBannerStatus == C.AD_STATE.INACTIVE;

    return React.useMemo(() => {
        return (
            <React.Fragment>
                <footer className={s.footer}>
                    <p className={s.footer_copyright_text}>&#0169; 2022 {C.SERVICE_NAME}</p>
                </footer>
                {isActive ? <div className={ad.ad_bottom_banner_emprty}></div> : null}
            </React.Fragment>
        )
    }, [isActive])
}

export default Footer;
