import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import store from "./store";

import App from "./App";

import { syncHistoryWithStore } from 'react-router-redux';
const history = syncHistoryWithStore(createBrowserHistory(), store);

const Main = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));