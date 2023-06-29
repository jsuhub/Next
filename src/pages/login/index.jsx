import Nav from "@/components/Nav/Nav";
import axios from "axios";
import { Fragment, useRef } from "react";
import style from './Login.module.css';

export default function Login() {

    const usernameRef = useRef();
    const passwdRef = useRef();

    function registerUser() {

        const user = {
            username: usernameRef.current.value,
            passwd: passwdRef.current.value
        }

        const RequestVO = {
            data: user
        }

        axios({
            method: "post",
            url: "http://localhost/users/register",
            data: RequestVO
        })
            .then(res => {
                if (res.data.data) {
                    console.log(res.data.data)
                    console.log("register successfully")
                }
                else {
                    console.log(res.data.data)
                    console.log("register failed")
                }

            })
    }

    function login() {
        const clientID = 'Iv1.0c6c5977674b5701'
        const redirectURL = 'http://localhost:3001'
        const githubURL = `https://github.com/login/oauth/authorize?client_id=${clientID}`

        const width = 500;
        const height = 600;
        const left = window.screen.width / 2 - width / 2;
        const top = window.screen.height / 2 - height / 2;

        window.open(
            githubURL,
            'GitHub Login',
            `width=${width}, height=${height}, top=${top}, left=${left}`)
    }

    return (
        <Fragment>
            <Nav></Nav>
            <main className={style.wrapper}>
                <h1>登录码客之家</h1>

                <button
                    onClick={login}
                    className={style.github}
                >
                    使用Github登录
                </button>

                <button
                    className={style.gitlab}
                >
                    使用Github登录
                </button>

                <button
                    className={style.bitbucket}
                >
                    使用Bitbucket登录
                </button>

                <hr className={style.hr} />

                <button
                    className={style.sso}
                >
                    使用邮箱登录
                </button>
                <a className={style.register}href="">没有账号，点击注册...</a>
            </main>
        </Fragment>
    )
}