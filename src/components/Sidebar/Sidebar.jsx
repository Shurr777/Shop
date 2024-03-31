import React from 'react';
import style from '../../styles/Sidebar.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Sidebar = () => {

    const {list} = useSelector(({categories}) => categories)

    console.log("List", list)

    return (
        <section className={style.sidebar}>
            <div className={style.title}>
                CATEGORIES
            </div>
            <nav>
                <ul className={style.menu}>
                    {list.map(({id, name}) => (
                        <li key={id}>
                            <NavLink
                                className={({isActive}) => `${style.link}
                                 ${isActive ? style.active : ""}`}
                                to={`/categories/${id}`}>
                                {name}
                            </NavLink>
                        </li>

                    ))}

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