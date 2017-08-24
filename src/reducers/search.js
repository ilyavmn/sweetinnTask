function search(state = {}, action) {
  switch (action.type) {
    case "REQUEST_START":
      return action.data;
    default:
      return state  
  }
}

export default search;