import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from "../../styles/Profile.module.css"
import { updateUser} from "../../features/user/userSlice";

const Profile = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(({user}) => user);
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        avatar: ""
    })

    useEffect(() => {
        if(!currentUser) return;
        setValues(currentUser)
    }, [currentUser]);

    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isEmpty = Object.values(values).some(val => !val);

        if(isEmpty) return;

        dispatch(updateUser(values));
    }
    return (
        <section className={s.profile}>
            {!currentUser ?
                <span>You need to log in</span> :
                (
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
                        <button type="submit" className={s.submit}>Update</button>
                    </form>
                )}
        </section>
    );
};

export default Profile;