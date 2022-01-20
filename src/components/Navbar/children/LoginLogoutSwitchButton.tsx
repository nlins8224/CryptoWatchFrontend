import { auth } from '../../../firebase/firebase';
import AuthButton from './AuthButton';
import LogoutButton from './LogoutButton';
import React from 'react';

export const LoginLogoutSwitchButton = () => {
    if (!auth.currentUser) {
        return <AuthButton url="/login" text="Sign In" />;
    } else {
        return <LogoutButton />;
    }
};
