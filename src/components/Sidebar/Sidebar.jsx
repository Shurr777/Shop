import React from 'react';
import style from '../../styles/Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <section className={style.sidebar}>
            <div className={style.title}>
                CATEGORIES
            </div>
            <nav>
                <ul className={style.menu}>
                    <li>
                        <NavLink to={`/categories/${1}`}>
                            Link
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={style.footer}>
                <a href="/help" target="_blank" className={style.link}>
                    HELP
                </a>
                <a href="/help"
                   target="_blank"
                   className={style.link}
                   style={{textDecoration: "underline"}}
                >
                    Therms & Conditions
                </a>
            </div>
        </section>
    );
};

export default Sidebar;