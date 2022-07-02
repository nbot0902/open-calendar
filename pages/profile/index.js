import React, { useState } from 'react'
import CustomHead from '../../components/common/CustomHead'
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";

import Layout from "../../components/common/Layout"
import IndicatorModal from "../../components/common/IndicatorModal"
import NewProfileForm from '../../components/form/NewProfileForm'

import PageHead from '../../components/common/PageHead'
import profileStyle from '../../styles/profile.module.scss'
import form from '../../styles/form.module.scss'
import API from "../../api";
import U from "../../utile";
import C from "../../constants";

export const getServerSideProps = async (ctx) => {
    return U.verifyAuthState({ ctx });
};

const ProfileScreen = props => {
    const router = useRouter()
    const [isLoading, setIsLoading] = React.useState(false)

    const {
        isSignOut = false,
        group = {},
        profile = {},
        userStatus = C.USER_STATE.NOT_SET
    } = props;

    return (
        <Layout
            page={"/profile"}
            isSignOut={isSignOut}
            group={group}
            profile={profile}
        >
            <CustomHead
                pageTitle={"イベコレ | ユーザーの設定"}
                pagePath={"/profile"}
                pageDescription={"イベコレはイベントや交流会の予定をカレンダーで簡単に共有できるWebサイトです。URLを友達に送ったりSNSのプロフィールに貼ることで、自分の活動をみんなに簡単に共有することができます。"}
            />
            <div className={profileStyle.profile}>
                <PageHead title={"ユーザーの設定"} />
                <NewProfileForm
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    profile={profile}
                    group={group}
                />
                <IndicatorModal
                    isLoading={isLoading}
                />
            </div>
        </Layout >
    )
}

export default ProfileScreen