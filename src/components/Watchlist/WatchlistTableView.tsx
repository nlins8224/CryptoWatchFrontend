import React, { useEffect, useState } from 'react';
import IAsset from '../../interfaces/Asset';
import 'antd/dist/antd.css';
import { useLiveAssetsEventListener } from '../../hooks/useLiveAssetsEventListener';
import { getDatabase, ref } from '@firebase/database';
import { useWatchlistData } from '../../hooks/useWatchlistData';
import { columns } from './config/columns';
import { LiveAssetsTable } from '../LiveAssets/children/LiveAssetsTable';
import { Col, Row } from 'antd';
import { getTableChartData } from '../LiveAssets/utils/getTableChartData';

const db = getDatabase();
const liveCoinsRef = ref(db, '/live-coins');
const WatchlistTableView: () => JSX.Element = () => {
    const [filteredAssets, setFilteredAssets] = useState<IAsset[]>([]);
    const chartData = getTableChartData({ name: 'Price' });
    const assetArray = useLiveAssetsEventListener(liveCoinsRef);
    const symbols = useWatchlistData();

    const filterAssets = () => {
        const filtered = assetArray.filter((item) =>
            symbols?.data.includes(item.symbol),
        );
        setFilteredAssets(filtered);
    };

    useEffect(() => {
        filterAssets();
    }, [symbols?.data]);

    return (
        <div>
            <Row align="middle">
                <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    xxl={{ span: 15, offset: 4 }}
                >
                    <LiveAssetsTable
                        assets={filteredAssets}
                        title={'Watchlist'}
                        columns={columns}
                    />
                </Col>
            </Row>
        </div>
    );
};

export { WatchlistTableView };
