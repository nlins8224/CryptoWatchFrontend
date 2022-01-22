import React, { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { chartViewOptions } from '../config/chartViewOptions';

export const Chart = (props: {
    seriesData: number[][];
    seriesName: string;
}) => {
    const [chartOptions, setChartOptions] = useState(chartViewOptions);

    const updateSeries = (seriesData: number[][]): boolean => {
        if (!Array.isArray(seriesData) || !seriesData.length) {
            return false;
        }

        const filterSeriesData = (series: number[][], fIdx: number) => {
            return series.map((subArray) => {
                return subArray.filter((el, idx) => idx !== fIdx);
            });
        };

        const seriesVolume = filterSeriesData(seriesData, 1);
        const seriesFirstVal = filterSeriesData(seriesData, 2);

        setChartOptions({
            series: [
                {
                    data: seriesFirstVal,
                    name: props.seriesName,
                },
                {
                    data: seriesVolume,
                },
            ],
        });
        return true;
    };

    useEffect(() => {
        updateSeries(props.seriesData);
    }, [props.seriesData]);

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={chartOptions}
            />
        </div>
    );
};
