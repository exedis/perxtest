import {
  ADD_GOODS,
  CHANGE_GOODS_COUNT,
  REMOVE_GOODS,
  REMOVE_GOODS_ALL,
} from "../../constants";

const defaultState = {
  goods: [],
  totalCount: 0,
  totalCost: 0,
};

export const basketReducer = (state = defaultState, action) => {
  const changeProdCount = (payload) => {
    let totalCount = 0;
    let totalCost = 0;
    const newArr = state.goods.map((item) => {
      if (item.price === payload.price && item.name === payload.name) {
        return {
          ...item,
          counter: payload.counter,
        };
      }
      return item;
    });

    for (let i = 0; i <= newArr.length - 1; i++) {
      totalCount += Number(newArr[i].counter);
      totalCost += Number(newArr[i].price * newArr[i].counter);
    }
    return {
      ...state,
      goods: [...newArr],
      totalCount: totalCount,
      totalCost: totalCost,
    };
  };

  const addGoods = (payload) => {
    let cacheState = [];
    cacheState = {
      ...state,
      goods: [...state.goods, payload],
    };
    const uniqueGoods = cacheState.goods?.reduce((accum, val) => {
      const doublesIndex = accum.findIndex(
        (arrayItem) =>
          arrayItem.price === val.price && arrayItem.name === val.name
      );

      if (doublesIndex === -1) {
        accum.push({
          counter: 1,
          ...val,
        });
      } else {
        let totalcount = accum[doublesIndex].counter + val.counter;
        accum[doublesIndex].counter = totalcount;
        accum[doublesIndex].cost = Number(totalcount * val.price);
      }
      return accum;
    }, []);

    return {
      ...state,
      goods: [...uniqueGoods],
      totalCount: state.totalCount + payload.counter,
      totalCost: state.totalCost + Number(payload.price * payload.counter),
    };
  };

  switch (action.type) {
    case ADD_GOODS:
      return addGoods(action.payload);

    case REMOVE_GOODS:
      return {
        ...state,
        goods: state.goods.filter(
          (prod) =>
            prod.price !== action.payload.price &&
            prod.name !== action.payload.name
        ),
        totalCount: state.totalCount - action.payload.counter,
        totalCost:
          state.totalCost -
          Number(action.payload.price * action.payload.counter),
      };

    case REMOVE_GOODS_ALL:
      return {
        ...state,
        goods: [],
        totalCount: 0,
        totalCost: 0,
      };

    case CHANGE_GOODS_COUNT:
      return changeProdCount(action.payload);

    default:
      return state;
  }
};
