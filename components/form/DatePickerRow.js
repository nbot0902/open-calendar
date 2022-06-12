import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import "react-datepicker/dist/react-datepicker.css"
import ja from 'date-fns/locale/ja';
import form from '../../styles/form.module.scss';

const DatePickerRow = ({
    labelName = "ラベル名",
    date,
    setDate = () => { },
}) => {
    registerLocale("ja", ja);

    const _onChangeHandler = (date) => {
        setDate(date);
    }

    return (
        <div className={form.form_row}>
            <label className={form.label}>{labelName}</label>
            <DatePicker
                className={form.datepicker}
                locale={'ja'}
                selected={date}
                onChange={_onChangeHandler}
                timeCaption={"時間帯"}
                showTimeSelect
                // includeTimes={[
                //     setHours(setMinutes(new Date(), 1), 0),
                //     setHours(setMinutes(new Date(), 5), 12),
                //     setHours(setMinutes(new Date(), 59), 23),
                // ]}
                dateFormat="yyyy年MMMMd日 h時mm分"
            />
        </div>
    );
};

export default DatePickerRow;