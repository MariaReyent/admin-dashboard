import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import Ava from './Avatar';
import Interactions from './Interactions';



function Statistics(){
    return (
      <>
        <Row gutter={12} className="row">
        <Col span={5} >
          <Card bordered={false} className="card">
            <Statistic  
              title="Followers"
              value={5.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <Ava/>
          </Card>
        </Col>
        <Col span={5}>
          <Card bordered={false} className="card">
            <Statistic
              title="Interactions"
              value={1.3}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
            <Interactions/>
          </Card>
        </Col>
        <Col span={5}>
          <Card bordered={false} className="card">
            <Statistic
              title="Visits"
              value={6.3}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>  
   
      </>
    )
}
export default Statistics