import {
    MenuOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;
const App = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout>
            <Sider trigger={null} collapsedWidth={0} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    // theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    <MenuOutlined className='trigger' style={{ padding: 24, color: 'white' }} onClick={() => setCollapsed(!collapsed)} />
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                    }}
                >
                    {props.props}
                </Content>
            </Layout>
        </Layout>
    );
};
export default App;