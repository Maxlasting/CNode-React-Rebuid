import React from 'react'
import ReactDOM from 'react-dom'

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'

import AppRouter from './router/appRouter.js'
import reducer from './store'

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : compose
))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
