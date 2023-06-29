import Nav from "@/components/Nav/Nav";
import { Fragment, useEffect, useRef } from "react";
import style from './Post.module.css';
import 'highlight.js/styles/atom-one-dark.css';
import { transformHTML } from "@/lib/transformMarkdown";

export default function PostLayout(props) {

    const { markdown, nav } = props

    return (
        <Fragment>
            <Nav></Nav>
            <main className={style.main}>
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

                <div
                    className={style.middle}
                    dangerouslySetInnerHTML={
                        {
                            __html: markdown
                        }
                    }>
                </div>

                <div
                    className={style.right}
                    dangerouslySetInnerHTML={
                        {
                            __html: nav[0]
                        }
                    }
                >
                </div>
            </main>
        </Fragment>
    )
}