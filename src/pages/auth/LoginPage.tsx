import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Button, Form, Input, Space} from "antd";

const LoginPage: React.FunctionComponent = () => {
    const [authentication, setAuthentication] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const navigation = useNavigate()

    const loginWithEmailAndPassword = () => {
        if (error !== '') setError('')

        setAuthentication(true)
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation('/')
            })
            .catch(() => {
                setAuthentication(false)
                setError('Unable to sign in. Please try again later.')
            });
    }

    const onFinish = () => {
        loginWithEmailAndPassword()
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="auth">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your username!' }]}

                >
                    <Input onChange={event => setEmail(event.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password onChange={event => setPassword(event.target.value)} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Space>
                        <Button type="primary" htmlType="submit" disabled={authentication}>
                            Login
                        </Button>
                        <Button type="primary" disabled={authentication}>
                            <Link to='/auth'>Sign Up</Link>
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>

    );
}

export default LoginPage;