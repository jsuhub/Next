import style from './test.module.css';

export default function demo () {
    return (
        <div className={style.container}>
            <div className={style.first}>1</div>
            <div className={style.second}>2</div>
            <div className={style.third}>3</div>
        </div>
    ) 
}