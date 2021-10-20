import { useSelector, useDispatch } from "react-redux";
import { BasketRow, UserFields } from "./molecules";
import styles from "./Basket.module.scss";
import {
  REMOVE_GOODS,
  REMOVE_GOODS_ALL,
  CHANGE_GOODS_COUNT,
} from "../../constants";

const Basket = () => {
  const getGoods = useSelector((state) => state.basketHandler.goods);
  const getTotalCost = useSelector((state) => state.basketHandler.totalCost);

  const dispatch = useDispatch();

  const onRemove = (name, price, counter) => {
    dispatch({
      type: REMOVE_GOODS,
      payload: {
        name,
        price,
        counter,
      },
    });
  };

  const onChangeCount = (name, price, counter) => {
    dispatch({
      type: CHANGE_GOODS_COUNT,
      payload: {
        name,
        price,
        counter,
      },
    });
  };

  const removeAllGoods = () => {
    dispatch({
      type: REMOVE_GOODS_ALL,
    });
  };

  return (
    <div className={styles.baskedTable}>
      {getGoods?.length > 0 ? (
        <div>
          <div className={styles.basketWrapper}>
            <div className={styles.goodsList}>
              {getGoods.map((good, index) => (
                <BasketRow
                  key={index}
                  index={index + 1}
                  img={good.img}
                  name={good.name}
                  price={good.price}
                  counter={good.counter}
                  cost={good.cost}
                  removeHandler={(name, price, counter) =>
                    onRemove(name, price, counter)
                  }
                  changeCountHandler={(name, price, counter) =>
                    onChangeCount(name, price, counter)
                  }
                />
              ))}
            </div>
            <div className={styles.checkInfo}>
              {getTotalCost && (
                <div>
                  {" "}
                  <span className={styles.fullPrice}>Итого:</span>{" "}
                  {getTotalCost.toFixed(2)} $
                </div>
              )}
              <div>
                <button className={styles.removeAll} onClick={removeAllGoods}>
                  Удалить все!
                </button>
              </div>
            </div>
          </div>
          <UserFields />
        </div>
      ) : (
        <div>Товаров нет!</div>
      )}
    </div>
  );
};

export default Basket;
