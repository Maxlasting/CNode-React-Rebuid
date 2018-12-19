import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Form, Input, Icon, Button, Checkbox, message } from 'antd'
import '../styles/userLogin.scss'

const FormItem = Form.Item

class UserLogin extends Component {
  constructor() {
    super()
  }
  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className="userLoginContainer">
        <div className="content">
          <Card title={ '用户登陆' }>
            <Form onSubmit={() => { }}>
              <FormItem>
                {getFieldDecorator('name', {
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
                没有账号？ <a href="">现在注册!</a>
                <a style={{ float: 'right' }} href="">忘记密码？</a>
                <Button style={{ width: '100%', marginTop: 10 }} type="primary" htmlType="submit">
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
