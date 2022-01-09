import React from 'react';
import '../styles/App.less';
import {ChartView} from "../components/Charts/ChartView";
import {AssetInfoPanel} from "../components/Charts/AssetInfoPanel";

const QuoteChartPage = () => {
    return (
        <div>
            <AssetInfoPanel/>
            <ChartView />
        </div>
    );
}

export default QuoteChartPage;