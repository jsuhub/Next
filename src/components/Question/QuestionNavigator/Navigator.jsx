import { Fragment } from "react";
import style from './Navigator.module.css';
import Link from "next/link";

const arr = ["最新", "热门", "关注", "我的圈子", "问题圈子"]

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