import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import inkblotReducer from './reducers/inkblotReducer'

const store = createStore(inkblotReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <div>
          <App />
        </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
