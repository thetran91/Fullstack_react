import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

/* Ham render co 2 parameters la phan tu can reder va dia chi render phan tu do */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
console.log('STRIPE KEY:', process.env.REACT_APP_STRIPE_KEY);
console.log('NODE ENVIRONMENT:', process.env.NODE_ENV);
