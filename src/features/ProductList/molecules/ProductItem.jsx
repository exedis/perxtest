import React, { useState } from "react";
import classnames from "classnames";
import styles from "./ProductItem.module.scss";
import { useDispatch } from "react-redux";
import { ADD_GOOD } from "../../../constants";

const ProductItem = ({ name, price, img }) => {
  const [counter, setCounter] = useState(1);

  const dispatch = useDispatch();

  const checkImg =
    img ?? "https://murmuring-tor-81614.herokuapp.com/logo/node.png";
  const checkName = name ?? "Товар";
  const checkPrice = price ?? 0;

  const addCountHandler = () => {
    setCounter(counter + 1);
  };

  const removeCountHandler = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const addBasketHandler = () => {
    dispatch({ type: ADD_GOOD, payload: {
        name:checkName,
        price:checkPrice,
        img:checkImg,
        counter
    } });
  };

  return (
    <div className={styles.productItem}>
      <img className={classnames(styles.img)} src={checkImg} alt={checkName} />

      <div className="name">{checkName}</div>
      <div className="price">{checkPrice}$</div>

      <div className={styles.counter}>
        <button
          className={classnames(styles.button, styles.add)}
          onClick={removeCountHandler}
        >
          -
        </button>
        <input className={styles.input} type="text" value={counter} readOnly />
        <button
          className={classnames(styles.button, styles.remove)}
          onClick={addCountHandler}
        >
          +
        </button>
      </div>

      <button className={styles.addBasket} onClick={addBasketHandler}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default ProductItem;
