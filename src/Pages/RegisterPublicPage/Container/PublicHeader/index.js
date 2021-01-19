import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styles from './styles.module.css';
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
                            <Menu.Item key="1">HOME</Menu.Item>
                            <Menu.Item key="2">Register</Menu.Item>
                            <SubMenu key="sub2" title="Rule Book" icon={<span className={styles.downArrowIcon}/>} >
                                <Menu.Item key="7">CRICKET</Menu.Item>
                                <Menu.Item key="8">FOOTBALL</Menu.Item>
                                <Menu.Item key="9">VOLLEY BALL</Menu.Item>
                                <Menu.Item key="10">SWIMMING</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="4">ABOUT</Menu.Item>
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
