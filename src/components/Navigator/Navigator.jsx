import { Fragment } from "react";
import style from './Navigator.module.css';

export default function Navigator({ children }) {
    return (
        <Fragment>
            <nav className={style.left}>
                {
                    children
                }
            </nav>
        </Fragment>
    )
}