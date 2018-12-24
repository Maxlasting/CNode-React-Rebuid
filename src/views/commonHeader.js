import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ac_userLogout } from '../store'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Col, Row, Menu, Icon, Dropdown, Avatar } from 'antd'
import { navLinkConfig, userLinkConfig } from '../utils/config.js'
import '../styles/commonHeader.scss'

@withRouter
@connect(
  state => state,
  {
    ac_userLogout
  }
)
class CommonHeader extends Component {
  handleUserLogout = async () => {
    await this.props.ac_userLogout()
  }

  render () {
    const currentKey = this.props.history.location.pathname
    const { state_userLoginData } = this.props
    const { avatar_url, loginname } = state_userLoginData || {}
    const { handleUserLogout } = this
    
    const userMenu = (
      <Dropdown 
        overlay={
          <Menu style={{minWidth: 180, textAlign: "center", transform: 'translateY(10px)'}}>
            <Menu.Item>
              <Link to='/write'>发布话题</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/user'>用户中心</Link>
            </Menu.Item>
            <Menu.Item>
              <div onClick={ handleUserLogout }>退出登陆</div>
            </Menu.Item>
          </Menu>
        }
        placement="bottomCenter"
      >
        <div className="userInfo">
          <Avatar size="small" icon="user" src={ avatar_url } />
          <h3 className="name">{ loginname }</h3>
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
                {
                  state_userLoginData ? userMenu : (
                    <Link className="item" to="/login">
                      登陆 / 注册
                    </Link>
                  )
                }
              </div>
            </Col>
          </Row>
        </div>
      </header>
    )
  }
}

export default CommonHeader
