import React, {useEffect, useState} from 'react';
import s from '../../styles/Product.module.css'
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import {useDispatch} from "react-redux";
import {addItemToCard} from "../../features/user/userSlice";

const SIZES = [5, 5.5, 6];

const Product = (item) => {
    const {images, title, price, description} = item
    const dispatch = useDispatch();


    const [currentImage, setCurrentImage] = useState();
    const [currentSize, setCurrentSize] = useState();

    useEffect(() => {
        if(!images.length) return;
        setCurrentImage(images[0])
    }, [images]);

    const addToCard = () => {
        dispatch(addItemToCard(item))
    }

    return (
        <section className={s.product}>
            <div className={s.images}>
                <div className={s.current}
                     style={{backgroundImage: `url(${currentImage})`}}
                />
                <div className={s["images-list"]}>
                    {images.map((image) => (
                        <div className={s.image}
                             style={{backgroundImage: `url(${image})`}}
                             key={image}
                             onClick={() => {
                                 setCurrentImage(image)
                             }}
                        />
                    ))}
                </div>
            </div>
            <div className={s.info}>
                <h1 className={s.title}>{title}</h1>
                <div className={s.price}>{price} $</div>
                <div className={s.color}><span>Color:</span>Green</div>
                <div className={s.sizes}>
                    <span>Sizes:</span>
                    <div className={s.list}>
                        {SIZES.map((size) => (
                            <div className={`${s.size} ${currentSize === size ?
                                s.active : ""}`}
                                 key={size}
                                 onClick={() => {
                                     setCurrentSize(size)
                                 }}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <p className={s.description}>{description}</p>
                <div className={s.actions}>
                    <button className={s.add}
                            disabled={!currentSize}
                            onClick={addToCard}
                    >
                        Add to cart
                    </button>
                    <button className={s.add}>
                        Add to favorites
                    </button>
                </div>
                <div className={s.bottom}>
                    <div className={s.purchase}>19 people purchased</div>

                    <Link to={ROUTES.HOME}>
                        Return to store
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Product;