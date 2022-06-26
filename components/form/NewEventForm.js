import React, { useEffect, useState } from 'react';

import InputRow from "../form/InputRow";
import TextareaRow from "../form/TextareaRow";
import DatePickerRow from "../form/DatePickerRow";
import form from '../../styles/form.module.scss';

import API from "../../api";

const NewEventForm = ({
    params = {},
    date,
    handleSubmit = () => { },
    setDate = () => { },
}) => {
    const isDisabled = Object.keys(params).length > 0;

    const {
        title = "",
        description = "",
    } = params;

    return React.useMemo(() => {
        return (
            <div className={form.form_new_event}>
                <div className={form.form_new_event_content}>
                    <form>
                        <InputRow
                            defaultValue={title}
                            labelName={"予定のタイトル"}
                            placeholder={"タイトルを入力してください"}
                            uniqueId={"title"}
                            type={"text"}
                        />
                        <DatePickerRow
                            isDisabled={isDisabled}
                            labelName={"開始"}
                            date={date}
                            setDate={setDate}
                        />
                        <TextareaRow
                            defaultValue={description}
                            labelName={"予定の詳細"}
                            placeholder={"イベントの詳細を入力してください"}
                            uniqueId={"description"}
                            type={"text"}
                        />
                        <button
                            onClick={handleSubmit}
                            className={form.button_on_submit}
                        >
                            保存する
                        </button>
                    </form>
                </div>
            </div>
        )
    }, [date, params, isDisabled])
}
export default NewEventForm;