import React from 'react';
import '../styles/App.less';
import '../firebase/firebase';
import { LiveAssetsTableView } from '../components/LiveAssets/LiveAssetsTableView';

const QuotePage = () => {
    return (
        <div>
            <LiveAssetsTableView />
        </div>
    );
};

export default QuotePage;
