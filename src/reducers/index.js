import { routerReducer } from 'react-router-redux';

import destination from './destination';
import search from './search';
import history from './history';
import loading from './loading';

let reducers = (state = {}, action) => {
  return {
    current_query: destination(state.current_query, action),
    current_search_term: search(state.current_search_term, action),
    search_history: history(state.search_history, action),
    loading: loading(state.loading, action),
    routing: routerReducer
  }
}

export default reducers;