import { Fragment, useEffect, useState } from "react";
import style from './List.module.css';
import Card from "./card/card";
import request from "@/lib/request/request";

const active = {
    color: "black"
}

export default function Aritcle() {

    const [articleList, setArticleList] = useState([])
    const [page, setPage] = useState(1);
    const [isRecommendActive, setRecommendActive] = useState(true);
    const [isLatestActive, setLatestActive] = useState(false);
    const [isHotActive, setHotActive] = useState(false);

    const handleRecommendClick = () => {
        setArticleList([])
        requestArticle(`api/articles/list/page?page=${page}&size=${5}`)
        setLatestActive(false)
        setHotActive(false)
        setRecommendActive(true);
    };

    const handleLatestClick = () => {
        setArticleList([])
        requestArticle(`api/articles/list/latest?page=${page}&size=${5}`)
        setRecommendActive(false);
        setHotActive(false)
        setLatestActive(true);
    };

    const handleHotClick = () => {
        setArticleList([])
        requestArticle(`api/articles/list/hot?page=${page}&size=${5}`)
        setRecommendActive(false);
        setLatestActive(false);
        setHotActive(true)
    };

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

        if(isRecommendActive) {
            requestArticle(`api/articles/list/${page}/${5}`)
        }

        if(isLatestActive) {
            requestArticle(`api/articles/list/hot?page=${page}&size=${5}`)
        }

    }, [page, isRecommendActive, isLatestActive])

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
            <div className={style.middle}>
                <div className={style.middleNav}>
                    <div
                        onClick={handleRecommendClick}
                        className={style.active}
                        style={isRecommendActive ? active : null}
                    >精选</div>

                    <div
                        onClick={handleLatestClick}
                        style={isLatestActive ? active : null}
                        className={style.active}
                    >最新</div>

                    <div
                        onClick={handleHotClick}
                        style={isHotActive ? active : null}
                        className={style.active}
                    >热门</div>
                </div>

                <Card articleList={articleList}></Card>

            </div>

        </Fragment>
    )
}

