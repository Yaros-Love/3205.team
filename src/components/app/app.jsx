import React from 'react';
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import Converter from '../converter/converter';
import CurrentRate from '../current-rate/current-rate';
import NotFoundPage from '../not-found/not-found';

const App = ({ currentLanguage, currentRate }) => {
  return(
    <React.Fragment>
        <Switch>
          <Route exact path="/">
            <Converter currentLanguage={currentLanguage} currentRate={currentRate}/>
          </Route>
          <Route exact path="/current-rate">
            <CurrentRate currentLanguage={currentLanguage}/>
          </Route>
          <Route>
            <NotFoundPage/>
          </Route>
        </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    currentLanguage: state.currentLanguage,
    currentRate: state.currentRate,
  };
};

export default connect(mapStateToProps, null)(App);