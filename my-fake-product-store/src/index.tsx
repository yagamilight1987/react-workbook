import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { thunk as reduxThunk } from 'redux-thunk';
import './index.css';
import App from './components/App';
import reducers from './reducers';
import { makeServer } from './__mock__';

const INITIAL_STATE: any = {
  productState: {
    products: [],
    filters: {},
    sort: 'asc',
  },
  categories: [],
};

if (process.env.REACT_APP_ENABLE_MOCK) {
  makeServer({ environment: 'development' });
  INITIAL_STATE.authState = {
    token: 'dummy_token',
    userInfo: {
      address: {
        geolocation: { lat: '-37.3159', long: '81.1496' },
        city: 'kilcoole',
        street: 'Lovers Ln',
        number: 7267,
        zipcode: '12926-3874',
      },
      id: 2,
      email: 'morrison@gmail.com',
      username: 'mor_2314',
      password: '83r5^_',
      name: { firstname: 'david', lastname: 'morrison' },
      phone: '1-570-236-7033',
      __v: 0,
    },
  };
}

const element: HTMLElement | null = document.getElementById('root');
if (element) {
  const root: Root = createRoot(element);

  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(
    applyMiddleware(reduxThunk)
    // other store enhancers if any
  );

  const store = createStore(reducers, INITIAL_STATE, enhancer);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
