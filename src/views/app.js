import React, { Component } from 'react'
import IndexRouter from '../router/indexRouter.js'
import '../styles/default.scss'
import CommonHeader from './commonHeader.js'
import CommonFooter from './commonFooter.js'
import InitLoginStatus from './initLoginStatus.js'

class App extends Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div id="app">
        <InitLoginStatus/>
        <CommonHeader/>
        <IndexRouter/>
        <CommonFooter/>
      </div>
    )
  }
}

export default App
