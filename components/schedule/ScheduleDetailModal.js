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

    const event = useSelector((state) => state.event);
    const eventHash = event.hash ?? {};

    React.useEffect(() => {
        if (!initialized) {
            A.getEventsDispatch({ scheduleEvents, dispatch })
            initialized = true;
        }
    }, [scheduleId, scheduleEvents.length])

    const ListCompornent = React.useMemo(() => {
        return (
            <ul className={s.schedule_list}>
                {scheduleEvents.map((_event, _) => {
                    const { eventId, scheduleId } = _event;
                    const data = eventHash[eventId] ?? {};

                    return (
                        <EventListItem
                            key={`schedule-detail-modal_event-list-item-${data.eventId}`}
                            data={data}
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