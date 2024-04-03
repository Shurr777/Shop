import React from 'react';
import {useParams} from "react-router-dom";
import {useGetProductQuery} from "../../features/api/apiSlice";

const SingleProduct = () => {

    const {id} = useParams();


    const {data} = useGetProductQuery({id})

    console.log("Data", data)

    return (
        <section>
            SingleProduct
        </section>
    );
};

export default SingleProduct;