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
  return (
    <tr key={index} className={styles.basketRow}>
      <td>{index}</td>
      <td>
        <img className={styles.img} src={img} alt={name} />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{counter}</td>
      <td>{cost ?? price}</td>
      <td>
        <button onClick={() => removeHandler(name, price, counter)}>X</button>
      </td>
    </tr>
  );
};

export default BasketRow;
