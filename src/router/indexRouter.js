import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from '../views/indexTopicList.js'
import Detail from '../views/detailTopicInfo.js'
import Study from '../views/study.js'
import About from '../views/about.js'

const routes = [
  {
    path: '/index',
    component: Index
  },
  {
    path: '/detail/:topicId',
    component: Detail
  },
  {
    path: '/study',
    component: Study
  },
  {
    path: '/about',
    component: About
  }
]

export default () => (
  <div className="mainContent">
    <Switch>
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
  </div>
)
