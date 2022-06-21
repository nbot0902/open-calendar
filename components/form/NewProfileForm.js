import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import InputRow from "./InputRow";
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

    const _successCallback = () => {
        return toast.success('ユーザー情報が保存されました')
    }
    const _failedCallback = () => {
        return toast.error('ユーザー情報が保存に失敗しました')
    }

    const _handleSubmit = (event) => {
        event.preventDefault()

        const name = event.target.name.value;

        const userData = {
            name,
        };

        return Promise.all([
            API.putUser({ data: userData }),
        ]).then(() => {
            _successCallback();
        }).catch(() => {
            _failedCallback();
        })

    }

    useEffect(() => { })

    return (
        <form onSubmit={_handleSubmit}>
            <div className={profileStyle.profile_detail}>
                {true ? <div className={profileStyle.profile_thumbnail} style={imageStyle}></div> : null}
                <InputRow defaultValue={name} labelName={"ユーザー名"} placeholder={"ユーザー名を入力してください"} uniqueId={"name"} type={"text"} />
                <button className={form.button_on_submit} type="submit">保存する</button>
            </div>
        </form>
    )
}
export default NewProfileForm;