import { useLocation } from 'react-router-dom';
import { useGetHistoricalSymbolData } from './useGetHistoricalSymbolData';
import { chartParser } from './chartParser';
import React from 'react';
import { Chart } from './Chart';
import { Tabs } from 'antd';
import {
    cutByTimestamp,
    getMidnightXDaysAgoUTC,
    getMidnightXYearsAgoUTC,
} from '../../timeUtils';
const { TabPane } = Tabs;

export const ChartView = () => {
    const location = useLocation();
    const symbol = location.pathname.split('/').pop();

    const path1Min = `/historical-coins-1M/${symbol}`;
    const path1Day = `/historical-coins-1D/${symbol}`;

    const allOneMinuteAssets = useGetHistoricalSymbolData(path1Min);
    const allOneDayAssets = useGetHistoricalSymbolData(path1Day);

    const midnightUTC = getMidnightXDaysAgoUTC(0);
    const fiveDaysAgo = getMidnightXDaysAgoUTC(4);
    const thirtyDaysAgo = getMidnightXDaysAgoUTC(30);
    const threeMonthsAgo = getMidnightXDaysAgoUTC(90);
    const oneYearAgo = getMidnightXYearsAgoUTC(1);
    const fiveYearsAgo = getMidnightXYearsAgoUTC(5);

    const dailyAssets = chartParser(
        cutByTimestamp(midnightUTC, allOneMinuteAssets.data),
    );
    const fiveDaysAssets = chartParser(
        cutByTimestamp(fiveDaysAgo, allOneMinuteAssets.data),
    );
    const thirtyDaysAssets = chartParser(
        cutByTimestamp(thirtyDaysAgo, allOneDayAssets.data),
    );
    const threeMonthsAssets = chartParser(
        cutByTimestamp(threeMonthsAgo, allOneDayAssets.data),
    );
    const oneYearAssets = chartParser(
        cutByTimestamp(oneYearAgo, allOneDayAssets.data),
    );
    const fiveYearsAssets = chartParser(
        cutByTimestamp(fiveYearsAgo, allOneDayAssets.data),
    );

    return (
        <div>
            <div className="chart-tabs">
                <Tabs defaultActiveKey="1" type="card">
                    <TabPane tab="1D" key="1">
                        <Chart seriesData={dailyAssets} />
                    </TabPane>
                    <TabPane tab="5D" key="2">
                        <Chart seriesData={fiveDaysAssets} />
                    </TabPane>
                    <TabPane tab="1M" key="3">
                        <Chart seriesData={thirtyDaysAssets} />
                    </TabPane>
                    <TabPane tab="3M" key="4">
                        <Chart seriesData={threeMonthsAssets} />
                    </TabPane>
                    <TabPane tab="1Y" key="5">
                        <Chart seriesData={oneYearAssets} />
                    </TabPane>
                    <TabPane tab="5Y" key="6">
                        <Chart seriesData={fiveYearsAssets} />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};
