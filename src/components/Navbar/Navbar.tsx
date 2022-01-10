import React from 'react';
import '../../styles/App.less';
import '../../firebase/firebase';
import {Col, Row, Space, Tabs} from "antd";
import {useNavigate} from "react-router-dom";
import LogoutButton from "./LogoutButton";

const { TabPane } = Tabs
const Navbar = () => {

    const navigate = useNavigate();

    return (
      <>
          <div className='navbar'>
              <Row>
                  <Col offset={20}>
                      <Space>
                          <LogoutButton/>
                          <LogoutButton/>
                      </Space>
                  </Col>
                  <Col>
                      <Tabs onChange={(key) => {
                          navigate(`/${key}`);
                      }}
                      >
                          <TabPane tab='Home' key=''/>
                          <TabPane tab='Quotes' key='quote' />
                          <TabPane tab='Watchlist' key='watchlist' />
                          <TabPane tab='About' key='about' />
                      </Tabs>
                  </Col>
              </Row>


          </div>
      </>
    );
}

export default Navbar;