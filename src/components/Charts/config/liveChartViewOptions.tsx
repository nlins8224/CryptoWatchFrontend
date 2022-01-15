const primaryColor = '#00C7B0';
const secondaryColor = '#85B5FA';
const gridLineColor = '#273341';
const backgroundColor = '#15191C';

export const liveChartViewOptions: any = {
    yAxis: {
        enabled: false
    },

    xAxis: {
        enabled: false
    },

    tooltip: {
        shared: true,
    },
    navigator: {
       enabled: false
    },
    plotOptions: {
        enabled: false
    },
    chart: {
        backgroundColor: backgroundColor,
        height: 100,
        width: 250,
    },

    responsive: {
        rules: [
            {
                condition: {
                    maxWidth: 100,
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
        enabled: false
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
