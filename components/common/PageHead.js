import React from 'react'
import s from '../../styles/common.module.scss'

const PageHead = ({
    title,
    description = ""
}) => {
    return (
        <React.Fragment>
            <div className={s.page_head}>
                <h1 className={s.page_head_text}>
                    {title}
                </h1>
            </div>
            { description ? (
                <div className={s.page_description}>
                    <p className={s.page_description_text}>
                        {description}
                    </p>
                </div>
            ) : null}
        </React.Fragment>
    )
}

export default PageHead;
