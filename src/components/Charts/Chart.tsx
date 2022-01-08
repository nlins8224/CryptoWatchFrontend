import React, {useEffect, useState} from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import {chartViewOptions} from "./config/chartViewOptions";

export const Chart = (props: {seriesData: number[][]}) => {
    const [chartOptions, setChartOptions] = useState(chartViewOptions)

    const updateSeries = (seriesData: number[][]): boolean => {
        if (!Array.isArray(seriesData) || !seriesData.length) {
            return false
        }
        console.log("HI")
        setChartOptions({
            series: [
                {
                    data: seriesData
                },
            ]
        })
        return true
    }

    useEffect(() => {
        console.log(props.seriesData)
        updateSeries(props.seriesData)
    }, [props.seriesData])


    return (
        <div className="high-chart">
            <HighchartsReact highcharts={Highcharts}
                             constructorType={'stockChart'}
                             options={chartOptions}/>
        </div>
    )
}

