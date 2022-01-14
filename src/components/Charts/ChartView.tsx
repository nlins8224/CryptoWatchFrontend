import {
    cutByTimestamp,
    getMidnightXDaysAgoUTC,
    getMidnightXYearsAgoUTC,
} from '../../timeUtils';
import {
    chartFilterByPrice,
    chartFilterByMarketCap,
} from './chartParser';
import { Tabs } from 'antd';
import { Chart } from './Chart';
import React from 'react';
import {useLocation} from "react-router-dom";
import {useGetHistoricalSymbolData} from "./useGetHistoricalSymbolData";
const { TabPane } = Tabs;

export const ChartView = (props: {
    seriesName: 'Price' | 'Market Cap';
}) => {

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

    const parseMethod =
        props.seriesName === 'Price'
            ? chartFilterByPrice
            : chartFilterByMarketCap;

    const dailyAssets = parseMethod(
        cutByTimestamp(midnightUTC, allOneMinuteAssets.data),
    );
    const fiveDaysAssets = parseMethod(
        cutByTimestamp(fiveDaysAgo, allOneMinuteAssets.data),
    );
    const thirtyDaysAssets = parseMethod(
        cutByTimestamp(thirtyDaysAgo, allOneDayAssets.data),
    );
    const threeMonthsAssets = parseMethod(
        cutByTimestamp(threeMonthsAgo, allOneDayAssets.data),
    );
    const oneYearAssets = parseMethod(
        cutByTimestamp(oneYearAgo, allOneDayAssets.data),
    );
    const fiveYearsAssets = parseMethod(
        cutByTimestamp(fiveYearsAgo, allOneDayAssets.data),
    );

    return (
        <div>
            <Tabs defaultActiveKey="1" type="card">
                <TabPane tab="1D" key="1">
                    <Chart
                        seriesData={dailyAssets}
                        seriesName={props.seriesName}
                    />
                </TabPane>
                <TabPane tab="5D" key="2">
                    <Chart
                        seriesData={fiveDaysAssets}
                        seriesName={props.seriesName}
                    />
                </TabPane>
                <TabPane tab="1M" key="3">
                    <Chart
                        seriesData={thirtyDaysAssets}
                        seriesName={props.seriesName}
                    />
                </TabPane>
                <TabPane tab="3M" key="4">
                    <Chart
                        seriesData={threeMonthsAssets}
                        seriesName={props.seriesName}
                    />
                </TabPane>
                <TabPane tab="1Y" key="5">
                    <Chart
                        seriesData={oneYearAssets}
                        seriesName={props.seriesName}
                    />
                </TabPane>
                <TabPane tab="5Y" key="6">
                    <Chart
                        seriesData={fiveYearsAssets}
                        seriesName={props.seriesName}
                    />
                </TabPane>
            </Tabs>
        </div>
    );
};
