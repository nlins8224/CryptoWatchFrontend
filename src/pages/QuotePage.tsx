import React from 'react';
import '../styles/App.less';
import '../database/firebase';
import { LiveCoinsReceiver } from '../components/LiveCoins/LiveCoinsReceiver';

const QuotePage = () => {
    return (
        <LiveCoinsReceiver />
    );
}

export default QuotePage;