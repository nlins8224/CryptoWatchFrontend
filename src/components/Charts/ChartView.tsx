import IAsset from '../../interfaces/Asset';
import {
    cutByTimestamp,
    getMidnightXDaysAgoUTC,
    getMidnightXYearsAgoUTC,
} from '../../timeUtils';
import {
    chartFilterByPrice,
    chartFilterByMarketCap,
} from './chartFilterByPrice';
import { Tabs } from 'antd';
import { Chart } from './Chart';
import React from 'react';
const { TabPane } = Tabs;

export const ChartView = (props: {
    allOneMinuteAssets: IAsset[];
    allOneDayAssets: IAsset[];
    seriesName: 'Price' | 'Market Cap';
}) => {
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
        cutByTimestamp(midnightUTC, props.allOneMinuteAssets),
    );
    const fiveDaysAssets = parseMethod(
        cutByTimestamp(fiveDaysAgo, props.allOneMinuteAssets),
    );
    const thirtyDaysAssets = parseMethod(
        cutByTimestamp(thirtyDaysAgo, props.allOneDayAssets),
    );
    const threeMonthsAssets = parseMethod(
        cutByTimestamp(threeMonthsAgo, props.allOneDayAssets),
    );
    const oneYearAssets = parseMethod(
        cutByTimestamp(oneYearAgo, props.allOneDayAssets),
    );
    const fiveYearsAssets = parseMethod(
        cutByTimestamp(fiveYearsAgo, props.allOneDayAssets),
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
