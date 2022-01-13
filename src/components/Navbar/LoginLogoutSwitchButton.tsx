import { auth } from '../../firebase/firebase';
import AuthRedirectButton from './AuthRedirectButton';
import LogoutButton from './LogoutButton';
import React from 'react';

export const LoginLogoutSwitchButton = () => {
    if (!auth.currentUser) {
        return <AuthRedirectButton url="/login" text="Sign In" />;
    } else {
        return <LogoutButton />;
    }
};
