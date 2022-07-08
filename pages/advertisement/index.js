import React, { useState } from 'react'
import CustomHead from '../../components/common/CustomHead'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'

import Layout from "../../components/common/Layout"
import IndicatorModal from "../../components/common/IndicatorModal"
import EditAdvertisementForm from '../../components/form/EditAdvertisementForm'

import PageHead from '../../components/common/PageHead'
import profileStyle from '../../styles/profile.module.scss'
import form from '../../styles/form.module.scss'
import API from "../../api";
import A from "../../actions";
import U from "../../utile";
import C from "../../constants";

export const getServerSideProps = async (ctx) => {
    return U.verifyAuthState({ ctx });
};

const AdvertisementScreen = props => {
    const {
        isSignOut = false,
        group = {},
        profile = {},
        userStatus = C.USER_STATE.NOT_SET
    } = props;

    const dispatch = useDispatch();
    const router = useRouter()
    const [isLoading, setIsLoading] = React.useState(false)

    const { picture = null, name = "", plan = C.GROUP_PLAN.NORMAL, groupId } = group;
    const advertisement = useSelector((state) => state.advertisement);

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
            page={"/advertisement"}
            isSignOut={isSignOut}
            group={group}
            profile={profile}
        >
            <CustomHead
                pageTitle={"イベカレ | バナーの設定"}
                pagePath={"/profile"}
                pageDescription={"イベカレはイベントや交流会の予定をカレンダーで簡単に共有できるWebサイトです。URLを友達に送ったりSNSのプロフィールに貼ることで、自分の活動をみんなに簡単に共有することができます。"}
            />
            <div className={profileStyle.profile}>
                <PageHead title={"バナーの設定"} />
                <EditAdvertisementForm
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    profile={profile}
                    group={group}
                    advertisement={advertisement}
                />
                <IndicatorModal
                    isLoading={isLoading}
                />
            </div>
        </Layout >
    )
}

export default AdvertisementScreen