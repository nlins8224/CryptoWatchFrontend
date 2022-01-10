import React, {useState} from 'react';
import '../../styles/App.less';
import '../../firebase/firebase';
import {Tabs} from "antd";
import {useNavigate} from "react-router-dom";
import LogoutPage from "../../pages/auth/LogoutPage";

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
                  <TabPane tab='Watchlist' key='watchlist' />
                  <TabPane tab='About' key='about' />
              </Tabs>
              <LogoutPage/>
          </div>
      </>
    );
}

export default Navbar;