import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Converter from '../converter/converter';
import CurrentRate from '../current-rate/current-rate';
import NotFoundPage from '../not-found/not-found';

const App = () => {
  return(
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Converter/>
          </Route>
          <Route exact path="/current-rate">
            <CurrentRate/>
          </Route>
          <Route>
            <NotFoundPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;