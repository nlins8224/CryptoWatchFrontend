import React, { Component } from "react";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {chartViewOptions} from "./config/chartViewOptions";

export default class ChartView extends Component {
    render() {
        return (
            <div className="high-chart">
                <HighchartsReact highcharts={Highcharts}
                                 constructorType={'stockChart'}
                                 options={chartViewOptions}/>
            </div>
        );
    }
}