import { Layout, Menu, Breadcrumb } from 'antd';
import React,{ Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import List from './containers/List.js'
import Home from './containers/Home.js'
import Mine from './containers/Mine.js'
import './assets/style/Main.scss'
import logo from './logo.svg'
const { Header, Content, Footer } = Layout;

class Main extends Component {
    render() {
        return (
            <Layout className="layout">
            <Router>
                <div>
            <Header>
                <img src={logo} className="Main-logo" alt="logo" />
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
                >
                <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/blog'>博客</Link></Menu.Item>
                <Menu.Item key="3"><Link to='/opensource'>开源项目</Link></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                {/*路由匹配*/}
                <Route exact path="/" component={Home}/>
                <Route path="/blog" component={List}/>
                <Route path="/opensource" component={Mine}/>
                </div>
            </Content>
            </div>
            </Router>
            <Footer style={{ textAlign: 'center' }}>
                sEn_sHine ©2018 Created by sEn
            </Footer>
            </Layout>
        );
    }
}

export default Main