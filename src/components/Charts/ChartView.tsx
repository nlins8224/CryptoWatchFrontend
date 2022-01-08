import {useLocation} from "react-router-dom";
import {useGetHistoricalSymbolData} from "./useGetHistoricalSymbolData";
import {chartParser} from "./chartParser";
import React from "react";
import {Chart} from "./Chart";
import {Tabs} from "antd";
const { TabPane } = Tabs;

export const ChartView = () => {
    const location = useLocation()
    const symbol = location.pathname.split('/').pop()

    const path1Min = `/historical-coins-1M/${symbol}`
    const path1Day = `/historical-coins-1D/${symbol}`

    const allOneMinuteAssets = useGetHistoricalSymbolData(path1Min)
    const allOneDayAssets = useGetHistoricalSymbolData(path1Day)

    const parsedAssetsMinute = chartParser(allOneMinuteAssets.data)
    const parsedAssetsDay = chartParser(allOneDayAssets.data)

    return (

        <div>
            <div className="chart-tabs">
                <Tabs defaultActiveKey="1" type="card">
                    <TabPane tab="Day" key="1">
                        <div className="high-chart">
                            <Chart seriesData={parsedAssetsDay} />
                        </div>
                    </TabPane>
                    <TabPane tab="Minute" key="2">
                        <div className="high-chart">
                            <Chart seriesData={parsedAssetsMinute} />
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </div>

    )
}