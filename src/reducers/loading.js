function loading(state = {}, action) {
  switch (action.type) {
    case "START_LOADER":
      return !state
    case "END_LOADER":
      return !state
    default:
      return state  
  }
}

export default loading;