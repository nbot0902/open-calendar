import React from 'react'
import 'fullcalendar/main.css';
import Holidays from 'date-holidays'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import jaLocale from '@fullcalendar/core/locales/ja';

const isHoliday = ({
    createdAt
}) => {
    const hd = new Holidays('JP', 'la', 'no');

    return hd.isHoliday(new Date(createdAt));
}

const CustomFullCalendar = () => {
    return <FullCalendar
        plugins={[dayGridPlugin]}
        locale={jaLocale}
        weekends={true}
        selectable={true}
        navLinks={true}
        businessHours={true}
        editable={true}
        initialView={"dayGridMonth"}
        initialEvents={[{ title: 'initial event', start: new Date() }]}
        events={[
            { title: 'event 1', date: '2022-05-31' },
            { title: 'event 1', date: '2022-05-31' },
        ]}
    />
}

export default CustomFullCalendar;
