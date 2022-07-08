import React, { useState } from 'react'
import CustomHead from '../../components/common/CustomHead'
import { useRouter } from "next/router";
import toast from 'react-hot-toast';

import Layout from "../../components/common/Layout"
import IndicatorModal from '../../components/common/IndicatorModal'
import NewGroupForm from '../../components/form/NewGroupForm'

import PageHead from '../../components/common/PageHead'
import profileStyle from '../../styles/profile.module.scss'
import API from "../../api";
import U from "../../utile";
import C from "../../constants";

export const getServerSideProps = async (ctx) => {
    return U.verifyAuthState({ ctx });
};

const CalendarSettingScreen = props => {
    const router = useRouter()
    const [isLoading, setIsLoading] = React.useState(false)

    const {
        isSignOut = false,
        group = {},
        profile = {},
        userStatus = C.USER_STATE.NOT_SET
    } = props;

    React.useLayoutEffect(() => {
        if (userStatus !== C.USER_STATE.ACTIVE) {
            API.logout();
            router.replace("/");
            toast.error('このユーザーは退会しています')
        }
    }, [])

    return (
        <Layout
            page={"/calendar_setting"}
            isSignOut={isSignOut}
            group={group}
            profile={profile}
        >
            <CustomHead
                pageTitle={"イベカレ | カレンダー情報"}
                pagePath={"/calendar_setting"}
                pageDescription={"イベカレはイベントや交流会の予定をカレンダーで簡単に共有できるWebサイトです。URLを友達に送ったりSNSのプロフィールに貼ることで、自分の活動をみんなに簡単に共有することができます。"}
            />
            <div className={profileStyle.profile}>
                <PageHead title={"カレンダー情報"} />
                <NewGroupForm isLoading={isLoading} setIsLoading={setIsLoading} profile={profile} group={group} />
            </div>
            <IndicatorModal isLoading={isLoading} />
        </Layout >
    )
}

export default CalendarSettingScreen