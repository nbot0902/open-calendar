import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { useSelector } from 'react-redux'
import { FiEdit2 } from "react-icons/fi";

import A from '../../actions';
import U from '../../utile';
import C from '../../constants';
import s from '../../styles/schedule.module.scss';

const EventListItem = ({
    data = {},
    groupId = "",
    isEdit = false,
    onOpenEditModal = () => { }
}) => {
    const { title = "未設定", description = "", startAt = Date.now(), status = C.EVENT_STATE.ACTIVE } = data;
    const _startAt = U.timestampToDateLabel({ timestamp: startAt })

    const isActive = C.EVENT_STATE.ACTIVE == status

    const disableStyle = {
        opacity: isActive ? 1 : 0.15
    }

    const _onOpenEditModal = () => {
        return onOpenEditModal({ data: data });
    }

    const _onCloseEvent = () => {

        return confirmAlert({
            title: "この予定を中止してもよろしいですか？",
            message: '一度、中止してしまうと元に戻すことはできません',
            buttons: [
                {
                    label: '閉じる',
                    onClick: () => {
                        return null;
                    }
                },
                {
                    label: '中止する',
                    onClick: () => {
                        return A.deleteEventDispatch({ groupId, data: eventData }).then(() => {
                            alert("この予定を中止になりました")
                        });
                    }
                }
            ]
        });
    }

    return React.useMemo(() => {
        return (
            <li className={s.schedule_list_item}>
                <div className={s.schedule_list_item_content}>
                    {false ? <img className={s.event_img} src="https://placehold.jp/600x400.png" /> : null}
                    <h4 className={s.event_title} style={disableStyle}>
                        {title}
                    </h4>

                    <ul className={s.event_info_list} style={disableStyle}>
                        <li className={s.event_info_list_item}>
                            <p className={s.event_info_list_item_text}>開始: {_startAt}</p>
                        </li>
                    </ul>

                    {description ? (
                        <div className={s.event_description} style={disableStyle}>
                            <p className={s.event_description_text}>{description}</p>
                        </div>
                    ) : null}
                </div>

                {!isActive ? (
                    <div className={s.disable_label}>
                        <p className={s.disable_label_text}>
                            この予定は中止になりました
                        </p>
                    </div>
                ) : null}

                {isEdit && isActive ? (
                    <ul className={s.edit_button_list}>
                        <li className={s.edit_button_list_item}>
                            <div onClick={_onOpenEditModal} className={`${s.button}`}>
                                編集する
                            </div>
                        </li>
                        <li className={s.edit_button_list_item}>
                            <div onClick={_onCloseEvent} className={`${s.button} ${s.is_red}`}>
                                この予定を中止する
                            </div>
                        </li>
                    </ul>
                ) : null}
            </li>
        );
    }, [data])
};

export default EventListItem;