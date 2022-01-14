import React, { useState } from 'react';

import { ChartView } from './ChartView';
import { Button, Space } from 'antd';
import ChartSeries from "../../interfaces/ChartSeries";

export const ChartManager = () => {
    const [seriesName, setSeriesName] = useState<ChartSeries>({name: "Price"});

    const handleButtonPriceClick = () => {
        setSeriesName({name: "Price"});
    };

    const handleButtonMarketCapClick = () => {
        setSeriesName({name: "Market Cap"});
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
