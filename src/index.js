import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import {
  persistStore
} from 'redux-persist'

let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={<div>load</div>} persistor={persistor}> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);
