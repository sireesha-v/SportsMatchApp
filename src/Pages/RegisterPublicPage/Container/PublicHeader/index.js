import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styles from './styles.module.css';
import {
	AppstoreOutlined,
	LinkOutlined,
  } from '@ant-design/icons';
import {Layout, Menu, Button} from 'antd';

const {Header, Content, Footer} = Layout;
const { SubMenu } = Menu;

class PublicHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedVideo: null,
            videoOutputRenderUrl: null
        }
    }
    render() {
        const {selectedVideo, videoOutput} = this.state;
        return (
            <div className={styles.pageContainer}>
                <Layout className={styles.basicLayout}>
                    <Header
                        style={{
						width: '100%',
						background: 'none'
                    }}>
                        <div className={styles.logo}/>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} className={styles.menuWrapper}>
                            <Menu.Item key="1">Home</Menu.Item>
                            <Menu.Item key="2">Register</Menu.Item>
                            <SubMenu key="sub2" icon={< AppstoreOutlined />} title="Game Rules">
                                <Menu.Item key="7">Cricket</Menu.Item>
                                <Menu.Item key="8">Football</Menu.Item>
                                <Menu.Item key="9">Volley Ball</Menu.Item>
                                <Menu.Item key="10">Swimming</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="4">About</Menu.Item>
                        </Menu>
                    </Header>

                </Layout>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    videoOutput: state.asynchronousNewVideoDashboard && state.asynchronousNewVideoDashboard.videoOutput
});

export default withRouter(connect(mapStateToProps)(PublicHeader));
