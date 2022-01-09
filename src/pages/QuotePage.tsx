import React from 'react';
import '../styles/App.less';
import '../database/firebase';
import {LiveCoinsView} from "../components/LiveCoins/LiveCoinsView";

const QuotePage = () => {
    return (
        <LiveCoinsView />
    );
}

export default QuotePage;