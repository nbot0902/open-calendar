import React, { useEffect, useState } from 'react';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import InputRow from "../form/InputRow";
import TextareaRow from "../form/TextareaRow";
import DatePickerRow from "../form/DatePickerRow";
import form from '../../styles/form.module.scss';

import API from "../../api";

const NewEventForm = () => {
    const today = new Date();
    const initialData = setHours(setMinutes(today, 30), 12);
    const [startAt, setStartAt] = useState(initialData);

    const _handleSubmit = (event) => {
        event.preventDefault()

        const title = event.target.title.value;
        const description = event.target.description.value;

        const data = {
            title,
            description,
            startAt
        };

        return API.postEvent({ data });
    }

    useEffect(() => { })

    return (
        <div className={form.form_new_event}>
            <div className={form.form_new_event_content}>
                <form onSubmit={_handleSubmit}>
                    <InputRow labelName={"イベントのタイトル"} placeholder={"タイトルを入力してください"} uniqueId={"title"} type={"text"} />
                    <DatePickerRow labelName={"時間帯"} date={startAt} setDate={setStartAt} />
                    <TextareaRow labelName={"イベントの詳細"} placeholder={"イベントの詳細を入力してください"} uniqueId={"description"} type={"text"} />
                    <button className={form.button_on_submit} type="submit">追加する</button>
                </form>
            </div>
        </div>
    )
}
export default NewEventForm;