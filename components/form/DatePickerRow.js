import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import "react-datepicker/dist/react-datepicker.css"
import ja from 'date-fns/locale/ja';
import form from '../../styles/form.module.scss';

const DatePickerRow = ({
    labelName = "ラベル名",
    isDisabled = false,
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
                disabled={isDisabled}
                selected={date}
                onChange={_onChangeHandler}
                timeCaption={"開始"}
                showTimeSelect
                // includeTimes={[
                //     setHours(setMinutes(new Date(), 1), 0),
                //     setHours(setMinutes(new Date(), 5), 12),
                //     setHours(setMinutes(new Date(), 59), 23),
                // ]}
                dateFormat="yyyy年MMMMd日 h時mm分"
            />
            {isDisabled ? <p className={form.input_caption}>{"※日付は変更できません"}</p> : null}
        </div>
    );
};

export default DatePickerRow;