const primaryColor = '#00C7B0';
const secondaryColor = '#85B5FA';
const gridLineColor = '#273341';
const backgroundColor = '#15191C';

export const liveChartViewOptions: any = {
    yAxis: {
        labels: {
            x: 2,
            style: {
                color: secondaryColor,
                position: 'absolute',
            },
            align: 'left',
        },
        gridLineWidth: 0,
        gridLineColor: gridLineColor,
        tickColor: secondaryColor,
    },

    xAxis: {
        x: 2,
        type: 'data',
        color: secondaryColor,
        gridLineWidth: 0,
        gridLineColor: gridLineColor,
        tickLength: 0,
        lineColor: gridLineColor,

        labels: {
            style: {
                color: secondaryColor,
                position: 'absolute',
            },
        },
    },

    tooltip: {
        shared: true,
    },
    navigator: {
        enabled: false,
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
        },
    },
    chart: {
        backgroundColor: backgroundColor,
        height: 125,
        width: 250,
    },

    responsive: {
        rules: [
            {
                condition: {
                    maxWidth: 250,
                },
                chartOptions: {
                    legend: {
                        enabled: false,
                    },
                },
            },
        ],
    },

    scrollbar: {
        enabled: false,
    },

    axes: {
        color: secondaryColor,
    },
    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: 'black',
        },
        itemHoverStyle: {
            color: 'gray',
        },
    },

    credits: {
        enabled: false,
    },

    rangeSelector: {
        enabled: false,
    },

    series: [
        {
            name: 'Price',
            type: 'spline',
            data: [[], []],

            tooltip: {
                valueDecimals: 2,
            },
            color: primaryColor,
        },
    ],
};
