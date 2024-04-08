import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useGetProductsQuery} from "../../features/api/apiSlice";
import styles from "../../styles/Category.module.css"
import Products from "../Products/Products";
import {useSelector} from "react-redux";

const Category = () => {
    const {id} = useParams();
    const {list} = useSelector(({categories}) => categories)

    const defaultValues = {
        title: "",
        price_min: 0,
        price_max: 0
    }
    const defaultParams = {
        categoryId: id,
        ...defaultValues,
        limit: 5,
        offset: 0
    }
    const [params, setParams] = useState(defaultParams)
    const [values, setValues] = useState(defaultValues)
    const [cat, setCat] = useState()
    const [items, setItems] = useState([])
    const [isEnd, setEnd] = useState(false)

    const {data, isLoading, isSuccess} = useGetProductsQuery(params);

    console.log("Category data", data)

    useEffect(() => {
        if(!id) return;

        setParams({...defaultParams, categoryId: id})
    }, [id]);

    useEffect(() => {
        if(isLoading) return;
        if(!data.length) return setEnd(true)
        const products = Object.values(data);
        if(!products.length) return;

        setItems((_items) => [..._items, ...products])
    }, [data, isLoading]);

    useEffect(() => {
        if(!id || !list.length) return;

        /*const categoryName = list.find((item) => item.id === id * 1)
        setCat(categoryName.name)*/
        //то, что выше можно и по другому:

        const {name} = list.find((item) => item.id === id * 1)
        setCat(name)

    }, [list, id]);
    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setParams({...params, ...values})
    }

    return (
        <section className={styles.wrapper}>
            <h2>{cat}</h2>
            <form className={styles.filters} onSubmit={handleSubmit}>
                <div className={styles.filter}>
                    <input type="text"
                           name="title"
                           placeholder="Product name"
                           onChange={handleChange}
                           value={values.title}
                    />
                </div>
                <div className={styles.filter}>
                    <input type="number"
                           name="price_min"
                           placeholder="0"
                           onChange={handleChange}
                           value={values.price_min}
                    />
                </div>
                <div className={styles.filter}>
                    <input type="number"
                           name="price_max"
                           placeholder="0"
                           onChange={handleChange}
                           value={values.price_max}
                    />
                </div>
                <button type="submit" hidden/>
            </form>
            {isLoading ? (
                    <div className="preloader">
                        Loading...
                    </div>) :
                !isSuccess || !items.length ? (
                    <div className={styles.back}>
                        <span>No results</span>
                        <button>Reset</button>
                    </div>
                ) : (
                    <Products title=""
                              products={items}
                              style={{padding: 0}}
                              amount={items.length}
                    />
                )}
            {!isEnd && (
                <div className={styles.more}>
                    <button
                        onClick={() =>
                            setParams({...params, offset: params.offset + params.limit})
                        }
                    >
                        See more
                    </button>
                </div>
            )}
        </section>
    );
};

export default Category;