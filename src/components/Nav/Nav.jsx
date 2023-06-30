import { Fragment } from "react";
import style from './Nav.module.css';
import Image from "next/image";
import Link from "next/link";

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
                            width={64}
                            height={24}
                        ></Image>
                        <Link className={style.item} href={"/"}>首页</Link>
                        <Link className={style.item} href={"/question"}>问题</Link>
                    </div>

                    <div className={style.right}>
                        <input className={style.search} type="text"/>
                        {
                            true == true
                                ? (
                                    <div className={style.wrapper}> 
                                        <button className={style.avatar}></button>
                                        <Link href={"/"}>登出</Link>
                                    </div>
                                )
                                : (
                                    <div>
                                        <button className={style.feedback}>反馈</button>
                                        <button className={style.signUp}>
                                            <Link href={"/login"}>登录</Link>
                                        </button>
                                    </div>
                                )
                        }
                    </div>
                </nav>

            </header>
        </Fragment>
    )
}