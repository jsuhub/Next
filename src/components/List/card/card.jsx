import { Fragment } from "react";
import style from './card.module.css';
import { useRouter } from "next/router";

export default function Card({ articleList }) {

    const router = useRouter()

    const showArticle = (id) => {
        return function () {
            router.push(`/posts/${id}`)
        }
    }

    const renderArticle = () => {
        return articleList.map(item => {
                const {
                    id,
                    author,
                    publish_date,
                    tag,
                    title,
                    description,
                    browser_amount,
                    like_amount,
                    comment_amount
                } = item

                return (
                    <div onClick={showArticle(id)}  className={style.card}>
                        <div className={style.cardInfo}>
                            <div className={style.author}>{author}</div>
                            <div className={style.padding}>{publish_date}</div>
                            <div className={style.padding}>{tag}</div>
                        </div>
                        <div className={style.title}>{title}</div>
                        <div className={style.description}>{description}</div>
                        <div className={style.cardBottom}>
                            <div className={style.browser}>{browser_amount}</div>
                            <div className={style.like}>{like_amount}</div>
                            <div className={style.commend}>{comment_amount}</div>
                        </div>
                    </div>

                )
            })
    }

    return (
        <Fragment>
            { renderArticle() }
        </Fragment>
    )

}