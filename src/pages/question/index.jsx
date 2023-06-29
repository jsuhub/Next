import Nav from "@/components/Nav/Nav";
import { Fragment } from "react";
import style from './Question.module.css'
import Question from "@/components/Question/Question";
import Navigator from "@/components/Question/QuestionNavigator/Navigator";
import Sidebar from "@/components/Question/QuestionSidebar/Sidebar";

export default function Ques() {
    return (
        <Fragment>
            <Nav></Nav>
            <main className={style.main}>
                <Navigator></Navigator>
                <Question></Question>
                <Sidebar></Sidebar>
            </main>
        </Fragment>
    )
}