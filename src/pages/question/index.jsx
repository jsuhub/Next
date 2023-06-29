import Nav from "@/components/Nav/Nav";
import { Fragment } from "react";
import style from './Question.module.css'
import Question from "@/components/Question/Question";
import Sidebar from "@/components/Question/QuestionSidebar/Sidebar";
import Navigator from "@/components/Navigator/Navigator";
import Link from "next/link";

const arr = ["最新", "热门", "关注","我的圈子", "所有圈子"]

export default function Ques() {
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
                <Question></Question>
                <Sidebar></Sidebar>
            </main>
        </Fragment>
    )
}