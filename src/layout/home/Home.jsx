import { Fragment, useContext } from "react";
import Nav from "@/components/Nav/Nav";
import style from './Home.module.css';
import Navigator from "@/components/Navigator/Navigator";
import List from "@/components/List/List";
import Sidebar from "@/components/Sidebar/Sidebar";
import Link from "next/link";
import request from "@/lib/request/request";
import { Context } from "@/state/Context";

const arr = [
    { id: 1, name: "关注", query: "follow" },
    { id: 2, name: "前端", query: "front-end" },
    { id: 3, name: "后端", query: "back-end" },
    { id: 4, name: "Android", query: "android" },
    { id: 5, name: "IOS", query: "ios" },
    { id: 6, name: "人工智能", query: "ai" },
    { id: 7, name: "开发工具", query: "tools" },
    { id: 8, name: "代码人生", query: "code-life" },
    { id: 1, name: "阅读", query: "reading" },
]

export default function Layout() {

    const { setArticleList } = useContext(Context)



    const requestArticle = async (url) => {
        try {
            const res = await request.get(url);
            const newArticles = res.data.data;
            setArticleList((prevArticleList) => [...prevArticleList, ...newArticles]);
        } catch (error) {
            console.log("Error loading more articles:", error);
        }
    }

    return (
        <Fragment>
            <Nav></Nav>
            <main className={style.main}>
                <Navigator>
                    {
                        arr.map((item) => {
                            return (
                                <Link
                                    key={item.id}
                                    onClick={requestArticle}
                                    className={style.link}
                                    href={"/"}
                                >{item.name}</Link>
                            )
                        })
                    }
                </Navigator>
                <List>

                </List>
                <Sidebar></Sidebar>
            </main>
        </Fragment>
    )
}