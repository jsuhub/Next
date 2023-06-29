import { Fragment } from "react";
import style from './Navigator.module.css';
import Link from "next/link";

const arr = ["关注", "前端", "后端", "Android", "IOS", "人工智能", "开发工具", "代码人生", "阅读"]

export default function Navigator() {
    return (
        <Fragment>
            <nav className={style.left}>

            {
                arr.map((item) => {
                    return <Link className={style.link} href={"/"}>{item}</Link>
                })
            }
                
            </nav>
        </Fragment>
    )
}