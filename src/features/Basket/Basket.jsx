import {useSelector, useDispatch} from "react-redux";
import {BasketRow} from "./molecules";
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
                    {/*<table className={styles.table} border={1} cellSpacing={0}>*/}
                    {/*  <tbody>*/}
                    {/*    <tr className={styles.tableHead}>*/}
                    {/*      <td></td>*/}
                    {/*      <td>Изображение</td>*/}
                    {/*      <td>Наименование</td>*/}
                    {/*      <td>Цена за один товар ($)</td>*/}
                    {/*      <td>Количество</td>*/}
                    {/*      <td>Сумма ($)</td>*/}
                    {/*      <td>Удалить</td>*/}
                    {/*    </tr>*/}
                    <div className="basketWrapper">
                        <div className="goodsList">
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
                        <div className="checkInfo">
                            <div>
                                <button className={styles.removeAll} onClick={removeAllGoods}>Удалить все!</button>
                            </div>
                            {getTotalCost && <div>Итого: {getTotalCost} $</div>}
                        </div>
                    </div>
                    {/*  </tbody>*/}
                    {/*</table>*/}

                </div>
            ) : (
                <div>Товаров нет!</div>
            )}
        </div>
    );
};

export default Basket;
