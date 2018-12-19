import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import App from '../views/app.js'
import Login from '../views/userLogin.js'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: App
  }
]

export default () => (
  <Switch>
    <Route path="/" exact render={() => (<Redirect to="/index" />)}/>
    {
      routes.map((route, i) => (
        <Route
          path={route.path}
          key={i}
          component={route.component}
        />
      ))
    }
  </Switch>
)
