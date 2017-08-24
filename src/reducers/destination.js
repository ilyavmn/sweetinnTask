function destination(state = {}, action) {

  const updatePhotosStack = () => {
    let new_state = (action.data.page === 1) ? action.data.photo : [...state.data, ...action.data.photo];
    
    return Object.assign({}, state, {
      data: new_state,
      time: getCurrentTime(),
      term: '',
      pagination: {
        current: state.pagination.current + 1,
        total: action.data.pages
      } 
    })
  }

  const getCurrentTime = () => {
    return new Date().toLocaleString();
  }

  switch (action.type) {
    case "GOT_RESPONSE":
      return updatePhotosStack();
    case "CLEAR_DATA":
      return Object.assign({}, state, { data: [] })
    case "REQUEST_TRACKS":
      return state;
    default:
      return state  
  }
}

export default destination;