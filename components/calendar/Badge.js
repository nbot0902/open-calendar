import React from 'react'
import s from '../../styles/custom_calendar.module.scss'

const Badge = ({
    hasEvents,
    isToday
}) => {
    const color1 = isToday && hasEvents ? s.is_white : "";
    const color2 = !isToday && hasEvents ? s.is_blue : "";

    return React.useMemo(() => {
        return (
            <div className={`${s.calendar_badge} ${color1} ${color2}`}></div>
        )
    }, [isToday, hasEvents])
}

export default Badge;
