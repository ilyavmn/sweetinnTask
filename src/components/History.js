import React, { Component } from 'react';
import { toggleHistory, clearHistory } from '../actions/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';


class History extends Component{
  render(){
    let is_history_open = !!this.props.search_history.is_open;
    
    return(
      <div>
        <div className="history-wrapper">
          <a className="history-button" onClick={ (e) => {e.preventDefault(); this.props.actions.toggleHistory()} }>
            <span className={`arrow ${is_history_open ? 'open' : 'close'}`}></span>History
          </a>
          {
            is_history_open ?
              <ul>
                {
                  this.props.search_history.collection.map( (item, i) => {
                    return(
                      <li key={i}>
                        <Link to={`/results/${item.term}`}>{item.term} <span className="search-time">({item.time}) from: Flickr - {item.total} results</span></Link>
                      </li>
                    ) 
                  })
                }
                <li key="a"><a href="/" onClick={(e) => { e.preventDefault(); this.props.actions.clearHistory() }} className="history-clear" >Clear</a></li>
              </ul>
            :
              null
          }
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      toggleHistory: bindActionCreators(toggleHistory, dispatch),
      clearHistory: bindActionCreators(clearHistory, dispatch),
    }
  };
}

export default connect(null, mapDispatchToProps)(History);
