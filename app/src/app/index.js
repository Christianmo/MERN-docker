import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "redux/store";
import Login from "app/screens/Login";
import Advertisements from "app/screens/Advertisements/index.tsx";
import ROUTES from "constants/routes";

import "normalize.css";
import "font-awesome/css/font-awesome.css";
import "scss/base/index.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path={ROUTES.ROOT} component={Login} exact />
          <Route path={ROUTES.ADVERTISEMENT} component={Advertisements} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
