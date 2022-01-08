const primaryColor = "#00C7B0"
const secondaryColor = "#85B5FA"
const gridLineColor = "#273341"
const backgroundColor = "#212121"

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
        width: 1200.
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

    // rangeSelector: {
    //     buttonTheme: {
    //         fill: 'none',
    //         stroke: 'none',
    //         'stroke-width': 0,
    //         r: 8,
    //         style: {
    //             color: secondaryColor,
    //             fontWeight: 'bold'
    //         },
    //         states: {
    //             hover: {
    //                 style: {
    //                     color: 'lightblue',
    //                 },
    //                 fill: 'none'
    //             },
    //             select: {
    //                 fill: 'none',
    //                 style: {
    //                     color: 'white'
    //                 }
    //             }
    //         }
    //     },
    //     inputBoxBorderColor: 'gray',
    //     inputBoxWidth: 120,
    //     inputBoxHeight: 18,
    //     inputStyle: {
    //         color: secondaryColor,
    //         fontWeight: 'bold'
    //     },
    //     labelStyle: {
    //         color: 'silver',
    //         fontWeight: 'bold'
    //     },
    //     buttons: [
    //         {
    //             type: "day",
    //             count: 1,
    //             text: "1D"
    //         },
    //         {
    //             type: "day",
    //             count: 5,
    //             text: "5D"
    //         },
    //         {
    //             type: "month",
    //             count: 1,
    //             text: "1M"
    //         },
    //         {
    //             type: "year",
    //             count: 1,
    //             text: "1Y"
    //         },
    //         {
    //             type: "year",
    //             count: 5,
    //             text: "5Y"
    //         },
    //         {
    //             type: "all",
    //             text: "ALL"
    //         }
    //     ],
    //     selected: 1
    // },
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