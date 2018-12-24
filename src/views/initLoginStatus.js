import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ac_checkLoginStatus }  from '../store'

@connect(
  state => state,
  { ac_checkLoginStatus }
)
class InitLoginStatus extends Component {
  async componentDidMount() {
    await this.props.ac_checkLoginStatus()
  }
  
  render() {
    return null
  }

}

export default InitLoginStatus
