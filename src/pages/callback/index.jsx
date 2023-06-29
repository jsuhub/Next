import axios from "axios";
import { Fragment, useEffect } from "react";
export default function Callback() {

    useEffect(() => {
        const handleGitHubCallback = async () => {
            // 从 URL 参数中获取授权码
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');

            const secret = "f65e792f7d10bde14b82f3fb618f2cbba268cc5c"

            console.log(code)
        };


        handleGitHubCallback();
    }, []);

    return (
        <Fragment>
            <h1>Hello Callback</h1>
        </Fragment>
    )
}