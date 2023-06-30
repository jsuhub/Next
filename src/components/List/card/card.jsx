import { Fragment } from "react";
import style from './card.module.css';
import { useRouter } from "next/router";
import Image from "next/image";
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
                <div
                    onClick={showArticle(id)}
                    className={style.card}
                    key={id}
                >
                    <div className={style.cardInfo}>
                        <div className={style.author}>{author}</div>
                        <div className={style.padding}>{publish_date}</div>
                        <div className={style.padding}>{tag}</div>
                    </div>
                    <div className={style.title}>{title}</div>
                    <div className={style.description}>{description}</div>
                    <div className={style.cardBottom}>

                        <div className={style.svg}>
                            <Image
                                src='/broswer.svg'
                                alt="browser"
                                width={12}
                                height={12}
                            >
                            </Image>
                            {browser_amount}
                        </div>

                        <div className={style.svg}>
                            <Image
                                src='/like.svg'
                                alt="like"
                                width={12}
                                height={12}
                            >
                            </Image>
                            {like_amount}
                        </div>

                        <div className={style.svg}>
                            <Image
                                src='/star.svg'
                                alt="commend"
                                width={12}
                                height={12}
                            >
                            </Image>
                            {comment_amount}
                        </div>



                    </div>
                </div>

            )
        })
    }

    return (
        <Fragment>
            {renderArticle()}
        </Fragment>
    )

}