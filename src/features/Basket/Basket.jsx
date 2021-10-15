import { useSelector, useDispatch } from "react-redux";
import { BasketRow } from "./molecules";
import styles from "./Basket.module.scss";
import { REMOVE_GOOD } from "../../constants";

const Basket = () => {
  const getGoods = useSelector((state) => state.basketHandler.goods);

  const dispatch = useDispatch();

  const onRemoveHandler = (name, price, counter) => {
    dispatch({
      type: REMOVE_GOOD,
      payload: {
        name,
        price,
        counter,
      },
    });
  };

  return (
    <div className={styles.baskedTable}>
      {getGoods.length > 0 ? (
        <div>
          <table border={"1"} cellSpacing={"0"} bordercolor={"#303030"}>
            <tbody>
              <tr>
                <td></td>
                <td>Изображение</td>
                <td>Наименование</td>
                <td>Цена за один товар</td>
                <td>Количество</td>
                <td>Цена</td>
                <td>Удалить</td>
              </tr>

              {getGoods.map((good, index) => (
                <BasketRow
                  key={index}
                  index={index + 1}
                  img={good.img}
                  name={good.name}
                  price={good.price}
                  counter={good.counter}
                  cost={good.cost}
                  removeHandler={(name, price,counter) =>
                    onRemoveHandler(name, price, counter)
                  }
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Товаров нет!</div>
      )}
    </div>
  );
};

export default Basket;
