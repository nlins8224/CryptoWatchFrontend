import { useLocation } from 'react-router-dom';
import { useGetHistoricalSymbolData } from './useGetHistoricalSymbolData';
import React, { useState } from 'react';

import { ChartView } from './ChartView';
import { Button, Space } from 'antd';

export const ChartManager = () => {
    const [seriesName, setSeriesName] = useState<'Price' | 'Market Cap'>(
        'Price',
    );
    const location = useLocation();
    const symbol = location.pathname.split('/').pop();

    const path1Min = `/historical-coins-1M/${symbol}`;
    const path1Day = `/historical-coins-1D/${symbol}`;

    const allOneMinuteAssets = useGetHistoricalSymbolData(path1Min);
    const allOneDayAssets = useGetHistoricalSymbolData(path1Day);

    const handleButtonPriceClick = () => {
        setSeriesName('Price');
    };

    const handleButtonMarketCapClick = () => {
        setSeriesName('Market Cap');
    };

    console.log(seriesName);

    return (
        <div className="chart-tabs">
            <Space className="buttons-panel" size={5}>
                <Button type="primary" onClick={() => handleButtonPriceClick()}>
                    Price
                </Button>
                <Button
                    type="primary"
                    onClick={() => handleButtonMarketCapClick()}
                >
                    Market Cap
                </Button>
            </Space>
            <ChartView
                allOneDayAssets={allOneDayAssets.data}
                allOneMinuteAssets={allOneMinuteAssets.data}
                seriesName={seriesName}
            />
        </div>
    );
};
