import React, { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { liveChartViewOptions } from '../../Charts/config/liveChartViewOptions';

export const TableChart = (props: { seriesData: number[][] }) => {
    const [chartOptions, setChartOptions] = useState(liveChartViewOptions);

    const updateSeries = (seriesData: number[][]): boolean => {
        if (!Array.isArray(seriesData) || !seriesData.length) {
            return false;
        }
        setChartOptions({
            series: [
                {
                    data: seriesData,
                    name: 'Price',
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
