import { auth } from '../../../firebase/firebase';
import AuthButton from './AuthButton';
import LogoutButton from './LogoutButton';
import React, {useEffect, useState} from 'react';

export const LoginLogoutSwitchButton = () => {
    const [authentication, setAuthentication] = useState<boolean>(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (auth.currentUser) {
                setAuthentication(true)
            } else {
                setAuthentication(false)
            }

        }, 1000);
        return () => clearInterval(interval);
    }, [])

    if (!authentication) {
        console.log("hi")
        return <AuthButton url="/login" text="Sign In" />;
    } else {
        return <LogoutButton />;
    }
};
