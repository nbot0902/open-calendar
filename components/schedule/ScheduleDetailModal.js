import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Modal from '../common/Modal'
import EventListItem from '../event/EventListItem'
import A from '../../actions'
import s from '../../styles/schedule.module.scss'
import modal from '../../styles/modal.module.scss'

const ScheduleDetailModal = ({
    params = {},
    groupId = "",
    isActive = false,
    onCloseModal = () => null,
}) => {
    const dispatch = useDispatch()

    const { label = "", scheduleId = "" } = params;
    const initialized = false;

    const { hash = {}, isLoading = false } = useSelector((state) => state.calendar)
    const calendarHash = hash && hash[groupId] ? hash[groupId].hash : null;
    const scheduleEvents = calendarHash != null && calendarHash[scheduleId] != null ? calendarHash[scheduleId].list : [];

    React.useEffect(() => {
        if (!initialized) {
            A.getEventsDispatch({ dispatch, scheduleEvents })
            initialized = true;
        }
    }, [scheduleId, scheduleEvents.length])

    const ListCompornent = React.useMemo(() => {
        return (
            <ul className={s.schedule_list}>
                {scheduleEvents.map((item, _) => {
                    return (
                        <EventListItem
                            key={`schedule-detail-modal_event-list-item-${item.eventId}`}
                            item={item}
                        />
                    )
                })}
            </ul>
        )
    }, [scheduleId, scheduleEvents.length])

    return React.useMemo(() => {
        return (
            <Modal label={label} isActive={isActive} onCloseModal={onCloseModal}>
                {ListCompornent}
            </Modal>
        );
    }, [isActive])
}

export default ScheduleDetailModal;