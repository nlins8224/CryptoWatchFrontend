import React, { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { chartViewOptions } from './config/chartViewOptions';

export const Chart = (props: {
    seriesData: number[][];
    seriesName: string;
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
                    name: props.seriesName,
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
