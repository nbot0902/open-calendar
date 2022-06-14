import React from 'react'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'

import Calendar from 'react-calendar';
import Holidays from 'date-holidays'
import TileContent from './TileContent.js'
import API from '../../api'
import U from '../../utile'
import s from '../../styles/custom_calendar.module.scss'

const isHoliday = ({
    date
}) => {
    const holiday = new Holidays('JP', 'la', 'no');
    return holiday.isHoliday(new Date(date));
}

const CustomFullCalendar = ({
    groupId = "",
    onClickTileContent = () => null,
}) => {
    const today = new Date();
    const dispatch = useDispatch()

    const getTileClass = ({ date, view }) => {
        if (view !== 'month') return '';
        return isHoliday({ date }) ? 'holiday' : '';
    }
    const getTileContent = ({ date, view }) => {
        if (view !== 'month') return null;
        return <TileContent groupId={groupId} today={today} onClickTileContent={onClickTileContent} date={date} view={view} />
    }
    const _onActiveStartDateChange = data => {
        const { activeStartDate } = data;
        const calendarId = U.getCalendarId({ date: activeStartDate });
        return API.getMonthScheduleDispatchs({ dispatch, groupId, calendarId });
    }

    return React.useMemo(() => {
        return (
            <Calendar
                value={today}
                locale={"ja-JP"}
                onActiveStartDateChange={_onActiveStartDateChange}
                tileClassName={getTileClass}
                tileContent={getTileContent}
            />
        )
    }, [])
}

export default CustomFullCalendar;

