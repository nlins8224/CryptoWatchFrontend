import React, { useEffect, useState } from 'react';
import { ConfigProvider, Empty, Spin, Table } from 'antd';
import 'antd/dist/antd.css';
import Text from 'antd/es/typography/Text';
import { v4 as uuidv4 } from 'uuid';

interface ChartData {
    key: string;
    chart_data: number[][];
    symbol: string;
}
const LiveChartsTable = (props: {
    title: string;
    columns: any;
    chartData: Map<string, number[][]>;
}): JSX.Element => {
    const [chartsData, setChartsData] = useState<ChartData[]>([]);

    const prepareAssets = () => {
        const liveChartsData: ChartData[] = [];
        props.chartData.forEach((value, key) => {
            liveChartsData.push({
                key: uuidv4(),
                chart_data: value,
                symbol: key,
            });
        });
        setChartsData(liveChartsData);
    };

    useEffect(() => {
        prepareAssets();
    }, [props.chartData]);

    return (
        <>
            <div>
                <ConfigProvider renderEmpty={() => <Spin />}>
                    <Text>{props.title}</Text>
                    <Table
                        dataSource={chartsData}
                        columns={props.columns}
                        pagination={false}
                        className="live-charts-table"
                    />
                </ConfigProvider>
            </div>
        </>
    );
};

export { LiveChartsTable };
