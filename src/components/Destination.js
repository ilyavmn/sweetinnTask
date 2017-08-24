import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, clearData } from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { forceCheck } from "react-lazyload";
import LazyImage from "./LazyImage";
import Search from './Search';

class Destination extends Component{
  constructor(props){
    super(props);
    
    this.loadNext = this.loadNext.bind(this);

    this.props.history.listen(location => { 
      let query = location.pathname.split('/');
      let search_term = query[query.length - 1];

      if(location.pathname !== this.props.location.pathname){
        this.props.actions.fetchData(search_term, false); 
      }
    })
  }

  loadNext(){
    forceCheck();
    this.props.actions.fetchData(this.props.current_search_term, false, this.props.current_query.pagination.current + 1);
  }

  render(){
    let got_photos = this.props.current_query.data.length > 0;
    let items = this.props.current_query.data.map((item, index) => {
                  return (
                    <LazyImage key={index} item={item} />
                  )
                });

    let wrapperStyle = {
      height:'100%', 
      overflow:'auto'
    }

    return(
      <div>
        <Search searchName="results-search" />
        <div className="results-wrapper">
          <div style={wrapperStyle} className="results-wrapper">
          { 
            !!got_photos ?  
            <InfiniteScroll
              next={this.loadNext}
              hasMore={this.props.current_query.pagination.current < this.props.current_query.pagination.total}
            >
              
                { items }
              
            </InfiniteScroll>
            : 
            null
          }
          </div>        
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetchData: bindActionCreators(fetchData, dispatch),
      clearData: bindActionCreators(clearData, dispatch),
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Destination);
