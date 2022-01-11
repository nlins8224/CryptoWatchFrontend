import React, {useEffect, useState} from 'react';
import IAsset from '../../interfaces/Asset';
import 'antd/dist/antd.css';
import {useLiveAssetsStatusListener} from "../LiveAssets/useLiveAssetsStatusListener";
import {getDatabase, ref} from "@firebase/database";
import {useWatchlistData} from "./useWatchlistData";
import {columns} from "./config/columns";
import {LiveAssetsTable} from "../LiveAssets/LiveAssetsTable";
import {Col, Row} from "antd";

const db = getDatabase();
const liveCoinsRef = ref(db, '/live-coins');
const WatchlistTableView: () => JSX.Element = () => {
    const [filteredAssets, setFilteredAssets] = useState<IAsset[]>([])
    const assetArray = useLiveAssetsStatusListener(liveCoinsRef)
    const symbols = useWatchlistData()

    const filterAssets = () => {
        const filtered = assetArray.filter(item => symbols?.data.includes(item.symbol))
        setFilteredAssets(filtered)
    }

    useEffect(() => {
        filterAssets()
    }, [symbols?.data])

    return (
        <div>
            <Row align="middle" >
                <Col xs={{ span: 12, offset: 3 }} lg={{ span: 15, offset: 4 }}>
                    <LiveAssetsTable assets={filteredAssets} title={'Watchlist'} columns={columns} />
                </Col>
            </Row>
        </div>
    )
}

export { WatchlistTableView }