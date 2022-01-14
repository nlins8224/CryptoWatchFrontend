import {cutByTimestamp, getMidnightXDaysAgoUTC, getMidnightXYearsAgoUTC,} from '../../../timeUtils';
import {chartFilterByMarketCap, chartFilterByPrice,} from './chartParser';
import React from 'react';
import {useLocation} from "react-router-dom";
import {useGetHistoricalSymbolData} from "./useGetHistoricalSymbolData";
import ChartSeries from "../../../interfaces/ChartSeries";

export const chartData = (seriesName: ChartSeries) => {

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
        seriesName.name === 'Price'
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

   return {
       dailyAssets,
       fiveDaysAssets,
       thirtyDaysAssets,
       threeMonthsAssets,
       oneYearAssets,
       fiveYearsAssets
   }
};