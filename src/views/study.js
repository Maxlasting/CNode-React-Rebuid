import React from 'react'
import { Card, List } from 'antd'
import '../styles/studyAndAbout.scss'

export default () => (
  <div className="studyContainer">
    <Card title="Node.js 入门" bordered={ false } className="card">
      <List split={ false }>
        <List.Item>
          <div>
            <a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html" target="_blank" rel="noopener noreferrer">
              《快速搭建 Node.js 开发环境以及加速 npm》
              </a>
          </div>
        </List.Item>
        <List.Item>
          <div>
            <a href="https://github.com/alsotang/node-lessons" target="_blank" rel="noopener noreferrer">
              《Node.js 包教不包会》
              </a>
          </div>
        </List.Item>
        <List.Item>
          <div>
            <a href="http://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">
              《ECMAScript 6入门》
              </a>
          </div>
        </List.Item>
        <List.Item>
          <div>
            <a href="https://github.com/nqdeng/7-days-nodejs" target="_blank" rel="noopener noreferrer">
              《七天学会NodeJS》
              </a>
          </div>
        </List.Item>
      </List>
    </Card>
    <Card title="Node.js 资源" bordered={ false } className="card">
      <List split={ false }>
        <List.Item>
          <div>
            <a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e" target="_blank" rel="noopener noreferrer">
              《前端资源教程》
              </a>
          </div>
        </List.Item>
        <List.Item>
          <div>
            <a href="http://cnpmjs.org/" target="_blank" rel="noopener noreferrer">
              《国内的 npm 镜像源》
              </a>
          </div>
        </List.Item>
        <List.Item>
          <div>
            <a href="https://github.com/youyudehexie/node123" target="_blank" rel="noopener noreferrer">
              《node123-node.js中文资料导航》
              </a>
          </div>
        </List.Item>
      </List>
    </Card>
    <Card title="Node.js 名人" bordered={ false } className="card">
      <List split={ false }>
        <List.Item>
          <div>
            <a href="https://github.com/cnodejs/nodeclub/wiki/名人堂" target="_blank" rel="noopener noreferrer">
              《名人堂》
              </a>
          </div>
        </List.Item>
      </List>
    </Card>
    <Card title="Node.js 服务器" bordered={ false } className="card">
      <List split={ false }>
        <List.Item>
          <div>
            <a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">
              新手搭建 Node.js 服务器，推荐使用无需备案的
              </a>
          </div>
        </List.Item>
      </List>
    </Card>
  </div>
)
