import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from "next/router";
import Layout from "../../components/common/Layout"
import InputRow from '../../components/form/InputRow'
import TextareaRow from '../../components/form/TextareaRow'
import NewProfileForm from '../../components/form/NewProfileForm'

import PageHead from '../../components/common/PageHead'
import profileStyle from '../../styles/profile.module.scss'
import form from '../../styles/form.module.scss'
import API from "../../api";
import U from "../../utile";

export const getServerSideProps = async (ctx) => {
    return U.verifyAuthState({ ctx });
};

const ProfileScreen = props => {
    const router = useRouter()

    const {
        isSignOut = false,
        group = {},
        profile = {}
    } = props;

    return (
        <Layout
            page={"/profile"}
            isSignOut={isSignOut}
            group={group}
            profile={profile}
        >
            <Head>
                <title>イベコレ | ユーザーの設定</title>
                <meta name="description" content="イベコレはイベントや交流会の予定をカレンダーで簡単に共有できるWebサイトです。URLを友達に送ったりSNSのプロフィールに貼ることで、自分の活動をみんなに簡単に共有することができます。" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={profileStyle.profile}>
                <PageHead title={"ユーザーの設定"} />
                <NewProfileForm profile={profile} group={group} />
            </div>
        </Layout >
    )
}

export default ProfileScreen