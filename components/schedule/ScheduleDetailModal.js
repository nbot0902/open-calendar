import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../common/Modal'
import EventListItem from '../event/EventListItem'
import s from '../../styles/schedule.module.scss'
import modal from '../../styles/modal.module.scss'

const ScheduleDetailModal = ({
    onCloseModal = () => null,
    isActive = false,
}) => {
    const label = "2022年6月20日の予定"

    return (
        <Modal label={label} isActive={isActive} onCloseModal={onCloseModal}>
            <ul className={s.schedule_list}>
                <EventListItem />
                <EventListItem />
                <EventListItem />
                <EventListItem />
            </ul>
        </Modal>
    );
}

export default ScheduleDetailModal;