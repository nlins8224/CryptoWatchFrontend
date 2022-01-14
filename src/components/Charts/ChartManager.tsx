import { useLocation } from 'react-router-dom';
import { useGetHistoricalSymbolData } from './useGetHistoricalSymbolData';
import React, {useEffect, useState} from 'react';

import {ChartView} from "./ChartView";
import {Button, Divider, Space} from "antd";

export const ChartManager = () => {
    const [parseMethod, setParseMethod] = useState<"byPrice" | "byMarketCap">("byPrice")
    const location = useLocation();
    const symbol = location.pathname.split('/').pop();

    const path1Min = `/historical-coins-1M/${symbol}`;
    const path1Day = `/historical-coins-1D/${symbol}`;

    const allOneMinuteAssets = useGetHistoricalSymbolData(path1Min);
    const allOneDayAssets = useGetHistoricalSymbolData(path1Day);

    const handleButtonPriceClick = () => {
        setParseMethod("byPrice")
    }

    const handleButtonMarketCapClick = () => {
        setParseMethod("byMarketCap")
    }

    return (
        <div className="chart-tabs">
                <Space className="buttons-panel" size={5}>
                    <Button type="primary" onClick={() => handleButtonPriceClick()}>Price</Button>
                    <Button type="primary" onClick={() => handleButtonMarketCapClick()}>Market Cap</Button>
                </Space>
            <ChartView allOneDayAssets={allOneDayAssets.data} allOneMinuteAssets={allOneMinuteAssets.data} parseMethod={parseMethod}/>
        </div>
    );
};
