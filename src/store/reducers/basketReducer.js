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
    // let cacheState = [];
    // cacheState = {
    //   ...state,
    //   goods: [...state.goods, payload],
    // };
    const uniqueGoods = state.goods?.reduce((accum, val) => {
      const doublesIndex = accum.findIndex(
        (arrayItem) =>
        arrayItem.price === payload.price //&& arrayItem.name === payload.name
      );

      if (doublesIndex === -1) {
        accum.push({
          ...val,
        });
      } else {
        console.log('count', payload);
        let prodCount = accum[doublesIndex].counter + payload.counter;
        console.log('prodCount', prodCount);
        accum[doublesIndex].counter = prodCount;
        //  accum[doublesIndex].cost = Number(payload.counter * val.price);
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

  const addGoods = (payload) => {
    let cacheState = [];
    cacheState = {
      ...state,
      goods: [...state.goods, payload],
    };
    //  if (cacheState.goods.length > 0) {
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
    // } else {
    //   return {
    //     ...state,
    //     goods: [...state.goods, payload],
    //     totalCount: state.totalCount + payload.counter,
    //     totalCost: (state.totalCost + Number(payload.price * payload.counter)),
    //   };
    // }
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
