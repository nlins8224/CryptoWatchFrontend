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
            <Row align="middle" gutter={[24, 24]}>
                <Col xs={{ span: 4, offset: 3 }} lg={{ span: 5, offset: 4 }}>
                    <LiveAssetsSortedBy
                        id={'1'}
                        assets={assetArray}
                        sortKey={'total_volume'}
                        sortType={'descending'}
                        title={'Most Active'}
                        columns={columnsVolume}
                    />
                </Col>
                <Col xs={{ span: 4, offset: 0 }} lg={{ span: 5, offset: 0 }}>
                    <LiveAssetsSortedBy
                        id={'2'}
                        assets={assetArray}
                        sortKey={'price_change_percentage'}
                        sortType={'descending'}
                        title={'Top Gainers'}
                        columns={columnsPrice}
                    />
                </Col>
                <Col xs={{ span: 4, offset: 0 }} lg={{ span: 5, offset: 0 }}>
                    <LiveAssetsSortedBy
                        id={'3'}
                        assets={assetArray}
                        sortKey={'price_change_percentage'}
                        sortType={'ascending'}
                        title={'Top Losers'}
                        columns={columnsPrice}
                    />
                </Col>
                <Col xs={{ span: 12, offset: 3 }} lg={{ span: 15, offset: 4 }}>
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
