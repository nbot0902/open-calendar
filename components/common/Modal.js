import React from 'react'
import modal from '../../styles/modal.module.scss'

const ModalHeader = ({
    label
}) => {
    return React.useMemo(() => {
        return (
            <div className={modal.modal_head}>
                <h3 className={modal.modal_head_text}>
                    {label}
                </h3>
            </div>
        )
    }, [label])
}

const Modal = ({
    children,
    isActive = false,
    onCloseModal,
    label = ""
}) => {
    return React.useMemo(() => {
        const style = {
            transition: '0.2s',
            visibility: isActive ? 'visible' : 'hidden',
            opacity: isActive ? 1 : 0,
        }
        const contentStyle = {
            transition: '0.2s',
            top: isActive ? '0px' : '120px'
        }
        const overlayStyle = {
            transition: '0.2s',
            opacity: isActive ? 1 : 0,
            filter: isActive ? 'blur(0px)' : 'blur(6px)'
        }

        return (
            <div style={style} className={modal.modal}>
                <div style={contentStyle} className={modal.modal_content}>
                    <div className={modal.modal_inner}>
                        <ModalHeader label={label} />
                        <div className={modal.modal_detail}>
                            <div className={modal.modal_detail_content}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    onClick={onCloseModal}
                    style={overlayStyle}
                    className={modal.modal_overlay}
                ></div>
            </div>
        );
    }, [children, isActive, onCloseModal])
};

export default Modal;