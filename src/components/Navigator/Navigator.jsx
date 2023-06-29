import { Fragment } from "react";
import style from './Navigator.module.css';

export default function Navigator({ children }) {
    return (
        <Fragment>
            <nav className={style.left}>
                <div className={style.link}>
                    {
                        children
                    }
                </div>
            </nav>
        </Fragment>
    )
}