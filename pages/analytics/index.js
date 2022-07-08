import React, { useState } from 'react'
import CustomHead from '../../components/common/CustomHead'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'

import Layout from "../../components/common/Layout"
import BottomBannerOfClickCount from "../../components/analytics/BottomBannerOfClickCount"

import PageHead from '../../components/common/PageHead'
import profileStyle from '../../styles/profile.module.scss'

import API from "../../api";
import A from "../../actions";
import U from "../../utile";
import C from "../../constants";

export const getServerSideProps = async (ctx) => {
    return U.verifyAuthState({ ctx });
};

const AnalyticsScreen = props => {
    const {
        isSignOut = false,
        group = {},
        profile = {},
        userStatus = C.USER_STATE.NOT_SET
    } = props;

    const {
        picture = null,
        name = "",
        plan = C.GROUP_PLAN.NORMAL,
        groupId
    } = group;

    const dispatch = useDispatch();
    const router = useRouter()

    React.useLayoutEffect(() => {
        if (plan == C.GROUP_PLAN.NORMAL) {
            API.logout();
            router.replace("/");
        } else {
            A.getAdvertisementDispatch({ dispatch, groupId })
        }
    }, [])

    return (
        <Layout
            page={"/analytics"}
            isSignOut={isSignOut}
            group={group}
            profile={profile}
        >
            <CustomHead
                pageTitle={"イベカレ | アナリティクス"}
                pagePath={"/profile"}
                pageDescription={"イベカレはイベントや交流会の予定をカレンダーで簡単に共有できるWebサイトです。URLを友達に送ったりSNSのプロフィールに貼ることで、自分の活動をみんなに簡単に共有することができます。"}
            />
            <div className={profileStyle.profile}>
                <PageHead title={"アナリティクス"} />
                <BottomBannerOfClickCount />
            </div>
        </Layout >
    )
}

export default AnalyticsScreen