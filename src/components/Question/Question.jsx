import { Fragment } from "react";
import style from './Question.module.css';
export default function Question() {
    return (
        <Fragment>
            <div className={style.middle}>
                <div className={style.question}>
                    <input className={style.editor}></input>
                    <div className={style.editorButtom}>
                        <div className={style.toolbar}>
                            <div>表情</div>
                            <div>图片</div>
                            <div>链接</div>
                            <div>话题</div>
                            <div>代码</div>
                        </div>
                        <button className={style.submit}>发布问题</button>
                    </div>
                </div>

                <div className={style.card}></div>
                <div className={style.card}></div>
                <div className={style.card}></div>
                <div className={style.card}></div>
                <div className={style.card}></div>
            </div>
        </Fragment>
    )
}

