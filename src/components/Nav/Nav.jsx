import { Fragment, useContext } from "react";
import style from './Nav.module.css';
import Image from "next/image";
import Link from "next/link";
import { Context } from '@/state/Context';
export default function Nav() {

    const { isLoggedIn } = useContext(Context);

    return (
        <Fragment>
            <header className={style.header}>
                <nav className={style.nav}>
                    <div className={style.link}>
                        <Image
                            className={style.logo}
                            src={"/javascript.svg"}
                            alt="LOGO"
                            width={64}
                            height={24}
                        ></Image>
                        <Link className={style.item} href={"/"}>首页</Link>
                        <Link className={style.item} href={"/question"}>问题</Link>
                        <Link className={style.item} href={"/test"}>test</Link>
                    </div>

                    <div className={style.right}>
                        <input className={style.search} type="text" />
                        {
                            isLoggedIn
                                ? (
                                    <div className={style.wrapper}>
                                        <button className={style.avatar}></button>
                                        <Link href={"/"}>登出</Link>
                                    </div>
                                )
                                : (
                                    <div>
                                        <button className={style.signUp}>
                                            <Link style={{ color: "white" }} href={"/login"}>登录</Link>
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