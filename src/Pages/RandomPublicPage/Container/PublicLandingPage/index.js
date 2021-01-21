import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styles from './styles.module.css';
import {
	AppstoreOutlined,
	LinkOutlined,
  } from '@ant-design/icons';
import classNames from 'classnames';
import {Layout, Menu, Button, Drawer} from 'antd';
import LandingPageContent from './LandingPageContent';
import NavMenu from '../NavMenu';

const {Header, Content, Footer} = Layout;
const { SubMenu } = Menu;

class PublicLandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedVideo: null,
			videoOutputRenderUrl: null,
			visible: false,
			showRegModal: false
        }
    }
    render() {
        const {selectedVideo, videoOutput} = this.state;
        return (
            <div className={styles.pageContainer}>
                <Layout className={styles.basicLayout}>
                    <Header
						className={styles.desktopHeader}
                        style={{
						width: '100%',
						background: 'none'
                    }}>
                        <div className={styles.logo}/>
                        <NavMenu showRegModal={() => this.setState({showRegModal: true})}/>
                    </Header>
					<i className={classNames("fal fa-bars",styles.hamburger)} onClick={()=> this.setState({visible: true})}/>
					<Drawer
						placement="right"
						closable={false}
						onClose={this.onClose}
						visible={this.state.visible}
						>
						 <NavMenu/>
						</Drawer>
					<LandingPageContent showRegModal={this.state.showRegModal}/>
                </Layout>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    videoOutput: state.asynchronousNewVideoDashboard && state.asynchronousNewVideoDashboard.videoOutput
});

export default withRouter(connect(mapStateToProps)(PublicLandingPage));
