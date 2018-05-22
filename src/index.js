import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import index from './__store__/index.reducer'
import App from './screen/app'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

require( 'scss/main.scss' )

const store = createStore(
  index,
  composeEnhancers( applyMiddleware(
    thunkMiddleware,
  ) )
)

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById( 'app' )
)
