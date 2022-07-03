import React, { useState } from 'react';
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';

import toast from 'react-hot-toast';

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
    isLoading = false,
    isActive = false,
    eventId = "",
    groupId = "",
    params = {}
}) => {
    const dispatch = useDispatch();
    const router = useRouter()

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
        return setTimeout(() => {
            setIsLoading(false);
            router.replace(`/u/${groupId}`);
            return toast.success('予定が変更されました')
        }, 2000)
    }
    const _failedCallback = () => {
        return setTimeout(() => {
            setIsLoading(false);
            return toast.error('予定の変更に失敗しました')
        }, 2000)
    }

    const _handleSubmit = (event) => {
        event.preventDefault()

        if (isLoading) {
            return;
        }

        setIsLoading(true);
        const title = event.target.title.value;
        const description = event.target.description.value;

        const data = {
            eventId: _params.eventId,
            title,
            description,
            startAt: date,
        };

        onCloseModal({ data: null })

        return A.putEventDispatch({ dispatch, data, groupId })
            .then(() => {
                _successCallback()
            })
            .catch((_error) => {
                _failedCallback()
            })
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