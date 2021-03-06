import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getDatabase, ref, update } from '@firebase/database';
import { auth } from '../../../firebase/firebase';
import { useWatchlistData } from '../../../hooks/useWatchlistData';

const SubscribeButton: React.FunctionComponent = () => {
    const [sub, setSub] = useState<boolean>(false);
    const subscribedSymbols = useWatchlistData();
    const location = useLocation();
    const symbol = location.pathname.split('/').pop();

    if (!auth || !auth.currentUser) {
        return (
            <Button type="primary" htmlType="submit">
                <Link to="/login">Sign In to subscribe</Link>
            </Button>
        );
    }

    const toggle = () => {
        setSub(!sub);
    };

    const db = getDatabase();
    const path = `/users/${auth.currentUser.uid}/${symbol}`;
    const userRef = ref(db, path);

    if (!subscribedSymbols) {
        return <p>Symbol list is empty</p>;
    }

    if (!symbol) {
        return <p>Symbol is invalid</p>;
    }

    useEffect(() => {
        if (subscribedSymbols.data.includes(symbol)) {
            setSub(true);
        }
    }, [subscribedSymbols.data]);

    const subscribe = (symbol: string | undefined) => {
        if (symbol != null) {
            update(userRef, {
                symbol,
            }).then((e) => e);
        }
        toggle();
    };

    const unsubscribe = (symbol: string | undefined) => {
        if (symbol != null) {
            update(userRef, {
                symbol: null,
            }).then((e) => e);
        }
        toggle();
    };

    if (sub) {
        return (
            <Button type="primary" onClick={() => unsubscribe(symbol)}>
                Remove from Watchlist
            </Button>
        );
    } else {
        return (
            <Button type="primary" onClick={() => subscribe(symbol)}>
                Add to Watchlist
            </Button>
        );
    }
};

export default SubscribeButton;
