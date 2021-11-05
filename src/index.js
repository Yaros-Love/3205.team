import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import App from './components/app/app';
import { reducer } from './store/reducer';

const store = createStore(
  reducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.querySelector(`#root`)
);