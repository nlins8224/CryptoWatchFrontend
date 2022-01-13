import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { Button } from 'antd';

const LogoutButton: React.FunctionComponent = () => {
    const navigation = useNavigate();

    const logout = () => {
        auth.signOut()
            .then(() => navigation('/'))
            .catch((error) => console.log(error));
    };

    return (
        <Button type="primary" onClick={() => logout()}>
            Logout
        </Button>
    );
};

export default LogoutButton;
