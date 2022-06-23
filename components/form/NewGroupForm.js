import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast';
import { FiCamera } from "react-icons/fi";

import InputRow from "./InputRow";
import TextareaRow from "./TextareaRow";
import form from '../../styles/form.module.scss';
import profileStyle from '../../styles/profile.module.scss'
import A from "../../actions";
import API from "../../api";

import dummyIcon from '../../public/images/dummy_icon_for_group.png'

const NewGroupForm = ({
    group = {},
}) => {
    const dispatch = useDispatch();

    const [newPicture, setNewPicture] = React.useState();
    const { picture = null, groupName = "", description = "" } = group;

    const _getBlobUrl = (_newPicture) => {
        return window.URL.createObjectURL(_newPicture)
    }

    const imageStyle = {
        backgroundImage: newPicture ? `url(${_getBlobUrl(newPicture)})` : picture ? `url('${picture}')` : `url(${dummyIcon.src})`
    }

    const _handleSubmit = (event) => {
        event.preventDefault()

        const description = event.target.description.value;
        const groupName = event.target.groupName.value;

        const _data = {
            groupName,
            description,
        };

        const _groupId = group.groupId

        const _successCallback = () => {
            return toast.success('ユーザー情報が保存されました')
        }
        const _failedCallback = () => {
            return toast.error('ユーザー情報が保存に失敗しました')
        }

        return A.putGroupDispatch({
            dispatch,
            data: _data,
            groupId: _groupId,
            newPicture
        }).then(() => {
            _successCallback()
        }).catch(() => {
            _failedCallback()
        })
    }

    const _onChangePicture = (e) => {
        setNewPicture(e.target.files[0])
    }

    return (
        <form onSubmit={_handleSubmit}>
            <div className={profileStyle.profile_detail}>

                <label onChange={_onChangePicture} className={profileStyle.profile_thumbnail} style={imageStyle}>
                    <div className={profileStyle.profile_thumbnail_inner}>
                        <div className={profileStyle.picture_icon}>
                            <div className={profileStyle.picture_icon_inner}>
                                <div className={profileStyle.picture_icon_image}>
                                    <FiCamera color={"#3c8cff"} size={16} />
                                </div>
                            </div>
                        </div>
                        <input className={profileStyle.profile_thumbnail_input} type="file" name="photo" id="filesend" multiple accept=".jpg,.gif,.png,image/gif,image/jpeg,image/png" />
                    </div>
                </label>
                <InputRow defaultValue={groupName} labelName={"カレンダーのタイトル"} placeholder={"カレンダーのタイトルを入力してください"} uniqueId={"groupName"} type={"text"} />
                <TextareaRow defaultValue={description} labelName={"カレンダーの紹介文"} uniqueId={"description"} placeholder={"カレンダーの紹介文を入力してください"} type={"text"} />
                <button className={form.button_on_submit} type="submit">保存する</button>
            </div>
        </form>
    )
}
export default NewGroupForm;