import React from 'react';
import classnames from 'classnames';
import styles from './ProductItem.module.scss';

const ProductItem = ({name,price,img}) => {
   
    const checkImg = img ?? 'https://murmuring-tor-81614.herokuapp.com/logo/node.png';
    const checkName = name ?? 'Товар';
    const checkPrice = `${price}$` ?? 'Нет в наличии';
    return (
        <div className={styles.productItem}>
            <img classnames = {classnames(styles.img, {[styles.loading]: !checkName})} src={checkImg} alt={checkName}/>
            <div className="name">{checkName}</div>
            <div className="price">{checkPrice}</div>
            <button className={styles.add}>Добавить в корзину</button>
        </div>
    );
};

export default ProductItem;