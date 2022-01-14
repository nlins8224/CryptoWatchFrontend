import React from 'react';

import {useGetHistoricalSymbolData} from "./utils/useGetHistoricalSymbolData";
import {filterChartByPrice, parseChartAssets} from "./utils/chartParser";
import {getMidnightXDaysAgoUTC} from "../../timeUtils";
import ChartSeriesName from "../../interfaces/ChartSeriesName";
import IAsset from "../../interfaces/Asset";

export const LiveChartView = (
    seriesName: ChartSeriesName
) => {

    const path1Min = `/historical-coins-1M/`;
    const allOneMinuteAssets = useGetHistoricalSymbolData(path1Min);


};
