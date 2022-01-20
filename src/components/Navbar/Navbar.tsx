import React from 'react';
import '../../styles/App.less';
import '../../firebase/firebase';
import { Col, Row, Space } from 'antd';
import { LoginLogoutSwitchButton } from './children/LoginLogoutSwitchButton';
import AuthButton from './children/AuthButton';
import MainMenu from './children/MainMenu';

const Navbar = () => {
    return (
        <>
            <div className="menu">
                <MainMenu />
                <Space className="login" size={10}>
                    <LoginLogoutSwitchButton />
                    <AuthButton url="/auth" text="Sign Up" />
                </Space>
            </div>
        </>
    );
};

export default Navbar;
