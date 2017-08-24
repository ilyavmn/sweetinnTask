import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';
import { connect } from 'react-redux';

import Search from './components/Search';
import Destination from './components/Destination';

import './css/App.css';
class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        { this.props.loading && <div className="big-loader"><div className="loader-dots"></div></div> }
        <Route path="/" exact render={ () => <div className="home-wrapper"><Search searchName="home-search"/></div> } /> 
        <Route path="/results/:query" render={ (props) => <Destination {...props} /> } /> 
      </div>
    );
  }
}

function mapStateToProps(state) {
    return state;
}

export default withRouter(connect(mapStateToProps)(App));
