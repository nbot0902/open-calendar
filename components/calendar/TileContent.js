import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import Badge from './Badge.js'
import U from '../../utile'
import s from '../../styles/custom_calendar.module.scss'

const TileContent = ({
    date,
    view,
    today = new Date(),
    groupId = "",
    onClickTileContent = () => { }
}) => {
    const calendarId = U.getCalendarId({ date: date });
    const { hash = {}, isLoading = false } = useSelector((state) => state.calendar)
    const calendarHash = hash[groupId] ? hash[groupId]["hash"] : {};

    const _checker = (someDate) => {
        const _isToday = someDate.getDate() == today.getDate() &&
            someDate.getMonth() == today.getMonth() &&
            someDate.getFullYear() == today.getFullYear();

        const _isOtherMonth = someDate.getMonth() != today.getMonth();

        return {
            isToday: _isToday,
            isOtherMonth: _isOtherMonth
        }
    }

    const {
        isToday,
        isOtherMonth
    } = _checker(date)

    const year = moment(date).format('YYYY')
    const month = moment(date).format('MM')
    const day = moment(date).format('DD')

    const targetDate = `${year}-${month}-${day}`
    const label = `${Number(year)}年${Number(month)}月${Number(day)}日`
    const content = calendarHash[targetDate] ? calendarHash[targetDate] : null;
    const events = content ? content.list : [];

    const _formatDate = (date) => {
        return date.getDate();
    };

    const _onClickTileContent = () => {
        onClickTileContent({ label })
    }

    return React.useMemo(() => {
        return (
            <div onClick={_onClickTileContent} className={`${s.calendar_content} ${isToday ? s.is_today : ""}`}>
                <p className={`${s.calendar_day_text} ${isToday ? s.is_today : ""}`}>
                    {`${_formatDate(date)}`}
                </p>
                <Badge isToday={isToday} hasEvents={events.length > 0} />
            </div>
        );
    }, [events.length])
}

export default TileContent;
