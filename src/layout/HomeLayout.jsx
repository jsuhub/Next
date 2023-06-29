import Nav from "@/components/Nav/Nav";
import style from './Layout.module.css';
import { Fragment } from "react";
import Navigator from "@/components/List/ArticleNavigator/Navigator";
import Aritcle from "@/components/List/List";
import Sidebar from "@/components/List/ArticleSidebar/Sidebar";

export default function HomeLayout() {
    return (
        <Fragment>
            <Nav></Nav>
            <main className={style.main}>
                <Navigator></Navigator>
                <Aritcle ></Aritcle>
                <Sidebar></Sidebar>
            </main>
        </Fragment>
    )
}