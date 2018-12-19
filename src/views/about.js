import React from 'react'
import { Card, List } from 'antd'
import '../styles/studyAndAbout.scss'

export default () => (
  <div className="aboutContainer">
    <Card title="作者" bordered={false} className="card">
      <List split={false}>
        <List.Item>
          <div>
            项目地址：
            <a href="https://github.com/Maxlasting" target="_blank" rel="noopener noreferrer">
              https://github.com/Maxlasting
            </a>
          </div>
        </List.Item>
        <List.Item>项目作者：付强</List.Item>
        <List.Item>
          <div>
            用于学习使用，如有侵权，请发送邮件至：<a href="mailto:copperhaze@163.com">copperhaze@163.com</a>
          </div>
        </List.Item>
      </List>
    </Card>
    <Card title="关于" bordered={false} className="card">
      <List split={false}>
        <List.Item>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</List.Item>
        <List.Item>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</List.Item>
        <List.Item>CNode 的 SLA 保证是，一个9，即 90.000000%。</List.Item>
        <List.Item>
          <div>
            社区目前由 alsotang 在维护，有问题请联系：
              <a href="https://github.com/alsotang" target="_blank" rel="noopener noreferrer">https://github.com/alsotang</a>
          </div>
        </List.Item>
        <List.Item>
          <div>
            请关注我们的官方微博：
              <a href="http://weibo.com/cnodejs" target="_blank" rel="noopener noreferrer">http://weibo.com/cnodejs</a>
          </div>
        </List.Item>
      </List>
    </Card>
    <Card title="移动客户端" bordered={false} className="card">
      <List split={false}>
        <List.Item>客户端由 soliury 开发维护。</List.Item>
        <List.Item>
          <div>
            源码地址：
              <a href="https://github.com/soliury/noder-react-native" target="_blank" rel="noopener noreferrer">
              https://github.com/soliury/noder-react-native
              </a> 。
            </div>
        </List.Item>
        <List.Item>
          <div>
            另，安卓用户同时可选择：
              <a href="https://github.com/TakWolf/CNode-Material-Design" target="_blank" rel="noopener noreferrer">
              https://github.com/TakWolf/CNode-Material-Design
              </a> ，这是 Java 原生开发的安卓客户端。
          </div>
        </List.Item>
      </List>
    </Card>
    <Card title="友情链接" bordered={false} className="card">
      <List split={false}>
        <List.Item>
          <a style={{ width: '33.33%' }} href="https://www.huoban.com/" target="_blank" rel="noopener noreferrer">
            <img width={"100%"} src="//dn-cnode.qbox.me/Ftmw28ed0I_rir7YYz3c_jVPkCGx" alt="fq" />
          </a>
          <a style={{ width: '33.33%' }} href="http://100offer.com/" target="_blank" rel="noopener noreferrer">
            <img width={"100%"} src="//dn-cnode.qbox.me/FmU1Ik57z6wrl9JDTNdcYBTDetFq" alt="fq" />
          </a>
          <a style={{ display: 'inline-block', width: '33.33%' }} href="https://www.teambition.com/" target="_blank" rel="noopener noreferrer">
            <img width={"100%"} src="//dn-cnode.qbox.me/FkMR_SqpCp4Q0eDIaWrQlALiXdmP" alt="fq" />
          </a>
        </List.Item>
        <List.Item>
          <a style={{ width: '33.33%' }} href="http://yunzhihui.com/" target="_blank" rel="noopener noreferrer">
            <img width={"100%"} src="//dn-cnode.qbox.me/Fq2cV_14IFHwelZ-6jey42Z0-eOR" alt="fq" />
          </a>
        </List.Item>
        <List.Item>
          <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 40px 0 80px'}}>
            <a style={{ width: '30%' }} href="http://www.jiguang.cn/" target="_blank" rel="noopener noreferrer">
              <img width={"100%"} src="//static.cnodejs.org/FijGJbij9GObh5AXw-Vyu5LGn08a" alt="fq" />
            </a>
            <a style={{ width: '30%' }} href="http://segmentfault.com/" target="_blank" rel="noopener noreferrer">
              <img width={"100%"} src="//static2.cnodejs.org/public/images/temp/sf.png" alt="fq" />
            </a>
            <a style={{ width: '30%' }} href="http://ionichina.com/" target="_blank" rel="noopener noreferrer">
              <img width={"100%"} src="//static2.cnodejs.org/public/images/temp/ionichina.png" alt="fq" />
            </a>
          </div>
        </List.Item>
      </List>
    </Card>
  </div>
)
