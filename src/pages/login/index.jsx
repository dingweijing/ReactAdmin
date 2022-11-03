import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Logo from '../../assets/img/login/logo_yw.png';
import './index.less';

class Login extends Component {
    formRef = React.createRef()
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    onFinish = () => {
        this.formRef.current
            .validateFields()
            .then((values) => {
                console.log(values, 'value==');
            })
    }
    render() {
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={Logo} alt='' />
                    <h1>React后台管理系统</h1>
                </header>
                <section className='login-section'>
                    <h2>用户登录</h2>
                    <Form
                        name='normal_login'
                        className='login-form'
                        ref={this.formRef}
                        onFinish={this.onFinish}
                    >
                        <Input type="password" className="hide" />
                        <Form.Item
                            name="userName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your UserName!'
                                }
                            ]}
                        >
                            <Input
                                placeholder='用户名'
                                prefix={<UserOutlined type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password! '
                                }
                            ]}
                        >
                            <Input
                                placeholder='密码'
                                type='password'
                                prefix={<LockOutlined type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button className='login-form-button' htmlType='submit' type='primary'>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

export default Login;