import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Tag, Avatar, List, Button } from 'antd'
import '../styles/topicDetail.scss'
import { connect } from 'react-redux'
import { ac_getTopicDetailData } from '../store'
import { topicTypeConfig } from '../utils/config.js'

@connect(
  state => state,
  {
    ac_getTopicDetailData
  }
)
class TopicDetail extends Component {
  state = {}

  async componentDidMount () {
    await this.props.ac_getTopicDetailData(this.props.match.params.topicId)
  }

  render () {
    const { state_requestLoaded } = this.props
    const { 
      author, 
      create_at, 
      title, 
      content, 
      is_collect, 
      tab, 
      top, 
      good, 
      replies = [] 
    } = this.props.state_topicDetailData

    const cardTitle = (
      <div className="cardTitleWrap">
         <h2 className="title">{title}</h2>
         <br/>
         {
           content ?
            <div className="meta">
              <Tag color={top ? 'magenta' : good ? 'green' : 'green'}>
                { top ? '置顶' : good ? '精华' : topicTypeConfig[tab] }
              </Tag>
              <span className="auth">
                <Avatar size="small" icon="user" src={ author.avatar_url } style={{ marginRight: 3 }} />
                <Link to={ `/user/${author.loginname}` }>{ author.loginname }</Link>
              </span>
              <span className="createAt">发表于: { create_at }</span>
              {
                <Button
                  className="collectBtn"
                  type={ is_collect ? 'dashed' : "default" }
                >
                  { is_collect ? '取消收藏' : '添加收藏' }
                </Button>
              }
            </div> : null
         }
      </div>
    )

    return (
      <div className="topicDetailContainer">
        <Card
          bordered={ false }
          title={ cardTitle }
          loading={ !state_requestLoaded }
        >
          <p className="markdownBody" dangerouslySetInnerHTML={{__html: content}}></p>
        </Card>

        <Card
          type="inner"
          bordered={ false }
          title={ replies.length + '回复' }
          loading={ !state_requestLoaded }
        >
          <List
            itemLayout="vertical"
            loading={ !state_requestLoaded }
            dataSource={ replies }
            renderItem={
              (item, i) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <div>
                        <Link to="/">{item.title}</Link>
                      </div>
                    }
                    description={
                      <span className="meta">
                        <Avatar src={ item.author.avatar_url } style={{ marginRight: 5 }} />
                        { item.author.loginname } { i+1 }楼 &nbsp; 回复于: { item.create_at }
                      </span>
                    }
                  />
                   <p dangerouslySetInnerHTML={{ __html: item.content }} />
                </List.Item>
              )
            }
          />
        </Card>
      </div>
    )
  }
}

export default TopicDetail
