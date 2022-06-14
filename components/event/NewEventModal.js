import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../common/Modal'
import NewEventForm from '../form/NewEventForm'
import modal from '../../styles/modal.module.scss'

const NewEventModal = ({
    onCloseModal = () => null,
    setIsLoading = () => null,
    isActive = false,
    groupId = ""
}) => {
    return React.useMemo(() => {
        return (
            <Modal label={"新しいイベントを追加する"} isActive={isActive} onCloseModal={onCloseModal}>
                <NewEventForm groupId={groupId} setIsLoading={setIsLoading} />
            </Modal>
        );
    }, [groupId, isActive])
}

export default NewEventModal;