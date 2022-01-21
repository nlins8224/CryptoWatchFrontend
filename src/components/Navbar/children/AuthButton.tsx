import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const AuthButton = (props: { url: string; text: string }) => {
    return (
        <Button type="primary" htmlType="submit">
            <Link to={props.url}>{props.text}</Link>
        </Button>
    );
};

export default AuthButton;
