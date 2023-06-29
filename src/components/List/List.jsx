import { Fragment, useEffect, useState } from "react";
import style from './List.module.css';
import axios from "axios";
import { useRouter } from "next/router";

export default function Aritcle() {

    const [articleList, setArticleList] = useState([])
    const [page, setPage] = useState(1);

    const router = useRouter()

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 20) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        loadMoreArticles()
    }, [page])

    const loadMoreArticles = async () => {
        try {
            const res = await axios.get(`http://localhost/articles/list/${page}`);
            const newArticles = res.data.data;
            setArticleList((prevArticleList) => [...prevArticleList, ...newArticles]);
        } catch (error) {
            console.log("Error loading more articles:", error);
        }
    }

    function showArticle(id) {

        return function () {
            router.push(`/posts/${id}`)
        }
    }

    return (
        <Fragment>
            <div className={style.middle}>
                <div className={style.middleNav}>
                    <div className={style.recommend}>推荐</div>
                    <div className={style.latest}>最新</div>
                </div>

                {
                    articleList.map(item => {
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
                            <div onClick={showArticle(id)} key={id} className={style.card}>
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

            </div>

        </Fragment>
    )
}

