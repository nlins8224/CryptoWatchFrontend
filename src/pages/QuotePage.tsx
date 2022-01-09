import React from 'react';
import '../styles/App.less';
import '../database/firebase';
import {LiveAssetsView} from "../components/LiveAssets/LiveAssetsView";

const QuotePage = () => {
    return (
        <LiveAssetsView />
    );
}

export default QuotePage;