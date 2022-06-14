import React from 'react'
import s from '../../styles/schedule.module.scss'

const EventListItem = ({
    data = {}
}) => {
    return (
        <li className={s.schedule_list_item}>
            <div className={s.schedule_list_item_content}>
                {false ? <img className={s.event_img} src="https://placehold.jp/600x400.png" /> : null}
                <h4 className={s.event_title}>
                    開封イベント
                </h4>
                <ul className={s.event_info_list}>
                    <li className={s.event_info_list_item}>
                        <h4 className={s.label}>会場</h4>
                        <p className={s.description}>オフライン</p>
                    </li>
                    <li className={s.event_info_list_item}>
                        <h4 className={s.label}>参加料金</h4>
                        <p className={s.description}>￥1,000</p>
                    </li>
                    <li className={s.event_info_list_item}>
                        <h4 className={s.label}>時間帯</h4>
                        <p className={s.description}>15:00-16:30</p>
                    </li>
                </ul>
            </div>
        </li>
    );
};

export default EventListItem;