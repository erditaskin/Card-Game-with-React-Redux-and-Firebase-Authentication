import React from "react";
import ReactDOM from "react-dom";
import store from "store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "store";
import App from "App";
import Loading from "hocs/loading";

import "styles/main.css";
import "styles/responsive.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
