import { parseChartAssets } from './chartParser';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetHistoricalSymbolData } from '../../../hooks/useGetHistoricalSymbolData';
import ChartSeriesName from '../../../interfaces/ChartSeriesName';
import {
    getMidnightXDaysAgoUTC,
    getMidnightXYearsAgoUTC,
} from '../../../timeUtils';

export const chartData = (seriesName: ChartSeriesName) => {
    const location = useLocation();
    const symbol = location.pathname.split('/').pop();

    const path1Min = `/historical-coins-1M/${symbol}`;
    const path1Day = `/historical-coins-1D/${symbol}`;

    const allOneMinuteAssets = useGetHistoricalSymbolData(path1Min);
    const allOneDayAssets = useGetHistoricalSymbolData(path1Day);

    const dailyAssets = parseChartAssets(
        allOneMinuteAssets.data,
        seriesName,
        0,
        getMidnightXDaysAgoUTC,
    );
    const fiveDaysAssets = parseChartAssets(
        allOneMinuteAssets.data,
        seriesName,
        4,
        getMidnightXDaysAgoUTC,
    );
    const thirtyDaysAssets = parseChartAssets(
        allOneDayAssets.data,
        seriesName,
        30,
        getMidnightXDaysAgoUTC,
    );
    const threeMonthsAssets = parseChartAssets(
        allOneDayAssets.data,
        seriesName,
        90,
        getMidnightXDaysAgoUTC,
    );

    const oneYearAssets = parseChartAssets(
        allOneDayAssets.data,
        seriesName,
        1,
        getMidnightXYearsAgoUTC,
    );
    const fiveYearsAssets = parseChartAssets(
        allOneDayAssets.data,
        seriesName,
        5,
        getMidnightXYearsAgoUTC,
    );

    return {
        dailyAssets,
        fiveDaysAssets,
        thirtyDaysAssets,
        threeMonthsAssets,
        oneYearAssets,
        fiveYearsAssets,
    };
};
