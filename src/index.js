import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './components/reducers/reducer'

//thunk
import thunk from  'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,  composeEnhancers(
  applyMiddleware(thunk)
)) 


import App from './components/App.js'

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('app'))