import React, { Component } from 'react';

import SearchBar from './SearchBar';

class Search extends Component{
  constructor(props){
    super(props);

    this.props = props;
  }
  render(){    
    return(
      <div className={`search-wrapper ${this.props.searchName}`}>
        <SearchBar />
      </div>
    )
  }
}

export default Search;