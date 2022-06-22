import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import Badge from './Badge.js'
import U from '../../utile'
import s from '../../styles/custom_calendar.module.scss'

const TileContent = props => {
    const {
        date,
        view,
        today = new Date(),
        groupId = "",
        onClickTileContent = () => { }
    } = props;

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

    const d = React.useMemo(() => {
        const year = moment(date).format('YYYY')
        const month = moment(date).format('MM')
        const day = moment(date).format('DD')

        return {
            year,
            month,
            day
        }
    }, [date])

    const targetDate = `${d.year}-${d.month}-${d.day}`;
    const label = `${Number(d.year)}年${Number(d.month)}月${Number(d.day)}日`;
    const content = calendarHash[targetDate] ? calendarHash[targetDate] : null;

    return React.useMemo(() => {

        const events = content ? content.list : [];
        const hasEvents = events.length > 0

        const {
            isToday,
            isOtherMonth
        } = _checker(date)

        const _formatDate = (date) => {
            return date.getDate();
        };

        const _onClickTileContent = () => {
            if (!hasEvents || isOtherMonth) {
                return null;
            }

            const scheduleId = U.getScheduleId({ date })
            const _data = { label, scheduleId };
            return onClickTileContent({ data: _data })
        }

        return (
            <div onClick={_onClickTileContent} className={`${s.calendar_content} ${isToday ? s.is_today : hasEvents ? s.has_events : ""}`}>
                <p className={`${s.calendar_day_text} ${isToday ? s.is_today : ""}`}>
                    {`${_formatDate(date)}`}
                </p>
                <Badge isToday={isToday} hasEvents={hasEvents} />
            </div>
        );
    }, [content])
}

export default TileContent;
