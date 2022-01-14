import { Tabs } from 'antd';
import { Chart } from './Chart';
import React from 'react';
import {chartData} from "./utils/chartData";
import ChartSeries from "../../interfaces/ChartSeries";
const { TabPane } = Tabs;

export const ChartView = (props: {
    seriesName: ChartSeries;
}) => {

    const data = chartData(props.seriesName)

    return (
        <div>
            <Tabs defaultActiveKey="1" type="card">
                <TabPane tab="1D" key="1">
                    <Chart
                        seriesData={data.dailyAssets}
                        seriesName={props.seriesName.name}
                    />
                </TabPane>
                <TabPane tab="5D" key="2">
                    <Chart
                        seriesData={data.fiveDaysAssets}
                        seriesName={props.seriesName.name}
                    />
                </TabPane>
                <TabPane tab="1M" key="3">
                    <Chart
                        seriesData={data.thirtyDaysAssets}
                        seriesName={props.seriesName.name}
                    />
                </TabPane>
                <TabPane tab="3M" key="4">
                    <Chart
                        seriesData={data.threeMonthsAssets}
                        seriesName={props.seriesName.name}
                    />
                </TabPane>
                <TabPane tab="1Y" key="5">
                    <Chart
                        seriesData={data.oneYearAssets}
                        seriesName={props.seriesName.name}
                    />
                </TabPane>
                <TabPane tab="5Y" key="6">
                    <Chart
                        seriesData={data.fiveYearsAssets}
                        seriesName={props.seriesName.name}
                    />
                </TabPane>
            </Tabs>
        </div>
    );
};
