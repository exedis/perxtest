import React, { useState } from "react";
import classnames from "classnames";
import styles from "./BasketRow.module.scss";

const BasketRow = ({
  index,
  img,
  name,
  price,
  counter,
  cost,
  removeHandler,
  changeCountHandler,
}) => {
  const [counterProd, setCounterProd] = useState(counter);

  const addCountHandler = (name, price) => {
    const newVal = counterProd + 1;
    setCounterProd(counterProd + 1);
    changeCountHandler(name, price, newVal);
  };

  const removeCountHandler = (name, price) => {
    if (counterProd > 1) {
      const newVal = counterProd - 1;
      setCounterProd(newVal);
      changeCountHandler(name, price, newVal);
    }
  };

  return (
    <div key={index} className={styles.basketRow}>
      <div className="img">
        <img className={styles.img} src={img} alt={name} />
      </div>
      <div className={styles.prodInfo}>
        <div className={styles.top}>
          <div className={styles.name}>{name}</div>
          <div className={styles.countWrapper}>
            <div className={styles.counter}>
              <button
                className={classnames(styles.button, styles.add)}
                onClick={() => removeCountHandler(name, price)}
              >
                -
              </button>
              <input
                className={styles.input}
                type="text"
                value={counterProd}
                readOnly
              />
              <button
                className={classnames(styles.button, styles.remove)}
                onClick={() => addCountHandler(name, price)}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.price}>Цена: {price} $</div>
        </div>
        <div className="bottom">
          <div className="deleteWrap">
            <button
              className={classnames(styles.button, styles.delete)}
              onClick={() => removeHandler(name, price, counter)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketRow;
