import React from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import { LiveAssetsTable } from './LiveAssetsTable';
import 'antd/dist/antd.less';
import { LiveAssetsSortedBy } from './LiveAssetsSortedBy';
import { Col, Row } from 'antd';
import {columnsVolume, columnsPrice, columns, columnsCharts} from './config/columns';
import { useLiveAssetsStatusListener } from './useLiveAssetsStatusListener';
import {liveChartData} from "../Charts/liveChartData";
import {LiveChartsTable} from "./LiveChartsTable";

const db = getDatabase();
const liveCoinsRef = ref(db, '/live-coins');
const LiveAssetsView: () => JSX.Element = () => {
    const assetArray = useLiveAssetsStatusListener(liveCoinsRef);
    const chartData = liveChartData({name: "Price"})
    console.log(chartData)

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
                        title={'Live Data'}
                        columns={columnsCharts}
                        chartData={chartData}
                    />
                </Col>
            </Row>
        </>
    );
};

export { LiveAssetsView };
