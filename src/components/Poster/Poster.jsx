import React from 'react';
import style from '../../styles/Home.module.css';
import POSTER from '../../images/computer.png'

const Poster = () => (
    <section className={style.home}>
        <div className={style.title}></div>
        <div className={style.product}>
            <div className={style.text}>
                <div className={style.subtitle}>the bestseller of 2024</div>
                <h1 className={style.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
                <button className={style.button}>Shop now</button>
            </div>
            <div className={style.image}>
                <img src={POSTER} alt="Poster"/>
            </div>
        </div>
    </section>
);


export default Poster;