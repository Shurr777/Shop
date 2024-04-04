import React, {useState} from 'react';
import s from "../../styles/User.module.css";

const UserSignupForm = ({closeForm}) => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password:"",
        avatar: ""
    })

    const handleChange = ({target: {value, name}}) =>{
        setValues({...values, [name]: value})
    }

    return (
        <div className={s.wrapper}>
            <div className={s.close} onClick={closeForm}>
                <svg className="icon">
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}/>
                </svg>
            </div>
            <div className={s.title}>
                Sign Up
            </div>
            <form className={s.form}>
                <div className={s.group}>
                    <input type="email"
                           placeholder="Your email"
                           name="email"
                           value={values.email}
                           autoComplete="off"
                           onChange={handleChange}
                           required
                    />
                </div>
                <div className={s.group}>
                    <input type="name"
                           placeholder="Your name"
                           name="name"
                           value={values.name}
                           autoComplete="off"
                           onChange={handleChange}
                           required
                    />
                </div>
                <div className={s.group}>
                    <input type="password"
                           placeholder="Your password"
                           name="password"
                           value={values.password}
                           autoComplete="off"
                           onChange={handleChange}
                           required
                    />
                </div>
                <div className={s.group}>
                    <input type="avatar"
                           placeholder="Your avatar"
                           name="avatar"
                           value={values.avatar}
                           autoComplete="off"
                           onChange={handleChange}
                           required
                    />
                </div>
                <div className={s.link}>
                    I already have an account
                </div>
                <button type="submit" className={s.submit}>
                    Create an account
                </button>
            </form>
        </div>
    );
};

export default UserSignupForm;