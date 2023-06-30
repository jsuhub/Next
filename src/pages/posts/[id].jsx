import Nav from "@/components/Nav/Nav";
import { transformMarkdown } from "@/lib/ssg/transformMarkdown";
import { Fragment, useEffect, useState } from "react";
import PostLayout from "@/layout/post/Post";
import request from "@/lib/request/request";

export default function Post(props) {

    const id = props.id

    const [markdown, setMarkdown] = useState("")
    const [nav, setNav] = useState("")

    useEffect(() => {
        request.get(`/api/articles/${id}`)
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