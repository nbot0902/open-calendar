import React from 'react'
import moment from 'moment'
import Calendar from 'react-calendar';
import Holidays from 'date-holidays'
import Badge from './Badge.js'
import s from '../../styles/custom_calendar.module.scss'

const isHoliday = ({
    date
}) => {
    const holiday = new Holidays('JP', 'la', 'no');
    return holiday.isHoliday(new Date(date));
}

const CustomFullCalendar = ({
    onClickDay = () => null,
}) => {
    const today = new Date()
    const [date, onChangeDate] = React.useState(today);

    const checker = (someDate) => {
        const isToday = someDate.getDate() == today.getDate() &&
            someDate.getMonth() == today.getMonth() &&
            someDate.getFullYear() == today.getFullYear();

        const isOtherMonth = someDate.getMonth() != today.getMonth();

        return { isToday, isOtherMonth }
    }

    const monthItem = {
        "2022-06-01": { events: [{ text: 'work' }, { text: 'work' }] },
        "2022-06-10": { events: [{ text: 'work' }, { text: 'work' }] },
        "2022-06-24": { events: [{ text: 'work' }, { text: 'work' }] },
        "2022-06-25": { events: [{ text: 'work' }, { text: 'work' }] },
    }

    const getTileClass = ({ date, view }) => {
        if (view !== 'month') {
            return '';
        }

        return isHoliday({ date }) ? 'holiday' : '';
    }

    function formatDate(date) {
        return date.getDate();
    };

    const getTileContent = ({ date, view }) => {
        if (view !== 'month') {
            return null;
        }

        const { isToday, isOtherMonth } = checker(date)
        const targetDate = moment(date).format('YYYY-MM-DD')
        const content = monthItem[targetDate] ?? null;

        return (
            <div onClick={onClickDay} className={`${s.calendar_content} ${isToday ? s.is_today : ""}`}>
                <p className={`${s.calendar_day_text} ${isToday ? s.is_today : ""}`}>
                    {`${formatDate(date)}`}
                </p>
                <Badge isToday={isToday} hasEvents={content} />
            </div>
        );
    }

    return (
        <Calendar
            value={date}
            locale={"ja-JP"}
            tileClassName={getTileClass}
            tileContent={getTileContent}
        />
    )
}

export default CustomFullCalendar;

