import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ac_userLogin } from '../store'
import { Card, Form, Input, Icon, Button, Checkbox, message } from 'antd'
import '../styles/userLogin.scss'

const FormItem = Form.Item

@connect(
  state => state,
  {
    ac_userLogin
  }
)
class UserLogin extends Component {
  constructor() {
    super()
  }

  componentWillMount () {
    if (this.props.state_userLoginData) {
      this.props.history.replace('/')
    }
  }

  userLogin = async (e) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        await this.props.ac_userLogin(values)
        this.props.history.push('/')
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { userLogin } = this
    const { mu_toggleLoginRequestLoaded, state_userLoginData } = this.props

    if (state_userLoginData) return null

    return (
      <div className="userLoginContainer">
        <div className="content">
          <Card title={ '用户登陆' }>
            <Form onSubmit={ userLogin }>
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入用户名!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名/手机号/邮箱" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="账户密码" />
                )}
              </FormItem>
              <FormItem>
                没有账号？ <a href="/register">现在注册!</a>
                <a style={{ float: 'right' }}>忘记密码？</a>
                <Button style={{ width: '100%', marginTop: 10 }} type="primary" htmlType="submit" loading={ mu_toggleLoginRequestLoaded }>
                  登录
              </Button>
              </FormItem>
            </Form>
          </Card>
        </div>
      </div>
    )
  }
}

export default Form.create()(UserLogin)
