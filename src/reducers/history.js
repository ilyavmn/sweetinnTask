function history(state = {}, action) {

  switch (action.type) {
    case "UPDATE_HISTORY":
      return Object.assign({}, state, {
        is_open: false,
        collection: [...state.collection || [], {term: action.search_term, time: action.time, total: action.data.total }]
      });
    case "TOGGLE_HISTORY":
      return Object.assign({}, state, {
        is_open: !state.is_open,
        collection: state.collection
      });
    case "CLEAR_HISTORY":
      return Object.assign({}, state, { collection: [] });
    default:
      return state;
  }
}

export default history;
