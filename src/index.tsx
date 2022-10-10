import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import EZClinik from "./ezClinik/EZClinik";
import store from "./ezClinik/store/redux/store";
import persistStore from "redux-persist/es/persistStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <EZClinik />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
