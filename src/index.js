import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import billReducer from './store/Reducers/bill-reducer'
import serviceReducer from './store/Reducers/service-reducer'
import planReducer from './store/Reducers/plan-reducer'

const rootReducer = combineReducers({
  bill: billReducer, 
  service: serviceReducer,
  plan: planReducer
})

// const store = createStore(billReducer)
const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
