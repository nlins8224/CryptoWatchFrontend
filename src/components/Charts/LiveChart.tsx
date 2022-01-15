import React, { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { chartViewOptions } from './config/chartViewOptions';

export const LiveChart = (props: {
    seriesData: number[][];
}) => {
    const [chartOptions, setChartOptions] = useState(chartViewOptions);

    const updateSeries = (seriesData: number[][]): boolean => {
        if (!Array.isArray(seriesData) || !seriesData.length) {
            return false;
        }
        setChartOptions({
            series: [
                {
                    data: seriesData,
                    name: "Price"
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