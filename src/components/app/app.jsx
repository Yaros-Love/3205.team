import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { fetchRates } from '../../store/api-actions';
import Converter from '../converter/converter';
import CurrentRate from '../current-rate/current-rate';
import NotFoundPage from '../not-found/not-found';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRates())
  }, []);

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