import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import Modal from '../common/Modal'
import NewEventForm from '../form/NewEventForm'

import API from '../../api'
import A from '../../actions'
import U from '../../utile'

const EditEventModal = ({
    onCloseModal = () => null,
    setIsLoading = () => null,
    isActive = false,
    eventId = "",
    groupId = "",
    params = {}
}) => {

    const {
        startAt = new Date(),
    } = params;

    const _params = {
        ...params,
        startAt: U.timestampToDate({ timestamp: params.startAt })
    }

    const initialData = setHours(setMinutes(_params.startAt, 30), 12);
    const [date, setDate] = useState(initialData);

    const _successCallback = () => {
        onCloseModal({ data: null })
        return alert("編集内容が保存されました");
    }

    const _handleSubmit = (event) => {
        event.preventDefault()

        const title = event.target.title.value;
        const description = event.target.description.value;

        const data = {
            eventId: _params.eventId,
            title,
            description,
            startAt: date,
        };

        return A.putEventDispatch({ data, groupId }).then(() => _successCallback())
    }

    React.useEffect(() => {
        setDate(startAt);
    }, [params])

    return React.useMemo(() => {
        return (
            <Modal label={"予定を編集する"} isActive={isActive} onCloseModal={onCloseModal}>
                <NewEventForm handleSubmit={_handleSubmit} setDate={setDate} date={date} params={_params} groupId={groupId} />
            </Modal>
        );
    }, [isActive, groupId, params, date])
}

export default EditEventModal;