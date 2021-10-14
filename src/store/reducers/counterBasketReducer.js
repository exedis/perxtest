import { ADD_GOOD, REMOVE_GOOD } from "../../constants";

const defaultState = {
  basketCount: 0,
};

export const counterBasketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_GOOD:
      return { ...state, basketCount: state.basketCount + action.payload };

    case REMOVE_GOOD:
      return { ...state, basketCount: state.basketCount - action.payload };

    default:
      return state;
  }
};
