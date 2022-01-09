import React, {useState} from 'react';
import '../../styles/App.less';
import '../../database/firebase';
import {Tabs} from "antd";
import {useNavigate} from "react-router-dom";

const { TabPane } = Tabs
const Navbar = () => {

    const navigate = useNavigate();

    return (
      <>
          <div className='navbar'>
              <Tabs onChange={(key) => {
                  navigate(`/${key}`);
              }}
              >
                  <TabPane tab='Home' key=''/>
                  <TabPane tab='Quotes' key='quote' />
                  <TabPane tab='Charts' key='chartView' />
                  <TabPane tab='About' key='about' />
              </Tabs>
          </div>
      </>
    );
}

export default Navbar;