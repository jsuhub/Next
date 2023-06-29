import { Fragment } from "react";
import style from './Nav.module.css';
import Image from "next/image";
import Link from "next/link";

const navItem = ["index", "question"]

export default function Nav() {

    return (
        <Fragment>
            <header className={style.header}>
                <nav className={style.nav}>
                    <div className={style.link}>
                        <Image
                            className={style.logo}
                            alt="LOGO"
                            src={"/javascript.svg"}
                            width={100}
                            height={24}
                        ></Image>
                        <Link href={"/"}>首页</Link>
                        <Link href={"/question"}>问题</Link>
                    </div>

                    <div className={style.headerButtons}>
                        <input className={style.search} type="text" placeholder="  搜索内容🔍"/>
                        <button className={style.feedback}>反馈</button>
                        <button className={style.signUp}>
                            <Link href={"/login"}>登录</Link>
                        </button>
                    </div>
                </nav>

            </header>
        </Fragment>
    )
}