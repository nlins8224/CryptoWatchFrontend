import { getLiveChartData } from '../Charts/utils/getLiveChartData';
import { LiveChartsTable } from './LiveChartsTable';
import { columnsCharts } from './config/columns';
import React, {useEffect, useState} from 'react';
import {useGetHistoricalData} from "../Charts/utils/useGetHistoricalData";
import {parseChartAssets} from "../Charts/utils/chartParser";
import {getMidnightXDaysAgoUTC} from "../../timeUtils";

const LiveChartsTableView: () => JSX.Element = () => {

    const path1Min = '/historical-coins-1M-5D-filtered';
    const allOneMinuteAssets = useGetHistoricalData(path1Min);
    const [chartData, setChartData] = useState<Map<string, any>>(new Map())

    const prepareChartData = (allOneMinuteAssets: {status: string, data: any}) => {
        const assetsData: Map<string, any> = new Map()

        const assets: Map<string, any> = allOneMinuteAssets.data
        // Why modyfing assets results in empty array?

        assets.forEach((value, key) => {
            const data = parseChartAssets(value, {name: "Price"}, 5, getMidnightXDaysAgoUTC)
            assetsData.set(key, data)
        })

        return assetsData
    }


    useEffect(() => {
        if (allOneMinuteAssets.status === "LOADED") {
            const data = prepareChartData(allOneMinuteAssets)
            setChartData(data)
        }
    }, [allOneMinuteAssets.status])

    return (
        <LiveChartsTable
            title={'Live Data'}
            columns={columnsCharts}
            chartData={chartData}
        />
    );
};

export { LiveChartsTableView };
