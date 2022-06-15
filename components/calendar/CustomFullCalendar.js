import React from 'react'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'

import Calendar from 'react-calendar';
import API from '../../api'
import U from '../../utile'
import s from '../../styles/custom_calendar.module.scss'

const CustomFullCalendar = ({
    today,
    getTileClass,
    getTileContent,
    onActiveStartDateChange
}) => {
    return React.useMemo(() => {
        return (
            <Calendar
                value={today}
                locale={"ja-JP"}
                onActiveStartDateChange={onActiveStartDateChange}
                tileClassName={getTileClass}
                tileContent={getTileContent}
            />
        )
    }, [])
}

export default CustomFullCalendar;

