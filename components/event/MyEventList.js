import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import EventListItem from "./EventListItem";
import U from '../../utile';
import A from '../../actions';
import events from '../../styles/my_events.module.scss';
import common from '../../styles/common.module.scss';

const MyEventListRow = ({
    dispatch,
    scheduleId,
    hash,
    groupId = "",
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
                A.getEventsDispatch({ scheduleEvents: _scheduleEvents, dispatch: dispatch })
                setIsUpdate(true);
            }
            setIsOpen(true);
        }
    }

    const ListCompornent = React.useMemo(() => {
        return (
            <ul className={events.my_event_list}>
                {_scheduleEvents.map((_scheduleEvent, _) => {
                    const { eventId } = _scheduleEvent;
                    return (
                        <EventListItem
                            key={`my-event_event-list-item-${eventId}`}
                            groupId={groupId}
                            onOpenEditModal={onOpenEditModal}
                            isEdit={true}
                            eventId={eventId}
                        />
                    )
                })}
            </ul>
        )
    }, [_scheduleEvents, _scheduleEvents.length])

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
    const dispatch = useDispatch()
    const myEventState = useSelector((state) => state.myEvent);

    const myEventHash = myEventState.hash[groupId] ? myEventState.hash[groupId].hash : {};
    const schedules = Object.keys(myEventHash).map((id) => myEventHash[id]);

    schedules.sort((a, b) => {
        return Number(b.scheduleId.replace(/-/g, '')) - Number(a.scheduleId.replace(/-/g, ''))
    });

    const isVisible = schedules.length !== 0 && schedules.length % 10 == 0;

    const _onMoreLoadMyEvents = () => {
        const scheduleId = schedules[schedules.length - 1].scheduleId

        return A.getMoreMyGroupSchedulesDispatch({ dispatch, groupId, scheduleId }).then(() => {
            console.log("OK")
        }).catch((_error) => {
            console.log("_error", _error)
        });
    }

    return React.useMemo(() => {
        if (schedules.length == 0) {
            return (
                <div className={events.my_event}>
                    <div className={events.my_event_empty}>
                        <p className={events.my_event_empty_text}>現在登録されている予定はありません</p>
                    </div>
                </div>
            )
        }

        return (
            <React.Fragment>
                <div className={events.my_event_rows}>
                    {schedules.map((item, index) => {
                        return (
                            <MyEventListRow
                                key={`my-event_my-event-list-row-${item.scheduleId}`}
                                dispatch={dispatch}
                                groupId={groupId}
                                onOpenEditModal={onOpenEditModal}
                                hash={myEventHash}
                                scheduleId={item.scheduleId}
                            />
                        )
                    })}
                </div>
                {isVisible ? <div className={events.my_event_more_load}>
                    <div onClick={_onMoreLoadMyEvents} className={common.button}>
                        もっと見る
                    </div>
                </div> : null}
            </React.Fragment>
        );
    }, [schedules, schedules.length])
};

export default MyEventList;