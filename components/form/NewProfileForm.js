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
    const { picture = null } = profile;

    const name = profile.name ?? "";
    const groupName = group.name ?? "";

    const imageStyle = {
        backgroundImage: picture ? `url('${picture}')` : `url(${dummyIcon.src})`
    }

    const _handleSubmit = (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const description = event.target.description.value;
        const uniqueId = event.target.uniqueId.value;

        const userData = {
            name,
            description,
            uniqueId,
        };
        const groupData = {
            name: uniqueId,
            uniqueId,
        };

        console.log("group.groupId", group.groupId)

        return Promise.all([
            API.putUser({ data: userData }),
            API.putGroup({ data: groupData, groupId: group.groupId }),
        ])

    }

    useEffect(() => { })

    return (
        <form onSubmit={_handleSubmit}>
            <div className={profileStyle.profile_detail}>
                <div className={profileStyle.profile_thumbnail} style={imageStyle}></div>
                <InputRow defaultValue={name} labelName={"名前"} placeholder={"名前を入力してください"} uniqueId={"name"} type={"text"} />
                <InputRow defaultValue={groupName} labelName={"ユニークID"} placeholder={"ユニークIDを入力してください"} uniqueId={"uniqueId"} caption={"※公開するカレンダーのURLの末尾になります"} type={"text"} />
                <TextareaRow labelName={"紹介文"} placeholder={"紹介文を入力してください"} uniqueId={"description"} type={"text"} />
                <button className={form.button_on_submit} type="submit">保存する</button>
            </div>
        </form>
    )
}
export default NewProfileForm;