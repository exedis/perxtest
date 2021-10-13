import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { ProductItem } from './molecules';
import styles from './ProductList.module.scss';

const ProductList = () => {

    const [productList, setproductList] = useState([]);

    useEffect(() => {
        const apiUrl = `https://murmuring-tor-81614.herokuapp.com/api/goods/`;
        axios.get(apiUrl).then((res) => {
            setproductList(res.data);
        });
    }, [setproductList]);

    if(!productList){
        return 'Загрузка...';
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