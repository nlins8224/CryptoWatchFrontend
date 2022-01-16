import React from 'react';

import {parseChartAssets} from "./utils/chartParser";
import {getMidnightXDaysAgoUTC} from "../../timeUtils";
import ChartSeriesName from "../../interfaces/ChartSeriesName";
import {useGetHistoricalData} from "./utils/useGetHistoricalData";

export const liveChartData = (
    seriesName: ChartSeriesName
) => {

    //should be a hook?
    const path1Min = '/historical-coins-1M-5D-filtered';
    const allOneMinuteAssets = useGetHistoricalData(path1Min);

    const assetsData: Map<string, any> = new Map()

    if (allOneMinuteAssets.status === "LOADED") {
        const assets: Map<string, any> = allOneMinuteAssets.data
        // Why modyfing assets results in empty array?

        assets.forEach( (value, key) => {
            const data = parseChartAssets(value, seriesName, 5, getMidnightXDaysAgoUTC)
            assetsData.set(key, data)
        })

        console.log(assetsData)
    }

    return assetsData
};
