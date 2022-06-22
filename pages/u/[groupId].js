import React, { useState } from 'react'
import Head from 'next/head'
import Holidays from 'date-holidays'

import { useRouter } from "next/router";
import { useDispatch } from 'react-redux'

import Layout from "../../components/common/Layout";
import AutherProfile from '../../components/calendar/AutherProfile'
import CustomFullCalendar from '../../components/calendar/CustomFullCalendar'
import TileContent from '../../components/calendar/TileContent.js'

import Fab from '../../components/common/Fab'
import NewEventModal from '../../components/event/NewEventModal'
import ScheduleDetailModal from '../../components/schedule/ScheduleDetailModal'

import API from "../../api";
import A from "../../actions";
import U from "../../utile";

export const getServerSideProps = async (ctx) => {
    return U.verifyAuthState({ ctx });
};

const holiday = new Holidays('JP', 'la', 'no');

const isHoliday = ({
    date
}) => {
    return holiday.isHoliday(date);
}

const CalendarScreen = props => {
    const {
        isSignOut = false,
        group = {},
        profile = {}
    } = props;

    const today = new Date();

    const router = useRouter()
    const dispatch = useDispatch();

    const [params, setParams] = React.useState()

    const [isInitialized, setIsInitialized] = React.useState(false)
    const [isActiveEventModal, setIsActiveEventModal] = React.useState(false)
    const [isActiveScheduleDetailModal, setIsActiveScheduleDetailModal] = React.useState(false)

    const currentCalendarId = U.getCalendarId({ date: today });
    const baseList = [currentCalendarId];

    const { groupId = "" } = router.query;

    const _handleEventModal = () => {
        if (isActiveEventModal) {
            setIsActiveEventModal(false)
        } else {
            setIsActiveEventModal(true)
        }
    }

    const _handleScheduleModal = ({
        data
    }) => {
        if (isActiveScheduleDetailModal) {
            setIsActiveScheduleDetailModal(false)
        } else {
            const {
                label = "",
                scheduleId = ""
            } = data;

            setParams({
                label,
                scheduleId
            })
            setIsActiveScheduleDetailModal(true)
        }
    }

    const _getTileClass = ({ date, view }) => {
        if (view !== 'month') return '';
        return isHoliday({ date }) ? 'holiday' : '';
    }
    const _getTileContent = ({ date, view }) => {
        if (view !== 'month') {
            return null;
        }

        return (
            <TileContent
                groupId={groupId}
                today={today}
                onClickTileContent={_handleScheduleModal}
                date={date}
                view={view}
            />
        )
    }
    const _onActiveStartDateChange = async data => {
        const { activeStartDate } = data;
        const calendarId = await U.getCalendarId({ date: activeStartDate });
        const isUpdate = await baseList.includes(calendarId);

        if (isUpdate) {
            API.getMonthScheduleDispatchs({ dispatch, groupId, calendarId });
            baseList.push(calendarId);
        }
    }

    React.useLayoutEffect(() => {
        const asyncFunc = async () => {
            const _calendarData = await API.getCurrentMonthScheduleDispatchs({ dispatch, groupId });
            setIsInitialized(true);
        }

        if (!isInitialized) {
            asyncFunc()
        };
    }, [])

    return (
        <Layout
            page={"/calendar"}
            isSignOut={isSignOut}
            group={group}
            profile={profile}
        >
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AutherProfile groupId={groupId} />
            <CustomFullCalendar today={today} groupId={groupId} getTileClass={_getTileClass} getTileContent={_getTileContent} onActiveStartDateChange={_onActiveStartDateChange} />
            {!isSignOut ? <Fab onClick={_handleEventModal} /> : null}
            <NewEventModal groupId={groupId} isActive={isActiveEventModal} onCloseModal={_handleEventModal} />
            <ScheduleDetailModal params={params} groupId={groupId} isActive={isActiveScheduleDetailModal} onCloseModal={_handleScheduleModal} />
        </Layout>
    )
}

export default CalendarScreen