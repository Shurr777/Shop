import React from 'react';
import style from '../../styles/Footer.module.css'
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import LOGO from '../../images/logo.svg'


const Footer = () => (
        <section className={style.footer}>
            <div className={style.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="Stuff"/>
                </Link>
            </div>
            <div className={style.rights}>
                Developed by Aleks Berlizov &nbsp;
                <a href="#"
                   target="_blank"
                   rel="noreferrer"
                >
                    Site
                </a>
            </div>
            <div className={style.socials}>
                <a href="https://instagram.com"
                   target="_blank"
                   rel="noreferrer"
                >
                    <svg className={style["icon-fav"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
                    </svg>
                </a>
                <a href="https://facebook.com"
                   target="_blank"
                   rel="noreferrer"
                >
                    <svg className={style["icon-fav"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}/>
                    </svg>
                </a>
                <a href="https://youtube.com"
                   target="_blank"
                   rel="noreferrer"
                >
                    <svg className={style["icon-fav"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}/>
                    </svg>
                </a>
            </div>
        </section>
    );


export default Footer;