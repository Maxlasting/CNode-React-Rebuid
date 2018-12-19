import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ac_getIndexTopicsData } from '../store'
import { Row, Col, Menu, List, Card, Avatar, Tag, Pagination } from 'antd'
import qs from 'querystringify'
import '../styles/topicIndex.scss'
import { tabLinkConfig, topicTypeConfig } from '../utils/config.js'
// import QRCode from '../assets/code.jpeg'

@connect(
  state => state,
  { 
    ac_getIndexTopicsData
  }
)
class TopicIndex extends Component {
  state = {
    initPage: 1,
    initTab: 'all'
  }

  async componentDidMount() {
    const { tab, page } = this.handleGetQueryDataFn()
    const { initTab, initPage } = this.state

    if (!topicTypeConfig[tab] || !(page*1)) {
      this.handleChangeRouteFn(topicTypeConfig[tab] ? tab : initTab, page*1 ? page : initPage)
    }

    await this.props.ac_getIndexTopicsData(this.handleGetQueryDataFn())
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this.props.ac_getIndexTopicsData(
        this.handleGetQueryDataFn(
          nextProps.location.search
        )
      )
    }
  }

  handleChangeRouteFn = (tab, page) => this.props.history.push({
    pathname: '/index',
    search: `?tab=${tab}&page=${page}`
  })

  handleChangePageFn = (page) => {
    const { tab } = this.handleGetQueryDataFn()
    this.handleChangeRouteFn(tab, page)
  }

  handleTabLinkClickFn = (e) => {
    const { page } = this.handleGetQueryDataFn()
    this.handleChangeRouteFn(e.key, page)
  }

  handleGetQueryDataFn = (search) => {
    const currentSearch = search || this.props.location.search
    const queryData = currentSearch ? qs.parse(currentSearch) : {}
    return queryData
  }

  render() {
    const { tab, page } = this.handleGetQueryDataFn()
    const { handleChangePageFn, handleTabLinkClickFn } = this
    const { state_requestLoaded, state_indexTopicsData } = this.props

    return (
      <Row className="topicIndexContainer">
        <Col span="4" className="topicTypes">
          <Menu
            mode="inline"
            style={{ lineHeight: 64, textAlign: 'center', marginRight: 1, marginBottom: 20 }}
            selectedKeys={ [tab] }
            onClick={ handleTabLinkClickFn }
          >
            {
              tabLinkConfig.map((itemData) => (
                <Menu.Item key={itemData.link}>{itemData.name}</Menu.Item>
              ))
            }
          </Menu>

          <Card
            className="card"
            title="微信打赏"
            headStyle={{ fontWeight: 400, fontSize: 14 }}
          >
            <img src="//res.maxlasting.com/cnode/code.jpeg" width="100%" />
          </Card>

        </Col>

        {/* 首页列表 */}
        <Col span="14" className="topicList">
          <div className="content">
            <div className="listContainer">
              <List
                itemLayout="horizontal"
                loading={!state_requestLoaded}
                dataSource={state_indexTopicsData}
                renderItem={
                  (item) => (
                    <List.Item
                      actions={
                        [
                          <span className="reply">回复:{item.reply_count}</span>,
                          <span>访问:{item.visit_count}</span>
                        ]
                      }
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={item.author.avatar_url} />}
                        title={
                          <div className="title">
                            <Tag
                              color={
                                item.top ?
                                  'magenta' :
                                  item.good ?
                                    'green' :
                                    'geekblue'
                              }
                            >
                              {item.top ? '置顶' : item.good ? '精华' : topicTypeConfig[item.tab] ? topicTypeConfig[item.tab] : '分享'}
                            </Tag>
                            <Link className="link" to={`/detail/${item.id}`}>{item.title}</Link>
                          </div>
                        }
                        description={<span>{item.author.loginname} 发表于: {item.create_at}</span>}
                      />
                    </List.Item>
                  )
                }
              />
            </div>

            {
              state_requestLoaded ?
                (
                  <Pagination
                    showQuickJumper
                    current={ page*1 }
                    onChange={ handleChangePageFn }
                    pageSize={ 10 }
                    total={ 500 }
                  />
                ) : null
            }
          </div>
        </Col>

        <Col span="6">
          <Card
            className="card"
            title="网站公告"
            headStyle={{ fontWeight: 400, fontSize: 14 }}
            loading={false}
          >
            <p>
              本站点所有数据来源于 <a href="https://cnodejs.org">CNode</a> 开源 API，由于开源 API 没有提供全部功能，部分数据由开发者模拟生成。
            </p>
          </Card>

          <Card
            className="card"
            title="最新话题"
            headStyle={{ fontWeight: 400, fontSize: 14 }}
            loading={false}
          >
            <div className="newTopicList">
              <List
                itemLayout="horizontal"
                loading={!state_requestLoaded}
                dataSource={state_indexTopicsData.slice(0, 10)}
                renderItem={
                  (item) => (
                    <List.Item>
                      <Link className="link" to={`/detail/${item.id}`}>{item.title}</Link>
                    </List.Item>
                  )
                }
              />
            </div>
          </Card>

          <Card
            className="card"
            title="友情社区"
            headStyle={{ fontWeight: 400, fontSize: 14 }}
            loading={false}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a href="https://ruby-china.org/" target="_blank">
                <img src="//static2.cnodejs.org/public/images/ruby-china-20150529.png" width="150" height="50" />
              </a>
              <a style={{ marginTop: 10 }} href="http://golangtc.com/" target="_blank">
                <img src="//static2.cnodejs.org/public/images/golangtc-logo.png" width="150" height="34" />
              </a>
              <a style={{ marginTop: 10 }} href="http://phphub.org/" target="_blank">
                <img src="//static2.cnodejs.org/public/images/phphub-logo.png" width="150" height="50" />
              </a>
              <a style={{ marginTop: 10 }} href="https://testerhome.com/" target="_blank">
                <img src="//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" width="150" height="53" />
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default TopicIndex
