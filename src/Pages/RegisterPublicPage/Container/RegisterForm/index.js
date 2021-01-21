import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {CheckOutlined} from '@ant-design/icons';

import styles from './styles.module.css';
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Tabs
} from 'antd';

const {TabPane} = Tabs;
function callback(key) {
    console.log(key);
}

const {Option} = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 8
        }
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 16
        }
    }
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 16,
            offset: 8
        }
    }
};

const RegistrationForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{
                width: 70
            }}>
                <Option value="91">+91</Option>
            </Select>
        </Form.Item>
    );
    const [sportsChecked,
        setSportsChecked] = useState([]);

    const FormContainer = () => {
        return (
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                prefix: '91'
            }}
                scrollToFirstError>
                <div className={styles.formGroup}>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                name="name"
								label="Name"
                                labelCol={{
                                span: 24
                            }}
                                wrapperCol={{
                                span: 24
                            }}
                                rules={[{
                                    required: true,
                                    message: 'Please input your name!',
                                    whitespace: true
                                }
                            ]}>
                                <Input placeholder={'Full Name'}/>
                            </Form.Item>
                        </Col>
                    </Row>
					<Row>
                        <Col span={24}>
                            <Form.Item
                                name="phone"
                                label="Contact No."
                                labelCol={{
                                span: 24
                            }}
                                wrapperCol={{
                                span: 24
                            }}
                                rules={[{
                                    required: true,
                                    message: 'Please input your contact number!'
                                }
                            ]}>
                                <Input
									placeholder={'Contact No.'}
                                    style={{
                                    width: '100%'
                                }}/>
                            </Form.Item>
                        </Col>
                    </Row>
					<Row>
                        <Col span={24}>
                            <Form.Item
                                name="email"
                                label="E-mail"
                                labelCol={{
                                span: 24
                            }}
                                wrapperCol={{
                                span: 24
                            }}
                                rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!'
                                }, {
                                    required: true,
                                    message: 'Please input your E-mail!'
                                }
                            ]}>
                                 <Input placeholder={'Email ID'}/>
                            </Form.Item>
                        </Col>
                    </Row>

					<Row>
                        <Col span={24}>
                            <Form.Item
                                name="organisation"
                                label={"Organisation"}
                                labelCol={{
                                span: 24
                            }}
                                wrapperCol={{
                                span: 24
                            }}
                                rules={[{
                                    required: true,
                                    message: 'Please input your organisation name!',
                                    whitespace: true
                                }
                            ]}>
                                <Input  placeholder={'Organization'}/>
                            </Form.Item>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col span={24}>
                        <Form.Item
                            name="checkbox-group"
                            label="Select Sport(s)"
                            labelCol={{
                            span: 24
                        }}
                            wrapperCol={{
                            span: 24
                        }}>
                            <Row>
                                {[
                                    'Football',
                                    'Basketball',
                                    'Volleyball',
                                    'Hockey',
                                    'Table Tennis',
                                    'Cricket',
                                    'Tennis',
                                    'Badminton',
                                    'Swimming',
                                    'Kabaddi'
                                ].map(sport => {
                                    return (
                                        <Col span={4.5}>
                                            <Button
                                                type="primary"
                                                icon={< CheckOutlined />}
                                                className={styles.sportsCheckBtn}
                                                size={'large'}>
                                                {sport}
                                            </Button>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Form.Item>
                    </Col>
                </Row>
				<Checkbox className={styles.checkbox} onChange={()=>{}}>All Sports 3000/-</Checkbox>
                <Row>
                    <Button type="primary" htmlType="submit" className={styles.payBtn}>
					PAY 500 AED {sportsChecked.length > 0
                            ? (sportsChecked.length > 2
                                ? '3000'
                                : '1000')
                            : ''}
                    </Button>
                </Row>
            </Form>
        )
    };
    return (
        <div className={styles.regFormModal}>
            <Tabs onChange={callback} type="card">
                <TabPane tab="Inter-School" key="1">
                    <FormContainer/>
                </TabPane>
                <TabPane tab="Community" disabled key="2">
                    Content of Community
                </TabPane>
            </Tabs>
        </div>
    );
};

export default RegistrationForm;
