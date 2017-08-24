import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
// import { fetchData } from "./actions/actionCreators";

import reducers from "./reducers/index";

const loggerMiddleware = createLogger();

const initialState = {
  search_history: {
    is_open: false,
    collection: []
  },
  current_query: {
    time: '',
    data: [],
    pagination: {
      current: 0,
      total: 0
    }
  },
  current_search_term: '', 
  loading: false
};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    thunkMiddleware, 
    loggerMiddleware
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.dispatch(fetchData())

export default store;