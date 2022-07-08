import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux'

import form from '../../styles/form.module.scss';
import advertisementStyle from '../../styles/advertisement.module.scss'
import A from "../../actions";
import C from "../../constants";

import dummyIcon from '../../public/images/dummy_icon_for_user.png'

const CalendarBannerInput = ({
    bottomBanner = null,
    newBottomBanner = null,
    onChangePicture = () => { }
}) => {
    const _getBlobUrl = (_newBottomBanner) => {
        return window.URL.createObjectURL(_newBottomBanner)
    }

    return React.useMemo(() => {
        const imageStyle = {
            backgroundImage: newBottomBanner ?
                `url(${_getBlobUrl(newBottomBanner)})` : bottomBanner ?
                    `url('${bottomBanner}')` : `url("")`
        }

        const hasImage = newBottomBanner || bottomBanner;

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
                <p className={form.input_caption}>{"※幅480px、高さ96pxでバナーを作成してください"}</p>
            </div>
        )
    }, [bottomBanner, newBottomBanner])
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

    const bottomBanner = hash[groupId] ? hash[groupId].bottomBanner : ""

    const dispatch = useDispatch();
    const [newBottomBanner, setNewBottomBanner] = React.useState(null);

    const _handleSubmit = (event) => {
        event.preventDefault()

        if (isLoading) {
            return;
        }

        setIsLoading(true);

        const _successCallback = () => {
            return setTimeout(() => {
                setIsLoading(false);
                return toast.success('バナー画像が保存されました')
            }, 2000)
        }
        const _failedCallback = () => {
            return setTimeout(() => {
                setIsLoading(false);
                return toast.error('バナー画像の保存に失敗しました')
            }, 2000)
        }

        return A.putAdvertisementDispatch({
            dispatch,
            groupId,
            newBottomBanner
        }).then(() => {
            _successCallback()
        }).catch((_error) => {
            console.log("_error", _error)
            _failedCallback()
        })
    }

    const _onChangePicture = (e) => {
        setNewBottomBanner(e.target.files[0])
    }

    return (
        <form onSubmit={_handleSubmit}>
            <div className={advertisementStyle.advertisement_detail}>
                <CalendarBannerInput
                    bottomBanner={bottomBanner}
                    newBottomBanner={newBottomBanner}
                    onChangePicture={_onChangePicture}
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