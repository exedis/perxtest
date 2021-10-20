import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductItem } from "./molecules";
import styles from "./ProductList.module.scss";
import loader from "../../assets/img/loader.svg";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const loadFormServer = () => {
    let dealrsId = "";
    if (document.dealers?.length) {
      dealrsId = document.dealers.join(",");
    }
    const apiUrl = `https://murmuring-tor-81614.herokuapp.com/api/goods/?dealers=${dealrsId}`;
    axios.get(apiUrl).then((res) => {
      setProductList(res.data);
    });
  };

  useEffect(() => {
    loadFormServer();
  }, []);

  if (!productList.length) {
    return (
      <div className={styles.productLoaderWrapper}>
        <img src={loader} alt="" />
      </div>
    );
  }

  return (
    <div className={styles.productList}>
      {productList.map((item, index) => (
        <ProductItem
          key={index}
          name={item.name}
          price={item.price}
          img={item.img}
        />
      ))}
    </div>
  );
};

export default ProductList;
