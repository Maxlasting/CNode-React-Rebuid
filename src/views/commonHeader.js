import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Col, Row, Menu, Icon, Dropdown, Avatar } from 'antd'
import { navLinkConfig, userLinkConfig } from '../utils/config.js'
import '../styles/commonHeader.scss'

@withRouter
class CommonHeader extends Component {
  render () {
    const currentKey = this.props.history.location.pathname
    
    const userMenu = (
      <Dropdown 
        overlay={
          <Menu style={{minWidth: 180, textAlign: "center", transform: 'translateY(10px)'}}>
            {
              userLinkConfig.map(itemData => (
                <Menu.Item key={itemData.link}>
                  <Link to={itemData.link}>{itemData.name}</Link>
                </Menu.Item>
              ))
            }
          </Menu>
        }
        placement="bottomCenter"
      >
        <div className="userInfo">
          <Avatar size="small" icon="user" src={''} />
          <h3 className="name">{'宇宙最帅'}</h3>
        </div>
      </Dropdown>
    )

    return (
      <header className="headerContainer">
        <div className="headerContent">
          <Row className="fullHeight">
            {/* 头部 -- 网站标题 */}
            <Col span={4} className="fullHeight">
              <h1 className="title">
                <Link to="/">CNode</Link>
              </h1>
            </Col>

            <Col span={14} className="fullHeight">
              {/* 分隔竖线 */}
              <div className="dvLine"/>

              {/* 主导航菜单 */}
              <Menu
                className="menuStyle"
                mode="horizontal"
                selectable={ false }
                selectedKeys={ [currentKey] }
              >
                {
                  navLinkConfig.map(itemData => (
                    <Menu.Item key={itemData.link}>
                      <Link to={itemData.link}>
                        <Icon type={itemData.icon} /> {itemData.name}
                      </Link>
                    </Menu.Item>
                  ))
                }
              </Menu>
            </Col>

            {/* 登陆注册按钮 */}
            <Col span={6} className="fullHeight">
              <div className="userBtns">
                <Link className="item" to="/login">
                  登陆 / 注册
                </Link>
                {/* { userMenu } */}
              </div>
            </Col>
          </Row>
        </div>
      </header>
    )
  }
}

export default CommonHeader
