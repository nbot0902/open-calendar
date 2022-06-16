import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import EventListItem from "./EventListItem";
import U from '../../utile';
import A from '../../actions';
import events from '../../styles/my_events.module.scss';

const MyEventListRow = ({
    scheduleId,
    hash,
    groupId = "",
    eventHash = {},
    onOpenEditModal = () => { }
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isUpdate, setIsUpdate] = React.useState(false);

    const _scheduleEvents = hash[scheduleId] ? hash[scheduleId].list : [];
    const label = U.getLabelFromScheduleId({ scheduleId }) ?? "";

    const hamburgerStyle = {
        visibility: isOpen ? 'visible' : 'hidden',
        height: isOpen ? "auto" : "0px",
        opacity: isOpen ? 1 : 0,
        transition: "0.2s",
        marginBottom: isOpen ? "48px" : "0px",
        overflow: "hidden"
    }
    const rowStyle = {
        borderBottom: isOpen ? "0px solid rgba(64, 64, 64, 0.25)" : "1px solid rgba(64, 64, 64, 0.25)"
    }

    const _onOpenHamburger = () => {
        if (isOpen) {
            return setIsOpen(false);
        } else {
            if (!isUpdate) {
                A.getEventsDispatch({ scheduleEvents: _scheduleEvents })
                setIsUpdate(true);
            }
            setIsOpen(true);
        }
    }

    const ListCompornent = React.useMemo(() => {
        return (
            <ul className={events.my_event_list}>
                {_scheduleEvents.map((item, _) => {
                    return (
                        <EventListItem
                            key={`my-event_event-list-item-${item.eventId}`}
                            groupId={groupId}
                            onOpenEditModal={onOpenEditModal}
                            isEdit={true}
                            item={item}
                        />
                    )
                })}
            </ul>
        )
    }, [_scheduleEvents, _scheduleEvents.length, eventHash])

    return (
        <React.Fragment>
            <div onClick={_onOpenHamburger} className={events.my_event_row} style={rowStyle}>
                <div className={events.my_event_row_head}>
                    <h3 className={events.my_event_row_head_text}>
                        {label}
                    </h3>
                </div>
                <div className={events.my_event_row_head_caption}>
                    <p className={events.my_event_row_head_caption_text}>
                        {_scheduleEvents.length}件の予定があります
                    </p>
                </div>

                <div className={events.my_event_row_icon}>
                    <div className={events.my_event_row_icon_inner}>
                        {isOpen ? (
                            <FiChevronUp color={"#ffffff"} size={20} />
                        ) : (
                                <FiChevronDown color={"#ffffff"} size={20} />
                            )
                        }
                    </div>
                </div>
            </div>
            <div className={events.my_event_hamburger_content} style={hamburgerStyle}>
                {ListCompornent}
            </div>
        </React.Fragment>
    )
}

const MyEventList = ({
    groupId = "",
    onOpenEditModal = () => { }
}) => {
    const { hash = {}, isLoading = false } = useSelector((state) => state.calendar);
    const eventState = useSelector((state) => state.event);

    const eventHash = eventState.hash;
    const calendarHash = hash[groupId] ? hash[groupId].hash : {};
    const schedules = Object.keys(calendarHash).map((id) => calendarHash[id]);

    schedules.sort((a, b) => {
        return Number(b.scheduleId.replace(/-/g, '')) - Number(a.scheduleId.replace(/-/g, ''))
    });

    return React.useMemo(() => {
        return (
            <div className={events.my_event_rows}>
                {schedules.map((item, index) => {
                    return (
                        <MyEventListRow
                            key={`my-event_my-event-list-row-${item.scheduleId}`}
                            eventHash={eventHash}
                            groupId={groupId}
                            onOpenEditModal={onOpenEditModal}
                            hash={calendarHash}
                            scheduleId={item.scheduleId}
                        />
                    )
                })}
            </div>
        );
    }, [schedules, schedules.length, eventHash])
};

export default MyEventList;