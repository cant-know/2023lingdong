import React from 'react';
import { Layout, Menu, Carousel, Card, Row, Col  } from 'antd';
import { StarOutlined, FolderAddOutlined, HomeOutlined, DesktopOutlined, FolderOpenOutlined, TagsOutlined, TrophyOutlined, UserOutlined, UsergroupAddOutlined, UserAddOutlined} from '@ant-design/icons';
import './App.scss';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function App() {

  return (
    <>
      <Layout>
        <Header className="header">
          <div className='logo'></div>
          <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" id='special'><HomeOutlined /><span>首页</span></Menu.Item>
            <Menu.Item key="2"><StarOutlined /><span>工坊概况</span></Menu.Item>
            <Menu.Item key="3"><DesktopOutlined /><span>课程思政</span></Menu.Item>
            <Menu.Item key="4"><FolderOpenOutlined /><span>项目介绍</span></Menu.Item>
            <Menu.Item key="5"><TagsOutlined /><span>大赛简介</span></Menu.Item>
            <Menu.Item key="6"><TrophyOutlined /><span>荣誉成果</span></Menu.Item>
            <Menu.Item key="7"><UserOutlined /><span>指导教师</span></Menu.Item>
            <Menu.Item key="8"><UsergroupAddOutlined /><span>工坊成员</span></Menu.Item>
            <Menu.Item key="9"><UserAddOutlined /><span>加入我们</span></Menu.Item>
            <Menu.Item key="10"><FolderAddOutlined /><span>开源社区</span></Menu.Item>
          </Menu>
        </Header>
        <Content className="content">
              <Carousel speed={1500} effect="fade" autoplay>
                <div>
                  <h3 style={contentStyle} className='first'></h3>
                </div>
                <div>
                  <h3 style={contentStyle} className='second'></h3>
                </div>
                <div>
                  <h3 style={contentStyle} className='third'></h3>
                </div>
                <div>
                  <h3 style={contentStyle} className='fourth'></h3>
                </div>
              </Carousel>
              <div className='news'>
                <div className='news-top'>
                  <span className='item'>工</span>
                  <span className='item'>坊</span>
                  <span className='item'>动</span>
                  <span className='item'>态</span>
                  <hr />
                </div>
                <div className='content'>
                  <div className='left'>
                    <div className='item'>
                      <div className='img-first'></div>
                      <div className='summary'>前端从入门到入土</div>
                    </div>
                    <div className='item'>
                      <div className='img-second'></div>
                      <div className='summary'>全栈的血泪史</div>
                    </div>
                  </div>
                  <div className='right'>
                    <ul>
                      <li className='item'>
                        <div className='date'>04.03</div>
                        <div className='introduce'>作为列表的第一项，我被修改的次数是最多的</div>
                      </li>
                      <li className='item'>
                        <div className='date'>04.03</div>
                        <div className='introduce'>学计算机学到秃顶，这究竟是人性的扭曲还是道德的沦丧</div>
                      </li>
                      <li className='item'>
                        <div className='date'>04.03</div>
                        <div className='introduce'>某后端工程师半夜猝死，原因竟是......</div>
                      </li>
                      <li className='item'>
                        <div className='date'>04.03</div>
                        <div className='introduce'>左边的是什么？Tomcat</div>
                      </li>
                      <li className='item'>
                        <div className='date'>04.03</div>
                        <div className='introduce'>如果我是一个前端，我应该如何学习？</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='bottom title'>优秀作品展示</div>
              <div className='cards'>
                <Row gutter={1}>
                  <Col span={6}>
                    <Card
                      hoverable
                      style={{ width: 200 }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                      <Meta title="2023灵动创意工坊选拔赛参赛作品" description="技术选型（html,css）" />
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card
                      hoverable
                      style={{ width: 200 }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                      <Meta title="2023灵动创意工坊选拔赛参赛作品" description="技术选型（html,css）" />
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card
                      hoverable
                      style={{ width: 200 }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                      <Meta title="2023灵动创意工坊选拔赛参赛作品" description="技术选型（html,css）" />
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card
                      hoverable
                      style={{ width: 200 }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                      <Meta title="2023灵动创意工坊选拔赛参赛作品" description="技术选型（html,css）" />
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card
                      hoverable
                      style={{ width: 200 }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                      <Meta title="2023灵动创意工坊选拔赛参赛作品" description="技术选型（html,css）" />
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card
                      hoverable
                      style={{ width: 200 }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                      <Meta title="2023灵动创意工坊选拔赛参赛作品" description="技术选型（html,css）" />
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card
                      hoverable
                      style={{ width: 200 }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                      <Meta title="2023灵动创意工坊选拔赛参赛作品" description="技术选型（html,css）" />
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card
                      hoverable
                      style={{ width: 200 }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                      <Meta title="2023灵动创意工坊选拔赛参赛作品" description="技术选型（html,css）" />
                    </Card>
                  </Col>
                </Row>
              </div>
        </Content>
        <Footer className="footer">
          <div className="copyright" />
        </Footer>
      </Layout>
    </>
  )
}

export default App
