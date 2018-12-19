import React from 'react'
import { Row, Col } from 'antd'

const CommonFooter = () => (
  <footer style={{ position: 'relative', zIndex: 99 }}>
    <Row style={{ padding: '40px 80px', backgroundColor: '#fff' }}>
      <Col span={24} style={{ textAlign: 'center', lineHeight: '30px' }}>
        CNode React - Created By FuQiang | Copyright © 2018-12-17
        <br/>
        网站备案编号: <a href="http://www.miitbeian.gov.cn/">吉ICP备 17008864号-1</a>
      </Col>
    </Row>
  </footer>
)

export default CommonFooter
