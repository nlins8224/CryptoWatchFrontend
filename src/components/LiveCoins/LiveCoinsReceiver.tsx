import React, { useEffect, useState } from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import { LiveCoinsTable } from './LiveCoinsTable';
import 'antd/dist/antd.less';
import { LiveCoinsSortedBy } from './LiveCoinsSortedBy';
import {Col, Row} from 'antd';
import {columnsVolume, columnsPrice, columns} from './config/columns'
import {useAssetStatusListener} from "../useAssetStatusListener";

const LiveCoinsReceiver: () => JSX.Element = () => {
    const assetArray = useAssetStatusListener()

    return (
        <>
            <Row align="middle" gutter={[24, 24]}>
                <Col xs={{ span: 4, offset: 3 }} lg={{ span: 5, offset: 4 }}>
                    <LiveCoinsSortedBy
                        id={'1'}
                        assets={assetArray}
                        sortKey={'total_volume'}
                        sortType={'descending'}
                        title={'Most Active'}
                        columns={columnsVolume}
                    />
                </Col>
                <Col xs={{ span: 4, offset: 0 }} lg={{ span: 5, offset: 0 }}>
                    <LiveCoinsSortedBy
                        id={'2'}
                        assets={assetArray}
                        sortKey={'price_change_percentage'}
                        sortType={'descending'}
                        title={'Top Gainers'}
                        columns={columnsPrice}
                    />
                </Col>
                <Col xs={{ span: 4, offset: 0 }} lg={{ span: 5, offset: 0 }}>
                    <LiveCoinsSortedBy
                        id={'3'}
                        assets={assetArray}
                        sortKey={'price_change_percentage'}
                        sortType={'ascending'}
                        title={'Top Losers'}
                        columns={columnsPrice}
                    />
                </Col>
                <Col xs={{ span: 12, offset: 3 }} lg={{ span: 15, offset: 4 }}>
                    <LiveCoinsTable assets={assetArray} title={'Cryptocurrency'} columns={columns} />
                </Col>
            </Row>
        </>
    );
}

export { LiveCoinsReceiver };
