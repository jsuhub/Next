import Nav from "@/components/Nav/Nav";
import style from './Layout.module.css';
import { Fragment } from "react";
import Navigator from "@/components/Navigator/Navigator";
import Aritcle from "@/components/List/List";
import Sidebar from "@/components/Sidebar/Sidebar";
import Link from "next/link";

const arr = ["关注", "前端", "后端", "Android", "IOS", "人工智能", "开发工具", "代码人生", "阅读"]

export default function HomeLayout() {
    return (
        <Fragment>
            <Nav></Nav>
            <main className={style.main}>
                <Navigator>
                    {
                        arr.map((item) => {
                            return <Link className={style.link} href={"/"}>{item}</Link>
                        })
                    }
                </Navigator>
                <Aritcle ></Aritcle>
                <Sidebar></Sidebar>
            </main>
        </Fragment>
    )
}