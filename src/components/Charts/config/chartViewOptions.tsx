const primaryColor = "#00C7B0"
const secondaryColor = "#85B5FA"
const gridLineColor = "#273341"
const backgroundColor = "#15191C"

export const chartViewOptions: any = {
    yAxis: {
        offset: 20,

        labels: {
            x: 10,
            style: {
                color: secondaryColor,
                position: "absolute"
            },
            align: "left"
        },
        gridLineWidth: 0.5,
        gridLineColor: gridLineColor,
        tickColor: secondaryColor
    },

    xAxis: {
        x: 10,
        type: "data",
        color: secondaryColor,
        gridLineWidth: 0.5,
        gridLineColor: gridLineColor,
        tickLength: 0,
        lineColor: gridLineColor,

        labels: {
            style: {
                color: secondaryColor,
                position: "absolute"
            },
        }

    },
    tooltip: {
        shared: true,
    },
    navigator: {
        outlineColor: gridLineColor,
        xAxis: {
            gridLineColor: gridLineColor,
            labels: {
                align: 'left',
                style: {
                    color: secondaryColor
                },
            }
        },
    },
    plotOptions: {
        series: {
            showInNavigator: true,
            gapSize: 6
        }
    },
    chart: {
        backgroundColor: backgroundColor,
        height: 600,
        width: 1204.44,
        spacing: [5, 15, 15, 15]
    },
    axes: {
      color: secondaryColor,
    },
    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: 'black'
        },
        itemHoverStyle:{
            color: 'gray'
        }
    },

    credits: {
        enabled: false
    },

    scrollbar: {
        enabled: false
    },

    rangeSelector: {
        enabled: false
    },

    series: [
        {
            name: "Price",
            type: "spline",
            data: [[],[]],

            tooltip: {
                valueDecimals: 2
            },
            color: primaryColor
        },

    ]
};