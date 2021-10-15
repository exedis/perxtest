import { ADD_GOOD, REMOVE_GOOD } from "../../constants";

const defaultState = {
  goods: [],
  totalCount: 0,
};

export const basketReducer = (state = defaultState, action) => {
  const addGood = (payload) => {
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
        accum[doublesIndex].cost = Number(totalcount) * Number(val.price);
      }
      return accum;
    }, []);

    return {
      ...state,
      goods: [...uniqueGoods],
      totalCount: state.totalCount + payload.counter,
    };
  };

  switch (action.type) {
    case ADD_GOOD:
      return addGood(action.payload);

    case REMOVE_GOOD:
      return {
        ...state,
        goods: state.goods.filter(
          (good) =>
            good.price !== action.payload.price &&
            good.name !== action.payload.name
        ),
        totalCount: state.totalCount - action.payload.counter,
      };

    default:
      return state;
  }
};
