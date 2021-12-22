import React, {useEffect, useState} from "react";
import {getDatabase, onValue, ref} from "firebase/database";
import {LiveCoinsTable} from "./LiveCoinsTable"
import {Asset} from "../../Asset";
import 'antd'
import "antd/dist/antd.css"
import {LiveCoinsSortedBy} from "./LiveCoinsSortedBy";
import {v4 as uuidv4} from 'uuid';
import {Col, Divider, Row} from "antd";

const columnsVolume: any = [
    {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
    },
    {
        title: 'Volume',
        dataIndex: 'total_volume',
        key: 'volume',
    },
    {
        title: 'Change',
        dataIndex: 'price_change',
        key: 'change',
    },
    {
        title: '% Change',
        dataIndex: 'price_change_percentage',
        key: '% change',
    },

];

const columnsPrice: any = [
    {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Change',
        dataIndex: 'price_change',
        key: 'change',
    },
    {
        title: '% Change',
        dataIndex: 'price_change_percentage',
        key: '% change',
    },

];

const db = getDatabase()
const liveCoinsRef = ref(db, '/live-coins')
const LiveCoinsReceiver: () => JSX.Element = () => {
    const [assetArray, setAssetArray] = useState<Asset[]>([]);

    const setAssetStatusListener = (ref: any) => {
        onValue(ref, (snapshot) => {
            const data: Map<string, Asset> = new Map(Object.entries(snapshot.val()))
            let assets: Asset[] = getAssets(data)
            assets = parseAssets(assets)
            setAssetArray(assets)
        });
    }

    const getAssets = (assetMap: Map<string, Asset> | undefined) => {
        const assets: Asset[] = [];
        assetMap?.forEach((value: Asset) => assets.push(value));
        return assets;
    }

    const parseAssets =  (assetArray: Asset[] ): Asset[] => {
        return assetArray.map(obj => ({...obj, key: uuidv4()}))
    }

    useEffect(() => {
        setAssetStatusListener(liveCoinsRef);
    }, [])

    const assetArrayByVolume = parseAssets(assetArray)
    const assetArrayByPriceChangeAsc = parseAssets(assetArray)
    const assetArrayByPriceChangeDsc = parseAssets(assetArray)

    return <>
        <Row>
            <div className="MostActive" id="MostActive">
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Divider  orientation="left">
                        <LiveCoinsSortedBy id={"1"} assets={assetArrayByVolume} sortKey={'total_volume'} sortType={'descending'} columns={columnsVolume} />
                    </Divider>
                </Col>
            </div>
            <div className="TopGainers" id="TopGainers">
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Divider orientation="center">
                        <LiveCoinsSortedBy id={"2"} assets={assetArrayByPriceChangeDsc} sortKey={'price_change_percentage'} sortType={'descending'} columns={columnsPrice} />
                    </Divider>
                </Col>
            </div>
            <div className="TopLosers" id="TopLosers">
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Divider orientation="right">
                        <LiveCoinsSortedBy id={"2"} assets={assetArrayByPriceChangeAsc} sortKey={'price_change_percentage'} sortType={'ascending'} columns={columnsPrice} />
                    </Divider>
                </Col>
            </div>
        </Row>
        <div className="LiveCoins">
            <LiveCoinsTable assets={assetArray} />
        </div>
        <React.Fragment>
            <div>My Header Text</div>
        </React.Fragment>
        </>
}

export { LiveCoinsReceiver }
