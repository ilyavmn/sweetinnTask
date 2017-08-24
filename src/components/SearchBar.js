import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/actionCreators';

import History from './History';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.props = props;
    this.props.history.listen((location, action) => {
      window.scrollTo(0, 0)
    });

    this.get_search_data = this.get_search_data.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  
  get_search_data(e){
    e.preventDefault();
    let search_term = this.search_input.value;
    if( !search_term ) { return }

    this.props.history.push('/results/'+search_term)  
    this.props.actions.fetchData(search_term, true);
  }

  handleBlur(){
    this.search_input.value = '';
  }

  handleKeyPress(target) {
    if(target.charCode === 13){
      this.get_search_data(target);
    }
  }

  render(){
    let is_history_available = !!this.props.search_history.collection && this.props.search_history.collection.length > 0;

    return(
      <div className="search-bar-wrapper">
        <input type="text" placeholder="Search Locations" onBlur={this.handleBlur} defaultValue={this.props.current_search_term} onKeyPress={this.handleKeyPress} ref={(search_input) => this.search_input = search_input}/>
        <a href="/" className="search-button" onClick={(e) => this.get_search_data(e)}>
        </a>
        { 
          is_history_available ? 
            <History search_history={this.props.search_history}/>
          :
            null  
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetchData: bindActionCreators(fetchData, dispatch),
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));

