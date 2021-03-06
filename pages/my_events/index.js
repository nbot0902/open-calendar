import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CustomHead from '../../components/common/CustomHead'

import Layout from "../../components/common/Layout";
import PageHead from '../../components/common/PageHead';
import Fab from '../../components/common/Fab';
import IndicatorModal from '../../components/common/IndicatorModal';

import NewEventModal from '../../components/event/NewEventModal';
import EditEventModal from '../../components/event/EditEventModal';
import MyEventList from "../../components/event/MyEventList";

import events from '../../styles/my_events.module.scss';

import A from "../../actions";
import U from "../../utile";
import C from "../../constants";

export const getServerSideProps = async (ctx) => {
    return U.verifyAuthState({ ctx });
};

const MyEventsScreen = props => {
    const {
        isSignOut = false,
        group = {},
        profile = {},
        userStatus = C.USER_STATE.NOT_SET
    } = props;

    const dispatch = useDispatch();

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
            const _data = await A.getMyGroupSchedulesDispatch({ dispatch, groupId });
            setIsInitialized(true);
        }

        asyncFunc()
    }, [])

    return (
        <Layout
            page={"/my_events"}
            isSignOut={isSignOut}
            group={group}
            profile={profile}
        >
            <CustomHead
                pageTitle={"???????????? | ???????????????"}
                pagePath={"/my_events"}
                pageDescription={"?????????????????????????????????????????????????????????????????????????????????????????????Web??????????????????URL????????????????????????SNS?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"}
            />
            <div className={events.my_event}>
                <PageHead
                    title={"??????????????????"}
                />
                <MyEventList
                    onOpenEditModal={_handleEditModal}
                    groupId={groupId}
                />
            </div>
            <Fab
                onClick={_handleNewModal}
            />
            <IndicatorModal
                isLoading={isLoading}
            />
            <EditEventModal
                params={params}
                isLoading={isLoading}
                groupId={group.groupId}
                isActive={isOpenEditModal}
                setIsLoading={setIsLoading}
                onCloseModal={_handleEditModal}
            />
            <NewEventModal
                isActive={isOpenNewModal}
                isLoading={isLoading}
                groupId={group.groupId}
                setIsLoading={setIsLoading}
                onCloseModal={_handleNewModal}
            />
        </Layout >
    )
}

export default MyEventsScreen