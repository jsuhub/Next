import { Fragment } from "react";
import style from './Sidebar.module.css';
export default function Sidebar() {
    return (
        <Fragment>
            <div className={style.right}>
                <div className={style.create}>
                    <div className={style.rightFirst}>
                        <span>创作中心</span>
                        <span>草稿箱</span>
                    </div>

                    <div className={style.rightSecond}>
                        <div className={style.rightSecondCard}>
                            <button className={style.rightSecondButton}></button>
                            <div>回答问题</div>
                        </div>
                        <div className={style.rightSecondCard}>
                            <button className={style.rightSecondButton}></button>
                            <div>写问题</div>
                        </div>
                        <div className={style.rightSecondCard}>
                            <button className={style.rightSecondButton}></button>
                            <div>写文章</div>
                        </div>
                        <div className={style.rightSecondCard}>
                            <button className={style.rightSecondButton}></button>
                            <div>发视频</div>
                        </div>
                    </div>

                    <div className={style.rightThird}>

                    </div>

                    <div className={style.rightFourth}>

                    </div>
                </div>

                <div className={style.adv}></div>
                <div className={style.adv}></div>
                <div className={style.adv}></div>
            </div>
        </Fragment>
    )
}