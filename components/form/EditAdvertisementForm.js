import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux'

import form from '../../styles/form.module.scss';
import advertisementStyle from '../../styles/advertisement.module.scss'

import SelectRow from "../form/SelectRow";
import InputRow from "../form/InputRow";

import A from "../../actions";
import U from "../../utile";
import C from "../../constants";

const CalendarBannerInput = ({
    bottomBannerImage = null,
    newBottomBannerImage = null,
    onChangePicture = () => { }
}) => {
    const _getBlobUrl = (_newBottomBannerImage) => {
        return window.URL.createObjectURL(_newBottomBannerImage)
    }

    const hasImage = newBottomBannerImage || bottomBannerImage;

    return React.useMemo(() => {
        const imageStyle = {
            backgroundImage: newBottomBannerImage ?
                `url(${_getBlobUrl(newBottomBannerImage)})` : bottomBannerImage ?
                    `url('${bottomBannerImage}')` : `url("")`
        }

        return (
            <div className={form.form_row}>
                <label
                    className={form.label}
                >
                    {"カレンダー / 下部のバナー"}
                </label>
                <label onChange={onChangePicture} className={advertisementStyle.bottom_banner}>
                    <div className={advertisementStyle.bottom_banner_inner} style={imageStyle}>
                        {!hasImage ? (
                            <div className={advertisementStyle.image_label}>
                                <div className={advertisementStyle.image_label_inner}>
                                    <div className={advertisementStyle.image_label_text}>
                                        幅480px 高さ96px
                                    </div>
                                </div>
                            </div>
                        ) : null}
                        <input
                            className={advertisementStyle.bottom_banner_input}
                            type="file"
                            name="photo"
                            id="filesend"
                            multiple
                            accept=".jpg,.gif,.png,image/gif,image/jpeg,image/png"
                        />
                    </div>
                </label>
                {!hasImage ? <p className={form.input_error}>{"画像を選択してください"}</p> : null}
            </div>
        )
    }, [hasImage, bottomBannerImage, newBottomBannerImage])
}

const EditAdvertisementForm = ({
    isLoading = false,
    setIsLoading = () => { },
    group = {},
    profile = {},
    advertisement = {},
}) => {
    const groupId = group.groupId

    const {
        hash = {},
    } = advertisement;

    const ad = hash[groupId] ? hash[groupId] : {}
    const { bottomBannerImage = "", bottomBannerUrl, bottomBannerStatus = null } = ad;

    const dispatch = useDispatch();
    const [newBottomBannerImage, setNewBottomBannerImage] = React.useState(null);
    const [url, setBottomBannerUrl] = React.useState(bottomBannerUrl);
    const [status, setBottomBannerStatus] = React.useState(bottomBannerStatus);
    const [isUrlError, setIsUrlError] = React.useState(false);

    const _handleSubmit = (event) => {
        event.preventDefault()

        const hasImage = newBottomBannerImage || bottomBannerImage;
        const isNotSet = C.AD_STATE.NOT_SET == status || status == null;

        if (!hasImage) {
            return toast.error('バナー画像を追加してください')
        }
        if (isUrlError) {
            return toast.error('リンクするURLを入力してください')
        }
        if (isNotSet) {
            return toast.error('公開設定を選択してください')
        }
        if (isLoading) {
            return;
        }

        setIsLoading(true);

        const _successCallback = () => {
            A.getAdvertisementDispatch({ dispatch, groupId });

            return setTimeout(() => {
                setIsLoading(false);
                return toast.success('正常に保存されました')
            }, 2000)
        }
        const _failedCallback = () => {
            return setTimeout(() => {
                setIsLoading(false);
                return toast.error('保存に失敗しました')
            }, 2000)
        }

        return A.putAdvertisementDispatch({
            dispatch,
            groupId,
            newBottomBannerImage,
            bottomBannerStatus: Number(status),
            bottomBannerUrl: url
        }).then(() => {
            _successCallback()
        }).catch((_error) => {
            _failedCallback()
        })
    }

    const _onChangePicture = (e) => {
        setNewBottomBannerImage(e.target.files[0])
    }
    const _onChangeStatus = (e) => {
        setBottomBannerStatus(e.target.value)
    }
    const _onChangeUrl = (_event) => {
        const _url = _event.target.value;
        const _isEnable = U.checkWebUrl({ url: _url })
        const _isEmpty = !_url

        if (_isEmpty) {
            setIsUrlError(false)
        }
        if (!isUrlError && !_isEnable) {
            setIsUrlError(true)
        }
        if (isUrlError && _isEnable) {
            setIsUrlError(false)
        }

        setBottomBannerUrl(_event.target.value)
    }

    const options = [
        { value: C.AD_STATE.NOT_SET, label: '選択してください' },
        { value: C.AD_STATE.ACTIVE, label: '公開' },
        { value: C.AD_STATE.INACTIVE, label: '非公開' },
    ]

    const getDefaultValue = () => {
        if (status == null) {
            return options[0]
        }

        const option = options.find((v) => v.value == status);
        return option.value;
    }

    return (
        <form onSubmit={_handleSubmit}>
            <div className={advertisementStyle.advertisement_detail}>
                <CalendarBannerInput
                    onChangePicture={_onChangePicture}
                    bottomBannerImage={bottomBannerImage}
                    newBottomBannerImage={newBottomBannerImage}
                />
                <InputRow
                    required={true}
                    onChange={_onChangeUrl}
                    isError={isUrlError}
                    defaultValue={url}
                    labelName={"リンク"}
                    placeholder={"リンクさせたいURLを入力してください"}
                    errorText={"URLを入力してください"}
                    uniqueId={"bottomBannerUrl"}
                    type={"text"}
                />
                <SelectRow
                    defaultValue={getDefaultValue()}
                    onChange={_onChangeStatus}
                    options={options}
                    labelName={"公開設定"}
                    placeholder={"選択してください"}
                    uniqueId={"bottomBannerStatus"}
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
export default EditAdvertisementForm;