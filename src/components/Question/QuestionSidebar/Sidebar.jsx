import { Fragment } from "react";
import style from './Sidebar.module.css';
export default function Sidebar() {
    return (
        <Fragment>
            <div className={style.user}>
                <div className={style.profile}>
                    <div className={style.avatar}></div>
                    <h3>Scoheart</h3>
                </div>
                <hr className={style.hr}/>
                <div className={style.status}>
                    <div className={style.item}>
                        <div>52</div>
                        <div>问题</div>
                    </div>
                    <div className={style.item}>
                        <div>1</div>
                        <div>圈子</div>
                    </div>
                    <div className={style.item}>
                        <div>64</div>
                        <div>关注</div>
                    </div>
                    <div className={style.item}>
                        <div>5</div>
                        <div>关注者</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}