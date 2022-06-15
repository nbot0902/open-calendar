import React, { useEffect, useState } from 'react';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import InputRow from "./InputRow";
import TextareaRow from "./TextareaRow";
import form from '../../styles/form.module.scss';
import profileStyle from '../../styles/profile.module.scss'
import API from "../../api";

import dummyIcon from '../../public/images/dummy_icon_for_user.png'

const NewProfileForm = ({
    profile = {},
    group = {},
}) => {
    const { picture = null, name = "" } = profile;

    // const imageStyle = {
    //     backgroundImage: picture ? `url('${picture}')` : `url(${dummyIcon.src})`
    // }
    const imageStyle = {
        backgroundImage: `url(${dummyIcon.src})`
    }

    const _handleSubmit = (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const description = event.target.description.value;
        const groupName = event.target.groupName.value;

        const userData = {
            name,
            groupName,
        };

        return Promise.all([
            API.putUser({ data: userData }),
        ])

    }

    useEffect(() => { })

    return (
        <form onSubmit={_handleSubmit}>
            <div className={profileStyle.profile_detail}>
                <div className={profileStyle.profile_thumbnail} style={imageStyle}></div>
                <InputRow defaultValue={name} labelName={"ユーザー名"} placeholder={"ユーザー名を入力してください"} uniqueId={"name"} type={"text"} />
                <button className={form.button_on_submit} type="submit">保存する</button>
            </div>
        </form>
    )
}
export default NewProfileForm;