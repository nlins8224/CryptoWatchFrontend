import React, {useEffect, useState} from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import { LiveAssetsTable } from './LiveAssetsTable';
import 'antd/dist/antd.less';
import { LiveAssetsSortedBy } from './LiveAssetsSortedBy';
import { Col, Row } from 'antd';
import {columnsVolume, columnsPrice, columns, columnsCharts} from './config/columns';
import { useLiveAssetsStatusListener } from './useLiveAssetsStatusListener';
import {LiveChartsTable} from "./LiveChartsTable";
import {getLiveChartData} from "../Charts/utils/getLiveChartData";
import {useGetHistoricalData} from "../Charts/utils/useGetHistoricalData";
import {parseChartAssets} from "../Charts/utils/chartParser";
import {getMidnightXDaysAgoUTC} from "../../timeUtils";

const db = getDatabase();
const liveCoinsRef = ref(db, '/live-coins');
const LiveAssetsTableView = () => {
    const assetArray = useLiveAssetsStatusListener(liveCoinsRef);
    //const chartData = getLiveChartData({name: "Price"})

    const path1Min = '/historical-coins-1M-5D-filtered';
    const allOneMinuteAssets = useGetHistoricalData(path1Min);
    const [chartData, setChartData] = useState<Map<string, any>>(new Map())

    const prepareChartData = (allOneMinuteAssets: {status: string, data: any}) => {
        const chartDataMap: Map<string, number[][]> = new Map()

            const assets: Map<string, any> = allOneMinuteAssets.data
            // Why modyfing assets results in empty array?

            assets.forEach((value, key) => {
                const data = parseChartAssets(value, {name: "Price"}, 5, getMidnightXDaysAgoUTC)
                chartDataMap.set(key, data)
            })

        console.log(chartDataMap)
        return chartDataMap
    }


    useEffect(() => {
        if (allOneMinuteAssets.status === "LOADED") {
               const data = prepareChartData(allOneMinuteAssets)
            setChartData(data)
        }
        }, [allOneMinuteAssets.status])


    return (
        <>
            <Row gutter={[16, 32]} justify="center">
                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={{ span: 6 }}>
                    <LiveAssetsSortedBy
                        id={'1'}
                        assets={assetArray}
                        sortKey={'total_volume'}
                        sortType={'descending'}
                        title={'Most Active'}
                        columns={columnsVolume}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={6}>
                    <LiveAssetsSortedBy
                        id={'2'}
                        assets={assetArray}
                        sortKey={'price_change_percentage'}
                        sortType={'descending'}
                        title={'Top Gainers'}
                        columns={columnsPrice}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={6}>
                    <LiveAssetsSortedBy
                        id={'3'}
                        assets={assetArray}
                        sortKey={'price_change_percentage'}
                        sortType={'ascending'}
                        title={'Top Losers'}
                        columns={columnsPrice}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 14 }}>
                    <LiveAssetsTable
                        assets={assetArray}
                        title={'Cryptocurrency'}
                        columns={columns}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 4 }}>
                    <LiveChartsTable
                        title={'Cryptocurrency'}
                        columns={columnsCharts}
                        chartData={chartData}
                    />
                </Col>
            </Row>
        </>
    );
};

export { LiveAssetsTableView };