import React, {Component} from 'react';
import {Layout, Modal, Button} from 'antd';
import classNames from 'classnames';
import styles from './styles.module.css';
import RegistrationForm from '../../../RegisterPublicPage/Container/RegisterForm';
const {Content} = Layout;

class LandingPageContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			showRegModal: false
		}
	}
	showModal =(flag) => {
		this.setState({
			showRegModal: flag
		});
	}

    render() {
        return (
            <div className={styles.mainContainer}>
                <Content
                    className={styles.siteLayout}
                    shape="round"
                    style={{
                    padding: '0 50px',
                    marginTop: 64
                }}>

                    {/* Main content-Right */}
                    <div className={styles.rightContent}>
                        <div className={styles.img}/>
                        <div className={styles.handImg}/>
                    </div>
                    {/* Main content-Left */}
                    <div className={styles.leftContent}>
                        <h1>2021 Sports Festival</h1>
                        <h3>4th Feb to 5th March</h3>
                        <h4>@SHABAB AL-AHLI CLUB</h4>
                        <p>We recognize the dire need of releasing the built-up energy amongst athletes
                            and promise to bring back happiness in the minds of participants that include
                            Inter-School (Boys & Girls) in 2 Age groups and Inter-Community (Gents & Ladies)
                            every Friday and Saturday</p>
                        <h5>Last Day of Entry 25th Jan</h5>
                        <Button
                            type="primary"
                            shape="round"
                            className={styles.registerBtn}
							onClick={() => this.showModal(true)}>Register Now</Button>
                    </div>
                    <div className={'clearAll'}/>
                </Content>
                <div className={styles.sportsListImgWrapper}>
                    <div className={styles.sportsListImg}/>
                    <div className={classNames(styles.sportsListImg, styles.sportsListImgTab)}/>
                    <div className={styles.registerBtnWrapper}>
                        <Button
                            type="primary"
                            shape="round"
                            className={styles.registerBtn}
                            onClick={() => this.showModal(true)}>Register Now</Button>
                    </div>
                </div>

                {/* Registration form Modal */}
                <Modal
                    title="20px to Top"
                    style={{
                    top: 20
				}}
					className={styles.regFormModal}
                    visible={this.state.showRegModal}
                    onOk={() => this.setState({showRegModal:false})}
                    onCancel={() => this.setState({showRegModal:false})}>
                    <RegistrationForm/>
                </Modal>
            </div>
        )
    }
}

export default LandingPageContent;
