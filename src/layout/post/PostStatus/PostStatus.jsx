import { Fragment } from "react";
import style from './PostStatus.module.css';
export default function PostStatus() {
    return (
        <Fragment>
            <div className={style.left}>
                <div className={style.leftTop}>
                    <div className={style.button}>
                        <div className={style.like}>1</div>
                    </div>
                    <div className={style.button}>
                        <div className={style.like}>89</div>
                    </div>
                    <div className={style.button}>
                        <div className={style.like}>6</div>
                    </div>
                    <div className={style.button}></div>
                </div>
                <hr className={style.hr} />
                <div className={style.leftButtom}>
                    <div className={style.button}></div>
                    <div className={style.button}></div>
                </div>
            </div>

        </Fragment>
    )
} 