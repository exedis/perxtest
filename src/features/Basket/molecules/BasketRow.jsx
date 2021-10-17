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
}) => {

  const [counterProd, setCounterProd] = useState(counter);
  const addCountHandler = () => {
    setCounterProd(counterProd + 1);
  };

  const removeCountHandler = () => {
    if (counterProd > 1) {
      setCounterProd(counterProd - 1);
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
            onClick={removeCountHandler}
          >
            -
          </button>
          <input className={styles.input} type="text" value={counterProd} readOnly />
          <button
            className={classnames(styles.button, styles.remove)}
            onClick={addCountHandler}
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
