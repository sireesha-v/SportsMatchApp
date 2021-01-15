import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styles from './styles.module.css';
import {
	AppstoreOutlined,
	LinkOutlined,
  } from '@ant-design/icons';
import {Layout, Menu, Button} from 'antd';
import LandingPageContent from './LandingPageContent';

const {Header, Content, Footer} = Layout;
const { SubMenu } = Menu;

class PublicLandingPage extends React.Component {
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
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[]} className={styles.menuWrapper}>
                            <Menu.Item key="1">REGISTER</Menu.Item>
                            <SubMenu key="sub2" icon={< AppstoreOutlined />} title="RULE BOOK">
								<Menu.Item key="7">CRICKET</Menu.Item>
                                <Menu.Item key="8">FOOTBALL</Menu.Item>
                                <Menu.Item key="9">VOLLEY BALL</Menu.Item>
                                <Menu.Item key="10">SWIMMING</Menu.Item>
                            </SubMenu>
							<Menu.Item key="3">ABOUT</Menu.Item>
                            <Menu.Item key="4">CONTACT US</Menu.Item>
                        </Menu>
                    </Header>
					<LandingPageContent/>
                </Layout>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    videoOutput: state.asynchronousNewVideoDashboard && state.asynchronousNewVideoDashboard.videoOutput
});

export default withRouter(connect(mapStateToProps)(PublicLandingPage));
