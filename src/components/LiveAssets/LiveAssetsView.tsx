import React, { useEffect, useState } from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import { LiveAssetsTable } from './LiveAssetsTable';
import 'antd/dist/antd.less';
import { LiveAssetsSortedBy } from './LiveAssetsSortedBy';
import { Col, Row } from 'antd';
import { columnsVolume, columnsPrice, columns } from './config/columns';
import { useLiveAssetsStatusListener } from './useLiveAssetsStatusListener';

const db = getDatabase();
const liveCoinsRef = ref(db, '/live-coins');
const LiveAssetsView: () => JSX.Element = () => {
    const assetArray = useLiveAssetsStatusListener(liveCoinsRef);

    return (
        <>
            <Row align="middle" gutter={[16, 16]}>
                <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={8}
                    xl={8}
                    xxl={{ span: 5, offset: 4 }}
                >
                    <LiveAssetsSortedBy
                        id={'1'}
                        assets={assetArray}
                        sortKey={'total_volume'}
                        sortType={'descending'}
                        title={'Most Active'}
                        columns={columnsVolume}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={5}>
                    <LiveAssetsSortedBy
                        id={'2'}
                        assets={assetArray}
                        sortKey={'price_change_percentage'}
                        sortType={'descending'}
                        title={'Top Gainers'}
                        columns={columnsPrice}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={5}>
                    <LiveAssetsSortedBy
                        id={'3'}
                        assets={assetArray}
                        sortKey={'price_change_percentage'}
                        sortType={'ascending'}
                        title={'Top Losers'}
                        columns={columnsPrice}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{span: 15, offset: 4}}>
                    <LiveAssetsTable
                        assets={assetArray}
                        title={'Cryptocurrency'}
                        columns={columns}
                    />
                </Col>
            </Row>
        </>
    );
};

export { LiveAssetsView };
