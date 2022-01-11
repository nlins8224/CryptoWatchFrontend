import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    return (
        <div className="menu">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">HOME</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/quote">QUOTE</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/watchlist">WATCHLIST</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/about">ABOUT</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default MainMenu;
