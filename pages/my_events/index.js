import React, { useState } from 'react'
import Head from 'next/head'

import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'

import Layout from "../../components/common/Layout";
import PageHead from '../../components/common/PageHead';
import Fab from '../../components/common/Fab';
import IndicatorModal from '../../components/common/IndicatorModal';

import NewEventModal from '../../components/event/NewEventModal';
import EditEventModal from '../../components/event/EditEventModal';
import MyEventList from "../../components/event/MyEventList";

import events from '../../styles/my_events.module.scss';

import API from "../../api";
import U from "../../utile";

export const getServerSideProps = async (ctx) => {
    return U.verifyAuthState({ ctx });
};

const MyEventsScreen = props => {
    const {
        isSignOut = false,
        group = {},
        profile = {}
    } = props;

    const dispatch = useDispatch()
    const router = useRouter()

    const [isOpenNewModal, setIsOpenNewModal] = React.useState(false)
    const [isOpenEditModal, setIsOpenEditModal] = React.useState(false)

    const [params, setParams] = React.useState(false)

    const [isLoading, setIsLoading] = React.useState(false)
    const [isInitialized, setIsInitialized] = React.useState(false)

    const { groupId = "" } = group;

    const _handleNewModal = () => {
        if (isOpenNewModal) {
            setIsOpenNewModal(false)
        } else {
            setIsOpenNewModal(true)
        }
    }
    const _handleEditModal = ({
        data = null
    }) => {
        if (isOpenEditModal) {
            setIsOpenEditModal(false)
        } else {
            if (data) {
                setParams(data)
            }
            setIsOpenEditModal(true)
        }
    }

    React.useLayoutEffect(() => {
        const asyncFunc = async () => {
            const _calendarData = await API.getCurrentMonthScheduleDispatchs({ dispatch, groupId });
            setIsInitialized(true);
        }

        if (!isInitialized) {
            asyncFunc()
        }
    }, [])

    return (
        <Layout
            page={"/my_events"}
            isSignOut={isSignOut}
            group={group}
            profile={profile}
        >
            <Head>
                <title>Open</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={events.my_event}>
                <PageHead title={"登録した予定"} />
                <MyEventList onOpenEditModal={_handleEditModal} groupId={groupId} />
            </div>
            <Fab onClick={_handleNewModal} />
            <IndicatorModal isLoading={isLoading} />
            <EditEventModal params={params} groupId={group.groupId} onCloseModal={_handleEditModal} isActive={isOpenEditModal} />
            <NewEventModal groupId={group.groupId} onCloseModal={_handleNewModal} isActive={isOpenNewModal} />
        </Layout >
    )
}

export default MyEventsScreen