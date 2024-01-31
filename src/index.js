import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import './index.css';
import App from './containers/App';
import 'tachyons';

import {searchRobotsReducer, requestRobotsReducer} from './slice'

const logger = createLogger();

const store = configureStore ({
  reducer: {
      searchRobots: searchRobotsReducer, 
      requestRobots: requestRobotsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);

