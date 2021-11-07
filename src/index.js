import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router  } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import browserHistory from './browser-history';
import App from './components/app/app';
import { fetchRates } from './store/api-actions';
import { reducer } from './store/reducer';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(fetchRates());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App/>
    </Router>
  </Provider>,
  document.querySelector(`#root`)
);