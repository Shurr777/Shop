import React, {useState} from 'react';
import s from "../../styles/User.module.css";
import {useDispatch} from "react-redux";
import {loginUser} from "../../features/user/userSlice";

const UserSignupForm = ({closeForm, toggleCurrentFormType}) => {

    const dispatch = useDispatch()
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isEmpty = Object.values(values).some(val => !val);

        if(isEmpty) return;

        dispatch(loginUser(values));
        closeForm();
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
            <form className={s.form} onSubmit={handleSubmit}>
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
                    <input type="password"
                           placeholder="Your password"
                           name="password"
                           value={values.password}
                           autoComplete="off"
                           onChange={handleChange}
                           required
                    />
                </div>
                <div className={s.link} onClick={()=>toggleCurrentFormType("signup")}>
                    Create an account
                </div>
                <button type="submit" className={s.submit}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default UserSignupForm;