import React, { useEffect, useState } from 'react';
import IAsset from '../../interfaces/Asset';
import 'antd/dist/antd.css';
import { useLiveAssetsEventListener } from '../../hooks/useLiveAssetsEventListener';
import { getDatabase, ref } from '@firebase/database';
import { useWatchlistData } from '../../hooks/useWatchlistData';
import { columns } from '../LiveAssets/config/columns';
import { LiveAssetsTable } from '../LiveAssets/children/LiveAssetsTable';
import { Col, Row } from 'antd';
import { getTableChartData } from '../LiveAssets/utils/getTableChartData';
import { LiveChartsTable } from '../LiveAssets/children/LiveChartsTable';
import { columnsCharts } from '../LiveAssets/config/columns';

const db = getDatabase();
const liveCoinsRef = ref(db, '/live-coins');
const WatchlistTableView: () => JSX.Element = () => {
    const [filteredAssets, setFilteredAssets] = useState<IAsset[]>([]);
    const [filteredChartData, setFilteredChartData] = useState<
        Map<string, any>
    >(new Map());
    const chartData = getTableChartData({ name: 'Price' });
    const assetArray = useLiveAssetsEventListener(liveCoinsRef);
    const symbols = useWatchlistData();

    const filterAssets = () => {
        const filtered = assetArray.filter((item) =>
            symbols?.data.includes(item.symbol),
        );
        setFilteredAssets(filtered);
    };

    const filterChartData = (chartData: Map<string, any>) => {
        const filtered: Map<string, any> = new Map();
        chartData.forEach((value: any, key: string) => {
            if (symbols?.data.includes(key)) {
                filtered.set(key, value);
            }
        });
        setFilteredChartData(filtered);
    };

    useEffect(() => {
        filterAssets();
        filterChartData(chartData);
    }, [symbols?.data]);

    return (
        <div>
            <Row justify="center">
                <Col xs={20} sm={20} md={20} lg={20} xl={20} xxl={{ span: 14 }}>
                    <LiveAssetsTable
                        assets={filteredAssets}
                        title={'Watchlist'}
                        columns={columns}
                    />
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={{ span: 4 }}>
                    <LiveChartsTable
                        title={'5 Days data'}
                        columns={columnsCharts}
                        chartData={filteredChartData}
                    />
                </Col>
            </Row>
        </div>
    );
};

export { WatchlistTableView };
