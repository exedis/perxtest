import { createStore, combineReducers } from "redux";
import { basketReducer } from "./reducers/basketReducer";
import { counterBasketReducer } from "./reducers/counterBasketReducer";

const rootReducer = combineReducers({
  basketHandler: basketReducer,
  //counter: counterBasketReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
