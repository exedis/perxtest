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
    setCounterProd(counterProd + 1);
    changeCountHandler(name, price, counterProd);
  };

  const removeCountHandler = (name, price) => {
    if (counterProd > 1) {
      setCounterProd(counterProd - 1);
      changeCountHandler(name, price, counterProd);
    }
  };

  return (
    <tr key={index} className={styles.basketRow}>
      <td>{index}</td>
      <td>
        <img className={styles.img} src={img} alt={name} />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
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
      </td>
      <td>{cost ?? price}</td>
      <td>
        <button onClick={() => removeHandler(name, price, counter)}>X</button>
      </td>
    </tr>
  );
};

export default BasketRow;
