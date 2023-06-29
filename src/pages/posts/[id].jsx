import Nav from "@/components/Nav/Nav";
import { transformMarkdown } from "@/lib/transformMarkdown";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import style from './posts.module.css'
import PostLayout from "@/layout/PostLayout";

export default function Post(props) {

    const id = props.id

    const [markdown, setMarkdown] = useState("")
    const [nav, setNav] = useState("")

    useEffect(() => {
        axios(`http://localhost/articles/${id}`)
            .then(async (res) => {
                const a = await transformMarkdown(res.data.data.content)

                const regex =  /<nav class="toc">.*?<\/nav>/;;
                const nav = a.contentHTML.match(regex);
                const markdown = a.contentHTML.replace(regex, " ")

                setMarkdown(markdown)
                setNav(nav)


            })
    }, [])

    return (
        <Fragment>
            <PostLayout
                markdown={markdown}
                nav={nav}
            >
            </PostLayout>
        </Fragment>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params;

    return {
        props: {
            id,
        },
    };
}