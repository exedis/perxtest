import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { ProductItem } from './molecules';
import styles from './ProductList.module.scss';
import loader from '../../assets/img/loader.svg'

const ProductList = () => {

    const [productList, setProductList] = useState([]);
   // const [dealerList, setDealerList] = useState([]);



    // useEffect(() => {
    //     const timeout = setInterval(function() {
    //         if(document.dealers) {
    //             clearInterval(timeout); 
    //             setDealerList(document.dealers);
    //             const dealrsId = document.dealers.split(',');
    //             const apiUrl = `https://murmuring-tor-81614.herokuapp.com/api/goods/?dealers=${dealrsId}`;
    //             //
    //             axios.get(apiUrl).then((res) => {
    //                 setProductList(res.data);
    //             });
    //         }
    //     }, 100);
    //     return() => timeout;
    // }, [setDealerList])

    useEffect(() => {
        const apiUrl = `https://murmuring-tor-81614.herokuapp.com/api/goods/`;
        axios.get(apiUrl).then((res) => {
            setProductList(res.data);
        });
    }, [setProductList]);

    if (!productList.length) {
        return <div className={styles.productLoaderWrapper}>
            <img src={loader} alt="" />
        </div>;
    }

    return (
        <div className={styles.productList}>
            {productList.map((item, index) => (
                <ProductItem key={index} name={item.name} price={item.price} img={item.img} />
            ))}
        </div>
    );
};

export default ProductList;