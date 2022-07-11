import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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

    const calendar = useSelector((state) => state.calendar)
    const calendarHash = calendar.hash && calendar.hash[groupId] ? calendar.hash[groupId].hash : null;

    const scheduleEvents = calendarHash != null && calendarHash[scheduleId] != null ? calendarHash[scheduleId].list : [];
    const dateNow = Date.now();

    const _newList = scheduleEvents.map((item, index) => item)

    const _scheduleEvents = _newList.sort(function (_a, _b) {
        const _aStartAt = _a.startAt ?? dateNow;
        const _bStartAt = _b.startAt ?? dateNow;
        return _aStartAt - _bStartAt
    });

    React.useEffect(() => {
        if (!initialized) {
            A.getEventsDispatch({ scheduleEvents, dispatch })
            initialized = true;
        }
    }, [scheduleId, scheduleEvents.length])

    const ListCompornent = React.useMemo(() => {
        return (
            <ul className={s.schedule_list}>
                {_scheduleEvents.map((_event, _) => {
                    const { eventId } = _event;

                    return (
                        <EventListItem
                            key={`schedule-detail-modal_event-list-item-${eventId}`}
                            eventId={eventId}
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