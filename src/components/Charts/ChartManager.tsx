import React, { useState } from 'react';

import { ChartView } from './ChartView';
import { Button, Space } from 'antd';

export const ChartManager = () => {
    const [seriesName, setSeriesName] = useState<'Price' | 'Market Cap'>(
        'Price',
    );

    const handleButtonPriceClick = () => {
        setSeriesName('Price');
    };

    const handleButtonMarketCapClick = () => {
        setSeriesName('Market Cap');
    };

    return (
        <div className="chart-tabs">
            <Space className="buttons-panel" size={10}>
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
            <ChartView seriesName={seriesName}
            />
        </div>
    );
};
