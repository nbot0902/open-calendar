import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import Modal from '../common/Modal'
import NewEventForm from '../form/NewEventForm'

import A from '../../actions'
import API from '../../api'

const NewEventModal = ({
    onCloseModal = () => null,
    isActive = false,
    groupId = ""
}) => {
    const dispatch = useDispatch()

    const today = new Date()
    const initialData = setHours(setMinutes(today, 30), 12);
    const [date, setDate] = useState(initialData);

    const _successCallback = () => {
        onCloseModal({ data: null })

        return alert("予定が追加されました");
    }

    const _handleSubmit = (event) => {
        event.preventDefault()

        const title = event.target.title.value;
        const description = event.target.description.value;

        const data = {
            title,
            description,
            startAt: date
        };

        return A.postEventDispatch({ dispatch, data, groupId }).then(() => _successCallback())
    }

    return React.useMemo(() => {
        return (
            <Modal label={"新しい予定を追加する"} isActive={isActive} onCloseModal={onCloseModal}>
                <NewEventForm handleSubmit={_handleSubmit} setDate={setDate} date={date} groupId={groupId} />
            </Modal>
        );
    }, [groupId, date, isActive])
}

export default NewEventModal;