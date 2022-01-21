import React from 'react';
import '../styles/App.less';
import '../firebase/firebase';
import { LiveTableView } from '../components/LiveAssets/LiveTableView';

const QuotePage = () => {
    return (
        <div>
            <LiveTableView />
        </div>
    );
};

export default QuotePage;
