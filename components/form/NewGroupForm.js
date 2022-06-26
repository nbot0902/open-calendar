import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast';
import { FiCamera } from "react-icons/fi";

import InputRow from "./InputRow";
import TextareaRow from "./TextareaRow";
import form from '../../styles/form.module.scss';
import profileStyle from '../../styles/profile.module.scss'
import A from "../../actions";
import U from "../../utile";
import API from "../../api";

import dummyIcon from '../../public/images/dummy_icon_for_group.png'

const NewGroupForm = ({
    group = {},
    isLoading = false,
    setIsLoading = () => { },
}) => {
    const dispatch = useDispatch();

    const [newPicture, setNewPicture] = React.useState();
    const [isTwitterUrlError, setIsTwitterError] = React.useState(false);
    const [isTiktokUrlError, setIsTiktokError] = React.useState(false);
    const [isOtherUrlError, setIsOtherUrlError] = React.useState(false);

    const {
        picture = null,
        groupName = "",
        description = "",
        twitterUrl = "",
        tiktokUrl = "",
        otherUrl = "",
    } = group;

    const _getBlobUrl = (_newPicture) => {
        return window.URL.createObjectURL(_newPicture)
    }
    const imageStyle = {
        backgroundImage: newPicture ? `url(${_getBlobUrl(newPicture)})` : picture ? `url('${picture}')` : `url(${dummyIcon.src})`
    }

    const _handleSubmit = (event) => {
        event.preventDefault()

        if (isLoading) {
            return;
        }
        if (isTiktokUrlError || isTwitterUrlError || isOtherUrlError) {
            return toast.error('入力内容に誤りがあります')
        }

        setIsLoading(true);

        const description = event.target.description.value;
        const groupName = event.target.groupName.value;

        const twitterUrl = event.target.twitterUrl.value;
        const tiktokUrl = event.target.tiktokUrl.value;
        const otherUrl = event.target.otherUrl.value;

        const _data = {
            groupName,
            description,
            twitterUrl,
            tiktokUrl,
            otherUrl
        };

        const _groupId = group.groupId

        const _successCallback = () => {
            return setTimeout(() => {
                setIsLoading(false);
                return toast.success('カレンダー情報が保存されました')
            }, 2000)
        }
        const _failedCallback = () => {
            return setTimeout(() => {
                setIsLoading(false);
                return toast.error('カレンダー情報が保存に失敗しました')
            }, 2000)
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

    const _onChangeTwitterUrl = (_event) => {
        const _url = _event.target.value
        const _isEnable = U.checkTwitterUrl({ url: _url })
        const _isEmpty = !_url

        if (_isEmpty) {
            setIsTwitterError(false)
        }
        if (!isTwitterUrlError && !_isEnable) {
            setIsTwitterError(true)
        }
        if (isTwitterUrlError && _isEnable) {
            setIsTwitterError(false)
        }
    }
    const _onChangeTiktokUrl = (_event) => {
        const _url = _event.target.value
        const _isEnable = U.checkTikTokUrl({ url: _url })
        const _isEmpty = !_url

        if (_isEmpty) {
            setIsTiktokError(false)
        }
        if (!isTiktokUrlError && !_isEnable) {
            setIsTiktokError(true)
        }
        if (isTiktokUrlError && _isEnable) {
            setIsTiktokError(false)
        }
    }
    const _onChangeOtherUrl = (_event) => {
        const _url = _event.target.value;
        const _isEnable = U.checkWebUrl({ url: _url })
        const _isEmpty = !_url

        if (_isEmpty) {
            setIsOtherUrlError(false)
        }
        if (!isOtherUrlError && !_isEnable) {
            setIsOtherUrlError(true)
        }
        if (isOtherUrlError && _isEnable) {
            setIsOtherUrlError(false)
        }
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
                <TextareaRow
                    defaultValue={description}
                    labelName={"カレンダーの紹介文"}
                    uniqueId={"description"}
                    placeholder={"カレンダーの紹介文を入力してください"}
                    type={"text"}
                />
                <InputRow
                    onChange={_onChangeTwitterUrl}
                    defaultValue={twitterUrl}
                    isError={isTwitterUrlError}
                    labelName={"TwitterのURL"}
                    placeholder={"TwitterのURLを入力してください"}
                    errorText={"TwitterのURLを入力してください"}
                    uniqueId={"twitterUrl"}
                    type={"text"}
                />
                <InputRow
                    onChange={_onChangeTiktokUrl}
                    defaultValue={tiktokUrl}
                    isError={isTiktokUrlError}
                    labelName={"TikTokのURL"}
                    placeholder={"TikTokのURLを入力してください"}
                    errorText={"テスト"}
                    uniqueId={"tiktokUrl"}
                    type={"text"}
                />
                <InputRow
                    onChange={_onChangeOtherUrl}
                    defaultValue={otherUrl}
                    isError={isOtherUrlError}
                    labelName={"その他のURL"}
                    placeholder={"その他のURLを入力してください"}
                    errorText={"URLを入力してください"}
                    uniqueId={"otherUrl"}
                    type={"text"}
                />
                <button
                    className={form.button_on_submit}
                    type={"submit"}
                >
                    保存する
                </button>
            </div>
        </form>
    )
}
export default NewGroupForm;