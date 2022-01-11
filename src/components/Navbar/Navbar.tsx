import React from 'react';
import '../../styles/App.less';
import '../../firebase/firebase';
import { Col, Row, Space } from 'antd';
import { LoginLogoutSwitchButton } from './LoginLogoutSwitchButton';
import AuthRedirectButton from './AuthRedirectButton';
import MainMenu from './MainMenu';

const Navbar = () => {
    return (
        <>
            <div>
                <Row gutter={[16, 16]}>
                    <Col span={8} offset={4}>
                        <MainMenu />
                    </Col>
                    <Col span={12}>
                        <Space className="login" size={15}>
                            <LoginLogoutSwitchButton />
                            <AuthRedirectButton url="/auth" text="Sign Up" />
                        </Space>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Navbar;
