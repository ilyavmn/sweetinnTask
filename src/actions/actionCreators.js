import axios from "axios";

const flickr_api_url = 'https://api.flickr.com/services/rest/';
const getCurrentTime = () => {
    return new Date().toLocaleString();
  }

export const clearHistory = () => {
  return {
    type: 'CLEAR_HISTORY'
  }
}

export const updateHistory = (query, response) => {
  return {
    type: 'UPDATE_HISTORY',
    data: response,
    search_term: query,
    time: getCurrentTime()
  }
}

export const startLoader = () => {
  return {
    type: 'START_LOADER',
  }
}

export const endLoader = () => {
  return {
    type: 'END_LOADER',
  }
}

export const requestStart = (data) => {
  return {
    type: 'REQUEST_START',
    data
  }
}

export const gotResponse = (query, response) => {
  return {
    type: 'GOT_RESPONSE',
    data: response,
    search_term: query
  }
}

export const clearData = () => {
  return {
    type: 'CLEAR_DATA',
  }
}

export const responseFail = (response) => {
  return {
    type: 'RESPONSE_FAIL',
    data: response
  }
}

export const fetchData = (query = 'tel-aviv', update_history = true, next_page = 1, url = flickr_api_url) => {
  return dispatch => {
    dispatch(requestStart(query));
    dispatch(startLoader());

    axios.get(url, {
      params: {
        method: 'flickr.photos.search',
        api_key: 'c4e4af637382e236ca9ac6171b52f71b',
        format: 'json',
        nojsoncallback: 1,
        tags: query, 
        page: next_page
      }
    })
    .then(function(response) {
      return response
    }).then(function(json) {
      dispatch(gotResponse(query, json.data.photos));
      if(update_history){
        dispatch(updateHistory(query, json.data.photos));
      }
      dispatch(endLoader());
    }).catch(function(ex) {
      dispatch(endLoader());
      console.log('parsing failed', ex)
    })
  }
}

export const toggleHistory = () => {
  return {
    type: 'TOGGLE_HISTORY'
  }
}



