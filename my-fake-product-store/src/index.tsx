import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { thunk as reduxThunk } from 'redux-thunk';
import './index.css';

import App from './components/App';
import reducers from './reducers';

import { makeServer } from './__mock__';

if (process.env.REACT_APP_ENABLE_MOCK) {
  makeServer({ environment: 'development' });
}

const element: HTMLElement | null = document.getElementById('root');
if (element) {
  const root: Root = createRoot(element);

  const INITIAL_STATE: any = {
    productState: {
      products: [],
      filters: {},
      sort: 'asc',
    },
    categories: [],
  };

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
