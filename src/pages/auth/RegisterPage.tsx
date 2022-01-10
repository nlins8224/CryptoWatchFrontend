import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Button, Form, Input, Space} from "antd";

const RegisterPage: React.FunctionComponent = props => {
    const [register, setRegister] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirm, setConfirm] = useState<string>('')
    const [error, setError] = useState<string>('')

    const navigation = useNavigate()

    const signUpWithEmailAndPassword = () => {
        if (password !== confirm) setError('Your password does not match.')

        if (error !== '') setError('')
        setRegister(true)

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation('/login')
            })
            .catch(error => {
                if (error.code.includes('auth/weak-password')) {
                    setError("Please enter stronger password.")
                }
                else if (error.code.includes('auth/email-already-in-use')) {
                    setError("Email already in use.")
                }
                else {
                    setError("Unable to register.")
                }
                setRegister(false)
            })
    }

    const onFinish = () => {
        signUpWithEmailAndPassword()
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

            <Form.Item
                label="Confirm password"
                name="confirm password"
                rules={[{ required: true, message: 'Please confirm your password!' }]}
            >
                <Input.Password onChange={event => setConfirm(event.target.value)} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Space>
                    <Button type="primary" htmlType="submit">
                        Sign Up
                    </Button>
                    <Button type="primary">
                        <Link to='/login'>Login</Link>
                    </Button>
                </Space>
            </Form.Item>
        </Form>
        </div>

    );

}

export default RegisterPage;