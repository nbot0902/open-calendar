import s from '../../styles/custom_calendar.module.scss'

const Badge = ({
    hasEvents,
    isToday
}) => {
    return (
        <div className={`${s.calendar_badge} ${isToday ? s.is_today : ""} ${hasEvents ? s.has_events : ""}`}></div>
    )
}

export default Badge;
