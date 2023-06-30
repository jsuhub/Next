import Nav from "@/components/Nav/Nav";
import { Fragment } from "react";
import style from './Post.module.css';
import PostStatus from './PostStatus/PostStatus';

export default function PostLayout(props) {

    const { markdown, nav } = props

    return (
        <Fragment>
            <Nav></Nav>
            <main className={style.main}>

                <PostStatus> </PostStatus>

                <div
                    className={`${style.middle} md`}
                    dangerouslySetInnerHTML={
                        {
                            __html: markdown
                        }
                    }>
                </div>

                <div
                    className={style.right}
                    dangerouslySetInnerHTML={
                        {
                            __html: nav[0]
                        }
                    }
                >
                </div>
            </main>
        </Fragment>
    )
}