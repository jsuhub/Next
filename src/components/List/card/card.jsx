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
                            <div>{author}</div>
                            <div> | </div>
                            <div>{publish_date}</div>
                            <div> | </div>
                            <div>{tag}</div>
                        </div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className={style.cardBottom}>
                            <div>{browser_amount}</div>
                            <div>{like_amount}</div>
                            <div>{comment_amount}</div>
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