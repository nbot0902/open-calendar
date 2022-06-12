import s from '../../styles/common.module.scss'

const PageHead = ({
    title
}) => {
    return (
        <div className={s.page_head}>
            <h2 className={s.page_head_text}>
                {title}
            </h2>
        </div>
    )
}

export default PageHead;
